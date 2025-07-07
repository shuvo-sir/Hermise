import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.boxTitle}>Search</Text>
                <TextInput 
                    placeholder="Enter destination name" 
                    style={styles.input}
                    placeholderTextColor="#888"
                />
                <TextInput 
                    placeholder="Enter your location" 
                    style={styles.input}
                    placeholderTextColor="#888"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f2f2f2",
    },
    box: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    boxTitle: {
        textAlign: "center",
        fontSize: 29,
        paddingBottom: 20,
    }
});
