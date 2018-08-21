import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class footer1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 49,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Icon
            style={[
              styles.icon,
              {
                color: this.props.active ? "#007AFF" : "rgba(238,238,238,1)"
              }
            ]}
            name={this.props.iconName ? this.props.iconName : "av-timer"}
            type={
              this.props.iconType ? (
                this.props.iconType
              ) : (
                "MaterialCommunityIcons"
              )
            }
          />
          <Text
            style={[
              styles.content,
              {
                color: this.props.active ? "#007AFF" : "rgba(238,238,238,1)"
              }
            ]}
          >
            {this.props.content ? this.props.content : "Dashboard"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper1}>
          <Icon
            style={styles.icon1}
            name={this.props.icon1Name ? this.props.icon1Name : "library-books"}
            type={this.props.icon1Type ? this.props.icon1Type : null}
          />
          <Text style={styles.content1}>
            {this.props.content1 ? this.props.content1 : "Orderbook"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper2}>
          <Icon
            style={styles.icon2}
            name={this.props.icon2Name ? this.props.icon2Name : "poll"}
            type={this.props.icon2Type ? this.props.icon2Type : null}
          />
          <Text style={styles.content2}>
            {this.props.content2 ? this.props.content2 : "Stats"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper3}>
          <Icon
            style={styles.icon3}
            name={this.props.icon3Name ? this.props.icon3Name : "credit-card"}
            type={this.props.icon3Type ? this.props.icon3Type : null}
          />
          <Text style={styles.content3}>
            {this.props.content3 ? this.props.content3 : "Payment"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    backgroundColor: "rgba(255,102,0,1)",
    opacity: 1
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  content: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto-Regular"
  },
  buttonWrapper1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "rgba(238,238,238,1)",
    fontSize: 24
  },
  content1: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    color: "rgba(238,238,238,1)"
  },
  buttonWrapper2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "rgba(238,238,238,1)",
    fontSize: 24
  },
  content2: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    color: "rgba(238,238,238,1)"
  },
  buttonWrapper3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "rgba(238,238,238,1)",
    fontSize: 24
  },
  content3: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    color: "rgba(238,238,238,1)"
  }
});
