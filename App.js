import { StatusBar } from "expo-status-bar";
import React from "react"; //exportar react para trabalhar com componentes
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Header from "./Header.js";
import Body from "./Body.js";
export default class App extends React.Component {
  //Abaixo chamamos o header
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Header/>
        <Body/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Footer: {
    position: "absolute",
    bottom: 0,
  },
});
