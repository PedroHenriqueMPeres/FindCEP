import CardCEP from "../components/card/card.jsx"
import { Input } from "../components/input/input";
import { Botao } from "../components/botao/botao";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";
// import { ScrollView } from "react-native";

export default function Index() {
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
        <Input />
        <Botao 
          tituloBotao="Consultar" 
          onPress={() => console.log("Botão pressionado")}
        />
        <CardCEP 
        Info01= "Região: "
        dados01="Dados: "
        Info2= "Região: "
        Dados2="Dados: "
        Info3= "Região: "
        Dados3="Dados: "
        Info4= "Região: "
        Dados4="Dados: "
        Info5= "Região: "
        Dados5="Dados: "
        Info6= "Região: "
        Dados6="Dados: "
        
        />
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
    flex:1.5,
    paddingTop:50,
    paddingBottom:80,
    height:"90%",
  },
  titulo: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
});
