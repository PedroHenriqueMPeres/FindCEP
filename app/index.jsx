import CardCEP from "../components/card/card.jsx"
import { Input } from "../components/input/input";
import { Botao } from "../components/botao/botao";
import { useState } from "react";
import axios from "axios";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";

export default function Index() {
  const [cep, setCep] = useState("");
  const [jsonCep, setjsonCep] = useState({});
  // const [mostrarCard, setMostrarCard] = useState(false);

  async function consultarCep() {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
        console.log(resposta.data);
        setjsonCep(resposta.data);
        setMostrarCard(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ImageBackground
        source={require("../assets/images/ImgFundo.png")}
        style={styles.imgFundo}
      >
        <Image
          source={require("../assets/images/LogoFindCEP.png")}
          style={styles.Logo}
        />
      </ImageBackground>

      <ScrollView style={styles.containerscroll}>
        <View style={styles.Container}>
          <Text style={styles.titulo}>Consulte seu CEP</Text>
          <Input 
            valorCep={cep}
            onChangeValorCep={setCep}
          />
          
          <Botao 
            tituloBotao="Consultar" 
            onPress={consultarCep}
          />
          
          {jsonCep.cep && (
            <CardCEP 
              CEP="CEP:" dados01={jsonCep.cep}
              Logradouro="Logradouro:" Dados2={jsonCep.logradouro}
              Bairro="Bairro:" Dados3={jsonCep.bairro}
              Localidade="Localidade:" Dados4={jsonCep.localidade}
              UF="UF:" Dados5={jsonCep.uf}
              Regiao="Região:" Dados6={jsonCep.regiao}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  Logo: {
    width: 200,
    height: 240,
  },
  Container: {
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 60,
    gap: 40,
  },
  containerscroll: {
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 80,
    height: "90%",
  },
  titulo: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Poppins-Bold",
  },
});
