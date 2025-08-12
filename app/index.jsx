import { Input } from "../components/input/input";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

export default function Index() {
  return (
    <>
      <ImageBackground 
        source={require('../assets/images/ImgFundo.png')} 
        style={styles.imgFundo}
      >
        <Image 
          source={require('../assets/images/LogoFindCEP.png')} 
          style={styles.Logo} 
        />
      </ImageBackground>

      <View style={styles.Container}>
        <Text style={styles.titulo}>Consulte seu CEP</Text>
        <Input />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  Logo: {
    width: 200,
    height: 240
  },
  Container: {
    flex: 1.5,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Poppins"
  }
});
