import React from "react";
import { YellowBox } from "react-native";

import { Font } from "expo";

import LandingPage from "./src/screens/LandingPage";

import CommentsPage from "./src/screens/CommentsPage";

import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  LandingPage: {
    screen: LandingPage
  },
  CommentsPage: {
    screen: CommentsPage
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    LandingPage: {
      screen: LandingPage
    },
    CommentsPage: {
      screen: CommentsPage
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
