import { StyleSheet, Text, View } from "react-native";

function HomeScreen(){
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 30
    }
});