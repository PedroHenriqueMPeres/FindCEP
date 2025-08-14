import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';


export default function CardCEP(props) {
  return (
    <ScrollView style={styles.card}>
      <View style={styles.item}>
        <Text style={styles.label}>{props.Info01}</Text>
        <Text style={styles.value}>{props.dados01}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>{props.Info2}</Text>
        <Text style={styles.value}>{props.Dados2}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>{props.Info3}</Text>
        <Text style={styles.value}>{props.Dados3}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>{props.Info4}</Text>
        <Text style={styles.value}>{props.Dados4}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>{props.Info5}</Text>
        <Text style={styles.value}>{props.Dados5}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>{props.Info6}</Text>
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
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
});
