import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text } from "react-native";

export default class Header extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 56
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon style={styles.icon} name="menu" type="MaterialCommunityIcons" />
        <Center>
          <Text style={styles.text}>HN</Text>
        </Center>
        <Icon
          style={styles.icon2}
          name="refresh"
          type="MaterialCommunityIcons"
        />
        <Icon
          style={styles.icon3}
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
  text: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    color: "rgba(236,236,236,1)"
  },
  icon2: {
    top: 16,
    right: 64,
    width: 23,
    height: 22,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "transparent",
    color: "rgba(218,218,218,1)",
    fontSize: 24
  },
  icon3: {
    top: 16,
    right: 16,
    width: 22,
    height: 25,
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
