import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, Text, StyleSheet } from "react-native";

export default class card7 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 320,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.bodyContent}>
          <Icon style={styles.icon} name="home" type="MaterialCommunityIcons" />
          <Text style={styles.titleStyle}>Title goes here</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            BuilderX is a screen design tool which codes React Native for you
            which design without boundaries, the code is generated
            simultaneously. Save your designed components as symbol and then
            simply add it to your design next time.Live preview works on real
            device. Shout out to the Expo team to make it happen.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  bodyContent: {
    justifyContent: "flex-start",
    padding: 16,
    paddingTop: 24,
    flexDirection: "row"
  },
  body: {
    padding: 0,
    flexWrap: "nowrap",
    alignSelf: "stretch",
    paddingLeft: 16,
    flex: 1
  },
  bodyText: {
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20,
    color: "#424242"
  },
  titleStyle: {
    paddingBottom: 12,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: "rgba(255,102,0,1)",
    alignSelf: "stretch"
  },
  icon: {
    width: 40,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(255,102,0,1)",
    fontSize: 24
  }
});
