// Setup Schedule
import Schedule from "./Schedule.js";

export default function init(scene) {
  const schedule = new Schedule(scene);

  const selectionSetPromises = [];
  const selectionSetFiles = [];
  const assets = {};
  const loadSelectionSetsAndBind = () => {
    selectionSetFiles.forEach((selSetFile) => {
      selectionSetPromises.push(schedule.loadSelectionSet(selSetFile, assets));
    });
    Promise.all(selectionSetPromises).then(() => {
      // from https://github.com/ZeaInc/schedule-viewer
      // schedule.bindTasksToSelectionSets();

      schedule.loadMSProjectXLSX(
        "./data/Hospital/TimeLiner-MasterList(Dynamic Dates).xlsx"
      );
    });
  };

  selectionSetFiles.push("data/Hospital/Site.xml");
  selectionSetFiles.push("data/Hospital/Structural.xml");
  selectionSetFiles.push("data/Hospital/Architectural.xml");
  selectionSetFiles.push("data/Hospital/Plumbing.xml");
  selectionSetFiles.push("data/Hospital/Electrical.xml");
  selectionSetFiles.push("data/Hospital/HVAC.xml");
  selectionSetFiles.push("data/Hospital/Fire Alarm.xml");
  selectionSetFiles.push("data/Hospital/Sprinkler.xml");
  loadSelectionSetsAndBind();

  /*
  let assetLoadCount = 0;
  const assets = {};
  window.assets = assets;
  const assetLoadDone = () => {
    assetLoadCount--;
    if (assetLoadCount == 0) {
      loadSelectionSetsAndBind();
    }
  };


  let index = 0;
  const loadAssetFile = (path, selSetXML, tr, cb) => {
    // Trim off the 'Autodesk_Hospital_' prefix.
    const parts = path.split("/");
    let name = parts[parts.length - 1];
    if (name.startsWith("Autodesk_Hospital_"))
      name = name.split("Autodesk_Hospital_")[1];
    name = name.split(".")[0];
    const asset = new ZeaCad.CADAsset(name);
    if (selSetXML) {
      // asset.getParameter('Lazy Load').setValue(true);
    }
    asset.getParameter("DataFilePath").setFilepath(path);

    assets[name] = asset;
    if (selSetXML) {
      selectionSetFiles.push(selSetXML);
    }

    assetLoadCount++;
    asset.on('loaded', () => {
      asset.setName(name);
      if (tr) {
        const xfo = asset.getLocalXfo();
        xfo.tr = tr; // move up to rest on ground
        asset.setLocalXfo(xfo);
      }
      if (cb) cb(asset);
      assetLoadDone();
    });
    scene.getRoot().addChild(asset);
    index++;
  };

  loadAssetFile("data/Hospital/Autodesk_Hospital_Site.zcad", null, offset, (asset) => {
    // asset.getParameter('CutPlaneNormal').setValue(cutNormal);
    // op.addOutput(asset.getParameter('CutPlaneDist'))
    // cutAwayGroup.addItem(asset)
  });
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Site Logistics.zcad",
    "data/Hospital/Site.xml",
    offset
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Structural.zcad",
    "data/Hospital/Structural.xml"
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

      asset.getParameter("CutPlaneNormal").setValue(cutNormal);
      op.addOutput(asset.getParameter("CutPlaneDist"));
      cutAwayGroup.addItem(asset);
    }
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Plumbing.zcad",
    "data/Hospital/Plumbing.xml"
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Electrical.zcad",
    "data/Hospital/Electrical.xml"
  );
  loadAssetFile("data/Hospital/Autodesk_Hospital_HVAC.zcad", "data/Hospital/HVAC.xml");
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_FireAlarm.zcad",
    "data/Hospital/Fire Alarm.xml"
  );
  loadAssetFile(
    "data/Hospital/Autodesk_Hospital_Sprinkler.zcad",
    "data/Hospital/Sprinkler.xml"
  );

  // loadAssetFile("data/Hospital/Autodesk_Hospital_Parking Garage.zcad", new ZeaEngine.Vec3(0, 0, -166));

  // loadAssetFile("data/Hospital/ColumnsAll.zcad");
  // loadAssetFile("data/Hospital/Autodesk_Hospital_HVAC_WingA.zcad");
  // loadAssetFile("data/Hospital/Autodesk_Hospital_Architectural_Stairs.zcad");
  // loadAssetFile("data/Hospital/Autodesk_Hospital_Architectural_brokenRoofGrass.zcad");
  // loadAssetFile("data/Hospital/Autodesk_Hospital_Architectural_3D_Walls_Exterior_Podium_Export.zcad");
  */
}
