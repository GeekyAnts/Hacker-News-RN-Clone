import React, { Component } from "react";
import Icon from "@builderx/icons";

import { View, Text, StyleSheet } from "react-native";

export default class card71 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 124,
    width: 360,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };
  constructor() {
    super();
    this.state = {
      comment: {}
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    let url =
      "https://hacker-news.firebaseio.com/v0/item/" + this.props.id + ".json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ comment: data });
  }
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.bodyContent}>
          <View style={styles.rect}>
            <Icon
              style={styles.icon}
              name={this.props.iconName ? this.props.iconName : "account"}
              type={
                this.props.iconType ? (
                  this.props.iconType
                ) : (
                  "MaterialCommunityIcons"
                )
              }
            />
            <Text style={styles.titleStyle}>
              {this.state.comment.by ? this.state.comment.by : "user"}
            </Text>
          </View>
          <View style={styles.rect2}>
            <Icon
              style={styles.icon2}
              name={this.props.icon2Name ? this.props.icon2Name : "timer-sand"}
              type={
                this.props.icon2Type ? (
                  this.props.icon2Type
                ) : (
                  "MaterialCommunityIcons"
                )
              }
            />
            <Text style={styles.text}>
              {this.state.comment.time ? this.state.comment.time : "Time"}
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText} numberOfLines={10} ellipsizeMode="tail">
            {this.state.comment.text ? (
              this.state.comment.text
            ) : (
              "BuilderX is a screen design tool which codes React Native for you which design without boundaries, the code is generated"
            )}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 0,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",

    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.01,
    shadowRadius: 0,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  body: {
    padding: 16,
    paddingTop: 8,
    flexWrap: "nowrap",
    alignSelf: "stretch",
    flexDirection: "column"
  },
  bodyText: {
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20,
    color: "#424242",
    marginRight: 20,
    paddingRight: 5,
    flex: 1
  },
  rect: {
    flexDirection: "row",
    width: 111,
    height: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  icon: {
    backgroundColor: "transparent",
    color: "rgba(255,102,13,1)",
    fontSize: 20,
    alignSelf: "stretch"
  },
  titleStyle: {
    margin: 0,
    padding: 0,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: "rgba(255,102,13,1)",
    marginLeft: 5
  },
  rect2: {
    width: 111,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  icon2: {
    alignSelf: "stretch",
    backgroundColor: "transparent",
    color: "rgba(177,177,177,1)",
    fontSize: 20
  },
  text: {
    margin: 0,
    marginLeft: 5,
    padding: 0,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: "rgba(177,177,177,1)"
  }
});
