import React, { Component } from "react";
import Svg, { Ellipse } from "react-native-svg";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class ListItem extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 325,
    height: 90
  };
  constructor() {
    super();
    this.state = {
      news: {}
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
    this.setState({ news: data });
  }
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName} numberOfLines={2} ellipsizeMode="tail">
            {this.state.news.title ? this.state.news.title : "Title"}
          </Text>
          <Text style={styles.itemAuthor}>
            {this.state.news.by ? this.state.news.by : "User"}
          </Text>
          <Text style={styles.itemUrl} numberOfLines={2} ellipsizeMode="tail">
            {this.state.news.url ? this.state.news.url : "Text Added"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.push("CommentsPage", {
              commentsList:
                this.state.news && this.state.news.kids
                  ? this.state.news.kids
                  : [],
              title:
                this.state.news && this.state.news.title
                  ? this.state.news.title
                  : "",
              url:
                this.state.news && this.state.news.url
                  ? this.state.news.url
                  : ""
            });
          }}
        >
          <View style={styles.commentsContainer}>
            <Svg style={styles.ellipse} viewBox="0 0 100 100">
              <Ellipse
                rx={50}
                ry={50}
                cx={50}
                cy={50}
                fill="rgba(249,205,175,1)"
              />
            </Svg>
            <Text style={styles.commentNumbers}>
              {this.state.news.kids ? this.state.news.kids.length : "106"}
            </Text>
          </View>
          <View style={styles.upvotesContainer}>
            <Text style={styles.upvotes}>
              {this.state.news.score ? this.state.news.score : "151"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    top: 0,
    left: 0,
    right: 51,
    height: 90,
    // position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(249,249,249,1)",
    opacity: 1,
    paddingRight: 55,
    alignSelf: "stretch"
  },
  itemName: {
    backgroundColor: "transparent",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 14,
    color: "rgba(31,31,31,1)"
  },
  itemAuthor: {
    backgroundColor: "transparent",
    marginBottom: 0,
    marginLeft: 10,
    fontSize: 12,
    color: "rgba(148,148,148,1)"
  },
  itemUrl: {
    backgroundColor: "transparent",
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 12,
    color: "rgba(148,148,148,1)"
  },
  button: {
    top: 0,
    width: 51,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(245,245,245,1)",
    opacity: 1,
    right: 0
  },
  commentsContainer: {
    top: 112,
    left: 10,
    width: 32,
    height: 20,
    position: "absolute"
  },
  ellipse: {
    top: -100,
    left: 0,
    width: 32,
    height: 22,
    position: "absolute"
  },
  commentNumbers: {
    top: -94,
    left: 4,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 10,
    color: "rgba(255,102,0,1)",
    width: 24,
    height: 12,
    textAlign: "center"
  },
  upvotesContainer: {
    top: 54,
    left: 0,
    right: 0,
    height: 20,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)"
  },
  upvotes: {
    top: 4,
    left: 11,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 10,
    textAlign: "center",
    color: "rgba(156,156,156,1)",
    width: 30,
    height: 12
  }
});
