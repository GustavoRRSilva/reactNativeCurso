import { StatusBar } from "expo-status-bar";
import React from "react"; //exportar react para trabalhar com componentes
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class App extends React.Component {
  Header = () => {
    return <Text>Home | Sobre | Contato</Text>;
  };

  Body = () => {
    return <Text>Conteúdo do meu app</Text>;
  };

  Footer = () => {
    return <Text>Todos os direitos reservados</Text>;
  };
  //forma de trabalhar com componentes /
  //Abaixo chamamos o header
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <this.Header></this.Header>
        <this.Body></this.Body>
        <this.Footer style={style.Footer}></this.Footer>
        <Botao></Botao>
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

const Botao = () => {
  return (
    <Button title="Clique">
      <Text>Botão</Text>
    </Button>
  );
};
