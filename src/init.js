// Setup Schedule
import Schedule from './Schedule.js'
const { Vec3, Xfo, CADAsset, CADPart, GeomItem, Lines, LinesProxy, Mesh, MeshProxy, CompoundGeom } = zeaEngine

function download(filename, textInput) {
  var element = document.createElement('a')
  element.setAttribute('href', 'data:text/text;charset=utf-8, ' + encodeURIComponent(textInput))
  element.setAttribute('download', filename)
  document.body.appendChild(element)
  element.click()
  //document.body.removeChild(element);
}

const calcSceneComplexity = (scene) => {
  let parts = 0
  let geomItems = 0
  let triangles = 0
  let lines = 0
  scene.getRoot().traverse((item) => {
    if (item instanceof CADPart) {
      parts++
    } else if (item instanceof GeomItem) {
      geomItems++
      const geom = item.geomParam.value
      if (geom instanceof Lines) {
        lines += geom.getNumSegments()
      } else if (geom instanceof LinesProxy) {
        lines += geom.getNumLineSegments()
      } else if (geom instanceof Mesh) {
        triangles += geom.computeNumTriangles()
      } else if (geom instanceof MeshProxy) {
        triangles += geom.getNumTriangles()
      } else if (geom instanceof CompoundGeom) {
        lines += geom.getNumLineSegments()
        triangles += geom.getNumTriangles()
      }
    }
  })
  console.log(`parts:${geomItems} geomItems:${geomItems} lines:${lines} triangles:${triangles}`)
}

export default function init(scene) {
  const schedule = new Schedule(scene)
  schedule.loadMSProjectXLSX('./data/Hospital/TimeLiner-MasterList(Dynamic Dates).xlsx')
  // return schedule;

  const loadBindingsCache = true
  const writeBindingsCache = true
  const selectionSetPromises = []
  const selectionSetFiles = []
  const assets = {}
  const loadSelectionSetsAndBind = () => {
    calcSceneComplexity(scene)

    if (loadBindingsCache) {
      fetch(new Request('./data/bindings.json'))
        .then((response) => response.json())
        .then((json) => {
          schedule.fromJSON(json)
          schedule.bindTasksToSelSets()
        })
        .catch(console.error)
    } else {
      selectionSetFiles.forEach((selSetFile) => {
        selectionSetPromises.push(schedule.loadSelectionSet(selSetFile, assets))
      })
      Promise.all(selectionSetPromises).then(() => {
        if (writeBindingsCache) {
          const json = schedule.toJSON()
          console.log(json)
          download('bindings.json', JSON.stringify(json, null, 2))
        }
        schedule.bindTasksToSelSets()
      })
    }
  }

  // selectionSetFiles.push("data/Hospital/Site.xml");
  // selectionSetFiles.push("data/Hospital/Structural.xml");
  // selectionSetFiles.push("data/Hospital/Architectural.xml");
  // selectionSetFiles.push("data/Hospital/Plumbing.xml");
  // selectionSetFiles.push("data/Hospital/Electrical.xml");
  // selectionSetFiles.push("data/Hospital/HVAC.xml");
  // selectionSetFiles.push("data/Hospital/Fire Alarm.xml");
  // selectionSetFiles.push("data/Hospital/Sprinkler.xml");
  // loadSelectionSetsAndBind();

  let assetLoadCount = 0
  const loadAssetFile = (path, selSetXML, tr, cb) => {
    // Trim off the 'Autodesk_Hospital_' prefix.
    const parts = path.split('/')
    let name = parts[parts.length - 1]
    if (name.startsWith('Autodesk_Hospital_')) name = name.split('Autodesk_Hospital_')[1]
    name = name.split('.')[0]
    const asset = new CADAsset(name)

    assets[name] = asset
    if (selSetXML) {
      selectionSetFiles.push(selSetXML)
    }

    assetLoadCount++

    asset.load(path).then(() => {
      asset.setName(name)
      if (tr) {
        const xfo = asset.getParameter('LocalXfo').getValue()
        xfo.tr = tr // move up to rest on ground
        asset.getParameter('LocalXfo').setValue(xfo)
      }
      if (cb) cb(asset)
    })
    scene.getRoot().addChild(asset)
    asset.getGeometryLibrary().on('loaded', () => {
      assetLoadCount--
      console.log('assetLoadCount:', assetLoadCount)
      if (assetLoadCount == 0) {
        loadSelectionSetsAndBind()
      }
    })
  }

  const offset = new Vec3(0, 0, -166.85)
  loadAssetFile('data/Hospital/Autodesk_Hospital_Site.ifc.zcad', null, offset, (asset) => {
    const materials = asset.getMaterialLibrary().getMaterials()
    materials.forEach((material) => {
      // const BaseColor = material.getParameter("BaseColor");
      // if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
      const Reflectance = material.getParameter('Reflectance')
      if (Reflectance) Reflectance.setValue(0.01)
      const Metallic = material.getParameter('Metallic')
      if (Metallic) Metallic.setValue(0)
      const Roughness = material.getParameter('Roughness')
      if (Roughness) Roughness.setValue(0.95)
    })
    // asset.getParameter('CutPlaneNormal').setValue(cutNormal);
    // op.addOutput(asset.getParameter('CutPlaneDist'))
    // cutAwayGroup.addItem(asset)
  })
  loadAssetFile(
    'data/Hospital/Autodesk_Hospital_Site Logistics.ifc.zcad',
    'data/Hospital/Site.xml',
    offset,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials()
      materials.forEach((material) => {
        // const BaseColor = material.getParameter("BaseColor");
        // if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter('Reflectance')
        if (Reflectance) Reflectance.setValue(0.01)
        const Metallic = material.getParameter('Metallic')
        if (Metallic) Metallic.setValue(0.9)
        const Roughness = material.getParameter('Roughness')
        if (Roughness) Roughness.setValue(0.9)
      })
    }
  )
  loadAssetFile(
    'data/Hospital/Autodesk_Hospital_Structural.ifc.zcad',
    'data/Hospital/Structural.xml',
    null,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials()
      materials.forEach((material) => {
        // const BaseColor = material.getParameter("BaseColor");
        // if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter('Reflectance')
        if (Reflectance) Reflectance.setValue(0.01)
        const Metallic = material.getParameter('Metallic')
        if (Metallic) Metallic.setValue(0.9)
        const Roughness = material.getParameter('Roughness')
        if (Roughness) Roughness.setValue(0.9)
      })
    }
  )
  /** /
  loadAssetFile(
    'data/Hospital/Autodesk_Hospital_Architectural.ifc.zcad',
    'data/Hospital/Architectural.xml',
    null,
    (asset) => {
      const ribs = asset.resolvePath([
        'Architectural',
        'Assembly_0',
        'Default',
        'Instance_0',
        'Level 1',
        'Option 2 - Ribs Faceted:Option 2 - Ribs Faceted:187261',
      ])
      ribs.setVisible(false)
      ;[
        ['Level 3', 'Stair:7" max riser 11" tread:187507:2'],
        ['Level 4', 'Stair:7" max riser 11" tread:187507:3'],
        ['Level 3', 'Stair:7" max riser 11" tread:189108:2'],
        ['Level 4', 'Stair:7" max riser 11" tread:189108:3'],
        ['Level 3', 'Stair:7" max riser 11" tread:190846:2'],
        ['Level 3', 'Stair:7" max riser 11" tread:195889:2'],
        ['Level 4', 'Stair:7" max riser 11" tread:195889:3'],
        ['Level 5', 'Stair:7" max riser 11" tread:195889:4'],
        ['Level 3', 'Stair:7" max riser 11" tread:190278:2'],
        ['Level 4', 'Stair:7" max riser 11" tread:190278:3'],
        ['Level 3', 'Stair:7" max riser 11" tread:189710:2'],
        ['Level 4', 'Stair:7" max riser 11" tread:189710:3'],
        ['Level 5', 'Stair:7" max riser 11" tread:189710:4'],
        ['Level 1', 'Stair:7" max riser 11" tread - no stringer:196518'],
      ].forEach((subpath) => {
        const path = ['Architectural', 'Assembly_0', 'Default', 'Instance_0', subpath[0], subpath[1]]
        const treeItem = asset.resolvePath(path)
        if (treeItem) {
          const parentItem = treeItem.getOwner()
          parentItem.removeChildByHandle(treeItem)
          // treeItem.setVisible(false);
        }
      })

      const materials = asset.getMaterialLibrary().getMaterials()
      materials.forEach((material) => {
        if (material.getName() == 'Body_0002') {
          const windows = material
          var color = windows.getParameter('BaseColor').getValue()
          color.a = 0.3
          windows.getParameter('BaseColor').setValue(color.toGamma())
          return
        }
        if (material.getName() == 'Body_0007') {
          const greyWindows = material
          var color = greyWindows.getParameter('BaseColor').getValue()
          color.a = 0.5
          greyWindows.getParameter('BaseColor').setValue(color.toGamma())
          return
        }
        // const BaseColor = material.getParameter("BaseColor");
        // if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter('Reflectance')
        if (Reflectance) Reflectance.setValue(0.01)
        const Metallic = material.getParameter('Metallic')
        if (Metallic) Metallic.setValue(0)
        const Roughness = material.getParameter('Roughness')
        if (Roughness) Roughness.setValue(0.9)
      })

      // asset.getParameter("CutPlaneNormal").setValue(cutNormal);
      // op.addOutput(asset.getParameter("CutPlaneDist"));
      // cutAwayGroup.addItem(asset);
    }
  )

  loadAssetFile('data/Hospital/Autodesk_Hospital_Plumbing.ifc.zcad', 'data/Hospital/Plumbing.xml', null, (asset) => {
    const materials = asset.getMaterialLibrary().getMaterials()
    materials.forEach((material) => {
      // const BaseColor = material.getParameter("BaseColor");
      // if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
      const Reflectance = material.getParameter('Reflectance')
      if (Reflectance) Reflectance.setValue(0.01)
      const Metallic = material.getParameter('Metallic')
      if (Metallic) Metallic.setValue(0.9)
      const Roughness = material.getParameter('Roughness')
      if (Roughness) Roughness.setValue(0.9)
    })
  })
  loadAssetFile(
    'data/Hospital/Autodesk_Hospital_Electrical.ifc.zcad',
    'data/Hospital/Electrical.xml',
    null,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials()
      materials.forEach((material) => {
        // const BaseColor = material.getParameter("BaseColor");
        // if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter('Reflectance')
        if (Reflectance) Reflectance.setValue(0.01)
        const Metallic = material.getParameter('Metallic')
        if (Metallic) Metallic.setValue(0.9)
        const Roughness = material.getParameter('Roughness')
        if (Roughness) Roughness.setValue(0.9)
      })
    }
  )
  loadAssetFile('data/Hospital/Autodesk_Hospital_HVAC.ifc.zcad', 'data/Hospital/HVAC.xml', null, (asset) => {
    const materials = asset.getMaterialLibrary().getMaterials()
    materials.forEach((material) => {
      // const BaseColor = material.getParameter("BaseColor");
      // if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
      const Reflectance = material.getParameter('Reflectance')
      if (Reflectance) Reflectance.setValue(0.1)
      const Metallic = material.getParameter('Metallic')
      if (Metallic) Metallic.setValue(0.9)
      const Roughness = material.getParameter('Roughness')
      if (Roughness) Roughness.setValue(0.4)
    })
  })
  loadAssetFile('data/Hospital/Autodesk_Hospital_FireAlarm.ifc.zcad', 'data/Hospital/Fire Alarm.xml', null, (asset) => {
    const materials = asset.getMaterialLibrary().getMaterials()
    materials.forEach((material) => {
      const Reflectance = material.getParameter('Reflectance')
      if (Reflectance) Reflectance.setValue(0.1)
      const Metallic = material.getParameter('Metallic')
      if (Metallic) Metallic.setValue(0.9)
      const Roughness = material.getParameter('Roughness')
      if (Roughness) Roughness.setValue(0.4)
    })
  })

  loadAssetFile('data/Hospital/Autodesk_Hospital_Sprinkler.ifc.zcad', 'data/Hospital/Sprinkler.xml', null, (asset) => {
    const materials = asset.getMaterialLibrary().getMaterials()
    materials.forEach((material) => {
      const Reflectance = material.getParameter('Reflectance')
      if (Reflectance) Reflectance.setValue(0.1)
      const Metallic = material.getParameter('Metallic')
      if (Metallic) Metallic.setValue(0.9)
      const Roughness = material.getParameter('Roughness')
      if (Roughness) Roughness.setValue(0.4)
    })
  })

  // loadAssetFile("data/Hospital/Autodesk_Hospital_Parking Garage.ifc.zcad", offset);
  /****/

  return schedule
}
