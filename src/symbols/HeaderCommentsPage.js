import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet } from "react-native";

export default class HeaderCommentsPage extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 56
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          style={styles.icon}
          name="chevron-left"
          type="MaterialCommunityIcons"
          onPress={() => {
            this.props.navigation.push("LandingPage");
          }}
        />
        <Icon
          style={styles.icon2}
          name="dots-vertical"
          type="MaterialCommunityIcons"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    top: 16,
    left: 16,
    width: 24,
    height: 24,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(218,218,218,1)",
    fontSize: 24
  },
  icon2: {
    top: 16,
    right: 16,
    width: 24,
    height: 24,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(218,218,218,1)",
    fontSize: 24
  },
  root: {
    backgroundColor: "rgba(255,102,0,1)",
    opacity: 1
  }
});
