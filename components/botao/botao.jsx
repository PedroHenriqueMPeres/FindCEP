import { Pressable, StyleSheet, Text } from "react-native";

export const Botao = ({ tituloBotao, onPress }) => {
    return (
        <Pressable style={styles.botao} onPress={onPress}>
            <Text style={styles.textobotao}>{tituloBotao}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        width:"70%"
    },
    textobotao: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
});
