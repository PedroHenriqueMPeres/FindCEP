import { View, TextInput, Text, StyleSheet } from "react-native";

export const Input = ({valorCep, onChangeValorCep}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>CEP</Text>
            <TextInput 
                style={styles.input}
                placeholder="Digite o CEP"
                keyboardType="numeric"
                maxLength={8}
                value={valorCep}
                onChangeText={onChangeValorCep}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "80%",
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        backgroundColor: "#fff"
    }
});
