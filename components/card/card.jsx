import { View, Text, StyleSheet,ScrollView } from 'react-native';


export default function CardCEP(props) {
  return (
    <ScrollView style={styles.card}>
      <View style={styles.item}>
        <Text style={styles.label}>{props.CEP}</Text>
        <Text style={styles.value}>{props.dados01}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>{props.Logradouro}</Text>
        <Text style={styles.value}>{props.Dados2}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>{props.Bairro}</Text>
        <Text style={styles.value}>{props.Dados3}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>{props.Localidade}</Text>
        <Text style={styles.value}>{props.Dados4}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>{props.UF}</Text>
        <Text style={styles.value}>{props.Dados5}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>{props.Regiao}</Text>
        <Text style={styles.value}>{props.Dados6}</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
    height:650,
    width:"60%",

    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    // Sombra Android
    elevation: 6,
  },
  item: {
    marginBottom: 20,
    marginLeft:10,
    marginTop:26,
  },
  label: {
    fontWeight: 'Poppins-Bold',
    fontSize: 20,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
});
