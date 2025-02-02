if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

// non expo root component
import { AppRegistry } from "react-native";
import "./src/plugins/i18n/i18n";

import App from "./App";
import "./src/plugins/DayJs";
import { enableMapSet } from "immer";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
enableMapSet();
AppRegistry.registerComponent("main", () => App);