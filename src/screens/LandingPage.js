import React, { Component } from "react";
import Header from "../symbols/Header";
import { Center } from "@builderx/utils";
import IconButtons from "../symbols/footer1";

import { View, StyleSheet, StatusBar, Text, FlatList } from "react-native";
import { Constants } from "expo";
import ListItem from "../symbols/ListItem";

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      newsList: []
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const data = await response.json();
    this.setState({ newsList: data });
  }
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="light-content"
          style={styles.statusBar}
          backgroundColor="rgba(255,255,255,0)"
        />
        <View style={styles.statusbar} />
        <Header style={styles.header} />
        <FlatList
          style={styles.list2}
          data={this.state.newsList}
          horizontal={false}
          keyExtractor={item => item.toString()}
          ItemSeparatorComponent={({}) => {
            return <View style={styles.rect2} />;
          }}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <ListItem
                  style={styles.itemList}
                  navigation={this.props.navigation}
                  id={item.toString()}
                />
              </View>
            );
          }}
        />
        <IconButtons
          style={styles.footer1}
          content1="Show"
          content2="Ask"
          content3="Jobs"
          content="New"
          icon3Type="MaterialCommunityIcons"
          icon3Name="calendar-check"
          iconType="MaterialCommunityIcons"
          iconName="new-box"
          icon1Type="MaterialCommunityIcons"
          icon1Name="eye"
          icon2Type="MaterialCommunityIcons"
          icon2Name="comment-question"
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
  statusbar: {
    height: Constants.deviceName === "iPhone X" ? 44 : 25,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(185,73,0,1)",
    right: 0,
    opacity: 1
  },
  statusBar: {},
  header: {
    position: "absolute",
    top: Constants.deviceName === "iPhone X" ? 44 : 25,
    left: 0,
    right: 0,
    height: 56
  },
  list2: {
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
    top: Constants.deviceName === "iPhone X" ? 100 : "10.1%",
    right: 0,
    height: "100%"
  },
  footer1: {
    left: 0,
    position: "absolute",
    height: Constants.deviceName === "iPhone X" ? 88 : 56,
    right: 0,
    bottom: Constants.deviceName === "iPhone X" ? 0 : 0
  },
  itemList: {
    // color: "#FFFFFF"
  },
  rect: {
    backgroundColor: "#ffffff",
    height: 90.69,
    alignSelf: "stretch"
  },
  rect4: {
    backgroundColor: "#999999",
    left: 25,
    height: 2
  },
  rect2: {
    backgroundColor: "#999999",
    left: 15,
    height: 2
  }
});
