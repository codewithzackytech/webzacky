import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import About from "./Pages/About";
import Bcrypt from "./Pages/Bcrypt";
import Game_Content1 from "./Pages/game_content1";
import Game_Content2 from "./Pages/game_content2";
import Game_Content3 from "./Pages/game_content3";
import Game_Content4 from "./Pages/game_content4";
import Game_Content5 from "./Pages/game_content5";
import Game_Content6 from "./Pages/game_content6";
import Tutorials from "./Pages/tutorials";

import NodeJWT from "./Pages/NodeJWT";
import NodeExpressMongo from "./Pages/NodeExpressMongo";


import RNPUSH from "./Pages/rn_pushNot";
import ElectronPushN from "./Pages/ElectronPushN";
import RNFontSize from "./Pages/RNFontSize";
import RNFont from "./Pages/RNFont";
import DjangoRF from "./Pages/DjangoRF";
import DjangoAuthModel from "./Pages/DjangoAuthModel";
import ElectronDeployment from "./Pages/ElectronDeployment";

const Hello = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/GettingStartedwithElectronbyCreatingaReactApp" element={<About />} />
        <Route path="/CreateaFirstPersonShooterinGodot" element={<Game_Content1 />} />
        <Route path="/Godot3DCameraCameraControllerMovement" element={<Game_Content2 />} />
        <Route path="/GODOM4CloneUsingGodotEngine" element={<Game_Content3 />} />
        <Route path="/3DGameLeveltransitionusingGodotEngine" element={<Game_Content4 />} />
        <Route path="/BuildYourFirst2DGameusingGodotEngine" element={<Game_Content5 />} />
        <Route path="/Zalson3DGameBuiltwithGodotEngine" element={<Game_Content6 />} />
        <Route path="/PushNotificationImplementationwithElectronandReactjs" element={<ElectronPushN />} />
        <Route path="/ImplementingCRUDAPiusingNodejs/ExpressandMongodb" element={<NodeExpressMongo />} />
        <Route path="/ImplementingfontSizeAppinReactNativeRedux/ReactRedux" element={<RNFontSize />} />
        <Route path="/ImplementingCustomFontsAppinReactNative/Expo" element={<RNFont />} />

        <Route path="/DjangoModelAuthPermission" element={<DjangoAuthModel />} />
        <Route path="/ElectronjsMultiPlatformArchitectureDeployment" element={<ElectronDeployment />} />







        <Route path="/ExtendsUserinDjangoRestFramworkLoginTokenAuth" element={<DjangoRF />} />
        <Route path="/tutorials" element={<Tutorials />} />




        <Route path="/ImplementationwithJWTusingNode/Expressjs" element={<NodeJWT />} />

        <Route path="/ImplementationwithPushNotificationUsingReactNative/Expo" element={<RNPUSH />} />







        <Route path="/HashingPasswordsinNodeandExpressusingbcrypt" element={<Bcrypt />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  );
}
