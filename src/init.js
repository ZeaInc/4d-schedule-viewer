// Setup Schedule
import Schedule from "./Schedule.js";
const { Vec3, Xfo } = zeaEngine;
const { CADAsset, CADBody } = zeaCad;

function download(filename, textInput) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/text;charset=utf-8, " + encodeURIComponent(textInput)
  );
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
  //document.body.removeChild(element);
}

export default function init(scene) {
  const schedule = new Schedule(scene);
  // schedule.loadMSProjectXLSX(
  //   "./data/Hospital/TimeLiner-MasterList(Dynamic Dates).xlsx"
  // );

  const loadBindingsCache = false;
  const writeBindingsCache = false;
  const selectionSetPromises = [];
  const selectionSetFiles = [];
  const assets = {};
  const loadSelectionSetsAndBind = () => {
    if (loadBindingsCache) {
      fetch(new Request("./data/bindings.json"))
        .then((response) => response.json())
        .then((json) => {
          schedule.fromJSON(json);
          schedule
            .loadMSProjectXLSX(
              "./data/Hospital/TimeLiner-MasterList(Dynamic Dates).xlsx"
            )
            .then(() => {});
        })
        .catch(console.error);
    } else {
      selectionSetFiles.forEach((selSetFile) => {
        selectionSetPromises.push(
          schedule.loadSelectionSet(selSetFile, assets)
        );
      });
      Promise.all(selectionSetPromises).then(() => {
        if (writeBindingsCache) {
          const json = schedule.toJSON();
          console.log(json);
          download("bindings.json", JSON.stringify(json, null, 2));
        }

        schedule
          .loadMSProjectXLSX(
            "./data/Hospital/TimeLiner-MasterList(Dynamic Dates).xlsx"
          )
          .then(() => {});
      });
    }
  };

  // selectionSetFiles.push("data/Hospital/Site.xml");
  // selectionSetFiles.push("data/Hospital/Structural.xml");
  // selectionSetFiles.push("data/Hospital/Architectural.xml");
  // selectionSetFiles.push("data/Hospital/Plumbing.xml");
  // selectionSetFiles.push("data/Hospital/Electrical.xml");
  // selectionSetFiles.push("data/Hospital/HVAC.xml");
  // selectionSetFiles.push("data/Hospital/Fire Alarm.xml");
  // selectionSetFiles.push("data/Hospital/Sprinkler.xml");
  // loadSelectionSetsAndBind();

  let assetLoadCount = 0;
  const loadAssetFile = (path, selSetXML, tr, cb) => {
    // Trim off the 'Autodesk_Hospital_' prefix.
    const parts = path.split("/");
    let name = parts[parts.length - 1];
    if (name.startsWith("Autodesk_Hospital_"))
      name = name.split("Autodesk_Hospital_")[1];
    name = name.split(".")[0];
    const asset = new CADAsset(name);

    assets[name] = asset;
    if (selSetXML) {
      selectionSetFiles.push(selSetXML);
    }

    assetLoadCount++;

    asset.load(path).then(() => {
      asset.setName(name);
      if (tr) {
        const xfo = asset.getParameter("LocalXfo").getValue();
        xfo.tr = tr; // move up to rest on ground
        asset.getParameter("LocalXfo").setValue(xfo);
      }
      if (cb) cb(asset);
    });
    scene.getRoot().addChild(asset);
    asset.getGeometryLibrary().on("loaded", () => {
      assetLoadCount--;
      console.log("assetLoadCount:", assetLoadCount);
      if (assetLoadCount == 0) {
        loadSelectionSetsAndBind();
      }
    });
  };

  /*
  const offset = new Vec3(0, 0, -166.85);
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Site.zcad",
    null,
    offset,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        const BaseColor = material.getParameter("BaseColor");
        if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.01);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.95);
      });
      // asset.getParameter('CutPlaneNormal').setValue(cutNormal);
      // op.addOutput(asset.getParameter('CutPlaneDist'))
      // cutAwayGroup.addItem(asset)
    }
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Site Logistics.zcad",
    "data/Hospital/Site.xml",
    offset,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        const BaseColor = material.getParameter("BaseColor");
        if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.01);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0.9);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.9);
      });
    }
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Structural.zcad",
    "data/Hospital/Structural.xml",
    null,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        const BaseColor = material.getParameter("BaseColor");
        if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.01);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0.9);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.9);
      });
    }
  );

  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Architectural.zcad",
    "data/Hospital/Architectural.xml",
    null,
    (asset) => {
      const ribs = asset.resolvePath([
        "Architectural",
        "Assembly_0",
        "Default",
        "Instance_0",
        "Level 1",
        "Option 2 - Ribs Faceted:Option 2 - Ribs Faceted:187261",
      ]);
      ribs.setVisible(false);

      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        if (material.getName() == "Body_0002") {
          const windows = material;
          var color = windows.getParameter("BaseColor").getValue();
          color.a = 0.3;
          windows.getParameter("BaseColor").setValue(color.toGamma());
          return;
        }
        if (material.getName() == "Body_0007") {
          const greyWindows = material;
          var color = greyWindows.getParameter("BaseColor").getValue();
          color.a = 0.5;
          greyWindows.getParameter("BaseColor").setValue(color.toGamma());
          return;
        }
        const BaseColor = material.getParameter("BaseColor");
        if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.01);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.9);
      });

      // asset.getParameter("CutPlaneNormal").setValue(cutNormal);
      // op.addOutput(asset.getParameter("CutPlaneDist"));
      // cutAwayGroup.addItem(asset);
    }
  );

  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Plumbing.zcad",
    "data/Hospital/Plumbing.xml",
    null,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        const BaseColor = material.getParameter("BaseColor");
        if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.01);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0.9);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.9);
      });
    }
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Electrical.zcad",
    "data/Hospital/Electrical.xml",
    null,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        const BaseColor = material.getParameter("BaseColor");
        if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.01);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0.9);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.9);
      });
    }
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_HVAC.zcad",
    "data/Hospital/HVAC.xml",
    null,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        const BaseColor = material.getParameter("BaseColor");
        if (BaseColor) BaseColor.setValue(BaseColor.getValue().toGamma());
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.1);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0.9);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.4);
      });
    }
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_FireAlarm.zcad",
    "data/Hospital/Fire Alarm.xml",
    null,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.1);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0.9);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.4);
      });
    }
  );

  */
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Sprinkler.zcad",
    "data/Hospital/Sprinkler.xml",
    null,
    (asset) => {
      const materials = asset.getMaterialLibrary().getMaterials();
      materials.forEach((material) => {
        const Reflectance = material.getParameter("Reflectance");
        if (Reflectance) Reflectance.setValue(0.1);
        const Metallic = material.getParameter("Metallic");
        if (Metallic) Metallic.setValue(0.9);
        const Roughness = material.getParameter("Roughness");
        if (Roughness) Roughness.setValue(0.4);
      });
    }
  );

  // loadAssetFile("data/Hospital/Autodesk_Hospital_Parking Garage.zcad", offset);

  return schedule;
}
