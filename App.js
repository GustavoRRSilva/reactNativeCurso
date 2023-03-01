import { StatusBar } from "expo-status-bar";
import React from "react"; //exportar react para trabalhar com componentes
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  //forma de trabalhar com componentes /
  render() {
    return (
        <View style={styles.container}>
          <Text style = {styles.texto}>Minha imagem</Text>
          <Image style = {{width:300, height:300}} source={{
            uri:'https://imgs.search.brave.com/n9qsmCV2RxhJ2mAaT8dzrNP5LtTcx2pH2rp9ESmwcmo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/Y3pFcmd0RTcxWmth/Y1VKbTJwQjFBSGFF/SyZwaWQ9QXBp',
          }} />
          <StatusBar style="auto" />
        </View>
    );
  }
}
/* */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
