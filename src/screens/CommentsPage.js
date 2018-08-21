import React, { Component } from "react";
import { Constants } from "expo";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import Card71 from "../symbols/card71";
import { View, StyleSheet, StatusBar, Text, FlatList } from "react-native";

export default class CommentsPage extends Component {
  render() {
    let commentsList = this.props.navigation.getParam("commentsList");
    let title = this.props.navigation.getParam("title");
    let url = this.props.navigation.getParam("url");
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="light-content"
          style={styles.statusBar}
          backgroundColor="rgba(0,0,0,0)"
        />
        <View style={styles.rect} />
        <View style={styles.rect2}>
          <Icon
            style={styles.icon}
            name="chevron-left"
            type="MaterialCommunityIcons"
            onPress={() => {
              this.props.navigation.pop();
            }}
          />
          <Icon
            style={styles.icon2}
            name="dots-vertical"
            type="MaterialCommunityIcons"
          />
        </View>
        <View style={styles.rect3}>
          <View style={styles.rect5}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={styles.itemUrl}>
            <Text style={styles.text2}>{url}</Text>
            <Icon
              style={styles.icon4}
              name="open-in-new"
              type="MaterialCommunityIcons"
            />
          </View>
          <View style={styles.itemId}>
            <Text style={styles.text3}>Text Added</Text>
            <Icon
              style={styles.icon3}
              name="open-in-new"
              type="MaterialCommunityIcons"
            />
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={commentsList}
          keyExtractor={item => item.toString()}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect4}>
                <Card71 style={styles.card71} id={item} />
              </View>
            );
          }}
          horizontal={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  statusBar: {},
  rect: {
    top: 0,
    left: 0,
    right: 0,
    height: Constants.deviceName === "iPhone X" ? 44 : 25,
    position: "absolute",
    backgroundColor: "rgba(185,73,0,1)",
    opacity: 1
  },
  rect2: {
    height: Constants.deviceName === "iPhone X" ? 57 : 56,
    top: Constants.deviceName === "iPhone X" ? 44 : 25,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,102,0,1)",
    right: 0,
    opacity: 1
  },
  icon: {
    top: 16,
    left: 16,
    width: 25,
    height: 22,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(218,218,218,1)",
    fontSize: 24
  },
  icon2: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(218,218,218,1)",
    fontSize: 24,
    right: 16,
    top: "27.59%"
  },
  rect3: {
    height: 119,
    top: Constants.deviceName === "iPhone X" ? 101 : 81,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,110,13,1)",
    right: 0,
    opacity: 1
  },

  itemUrl: {
    height: 20,

    left: 0,
    position: "absolute",
    right: 0,
    top: "45.38%"
  },
  text2: {
    top: "5%",
    left: 53,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(236,236,236,1)",
    opacity: 0.8
  },
  icon4: {
    top: "0%",
    left: 20.49,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(218,218,218,1)",
    fontSize: 20,
    opacity: 0.8
  },
  itemId: {
    height: 20,

    top: 87,
    left: 20,
    position: "absolute",
    right: 4
  },
  text3: {
    top: 1,
    left: 30,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(236,236,236,1)",
    opacity: 0.8
  },
  icon3: {
    top: "0%",
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(218,218,218,1)",
    fontSize: 20,
    opacity: 0.8
  },
  list: {
    position: "absolute",
    height: "100%",
    top: Constants.deviceName === "iPhone X" ? 220 : 200,
    left: 0,
    right: 0
  },
  rect4: {
    height: 134.08,
    alignSelf: "stretch"
  },
  card71: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute"
  },
  rect5: {
    height: 36,
    top: 14,
    left: 20,
    position: "absolute",
    right: 15
  },
  text: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(236,236,236,1)",
    right: 0,
    bottom: 0
  }
});
