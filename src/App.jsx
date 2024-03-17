import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Arcgis,
  Globalmapper,
  Grassgis,
  Gvsig,
  Mapinfo,
  Qgis,
  SignUp,
  Search,
  GetHelp,
  Ecognition,
  Envi,
  Erdasimagine,
  Opticksmapper,
  Orfeotoolbox,
  Anubis,
  Egnostoolkit,
  Fgigsrx,
  Hexagongnss,
  Leicagnss,
  Adobeillustrator,
  Arcgispro,
  Carto,
  Mapublisher,
  Agisoftmetashape,
  Bentleycc,
  Dronedeploy,
  Matlab,
  Pix4dmapper,
  Realitycapture,
  Aerialcameras,
  Cameramounts,
  Digitalcameras,
  Gnssreceivers,
  Gpsreceivers,
  Laserscanners,
  Lidarsystems,
  Plotters,
  Printers,
  Theodolites,
  Totalstations,
  Uavs,
  Cartographymaterials,
  Gismaterials,
  Photogrammetrymaterials,
  Rsmaterials,
  Surveyingmaterials,
} from "./components/pages/pages";

import { Navbar } from "./components/components";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/arcgis" Component={Arcgis} />
          <Route path="/global-mapper" Component={Globalmapper} />
          <Route path="/grass-gis" Component={Grassgis} />
          <Route path="/gvsig" Component={Gvsig} />
          <Route path="/map-info" Component={Mapinfo} />
          <Route path="/qgis" Component={Qgis} />
          <Route path="/e-cognition" exact Component={Ecognition} />
          <Route path="/envi" Component={Envi} />
          <Route path="/erdas-imagine" Component={Erdasimagine} />
          <Route path="/opticks-mapper" Component={Opticksmapper} />
          <Route path="/orfeo-toolbox" Component={Orfeotoolbox} />
          <Route path="/map-info" Component={Mapinfo} />
          <Route path="/anubis" Component={Anubis} />
          <Route path="/egnos-toolkit" Component={Egnostoolkit} />
          <Route path="/fgi-gsrx" Component={Fgigsrx} />
          <Route path="/hexagon-gnss" Component={Hexagongnss} />
          <Route path="/leica-gnss" exact Component={Leicagnss} />
          <Route path="/adobe-illustrator" Component={Adobeillustrator} />
          <Route path="/arcgis-pro" Component={Arcgispro} />
          <Route path="/carto" Component={Carto} />
          <Route path="/mapublisher" Component={Mapublisher} />
          <Route path="/agisoft-metashape" Component={Agisoftmetashape} />
          <Route path="/bentley-context-capture" Component={Bentleycc} />
          <Route path="/drone-deploy" Component={Dronedeploy} />
          <Route path="/matlab" Component={Matlab} />
          <Route path="/pix4d-mapper" Component={Pix4dmapper} />
          <Route path="/reality-capture" exact Component={Realitycapture} />
          <Route path="/aerial-cameras" Component={Aerialcameras} />
          <Route path="/camera-mounts" Component={Cameramounts} />
          <Route path="/digital-cameras" Component={Digitalcameras} />
          <Route path="/gnss-receivers" Component={Gnssreceivers} />
          <Route path="/gps-receivers" Component={Gpsreceivers} />
          <Route path="/laser-scanners" Component={Laserscanners} />
          <Route path="/lidar-systems" Component={Lidarsystems} />
          <Route path="/plotters" Component={Plotters} />
          <Route path="/printers" Component={Printers} />
          <Route path="/theodolites" Component={Theodolites} />
          <Route path="/total-stations" Component={Totalstations} />
          <Route path="/uavs" Component={Uavs} />
          <Route
            path="/cartography-materials"
            Component={Cartographymaterials}
          />
          <Route path="/gis-materials" Component={Gismaterials} />
          <Route
            path="/photogrammetry-materials"
            Component={Photogrammetrymaterials}
          />
          <Route path="/rs-materials" Component={Rsmaterials} />
          <Route path="/survey-materials" Component={Surveyingmaterials} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/search" Component={Search} />
          <Route path="/get-help" Component={GetHelp} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
