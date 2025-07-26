import { View, Text, StyleSheet } from "react-native";

function DetailsViewScreen(){
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.main}>Details View Screen</Text>
        </View>
    );
};

export default DetailsViewScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    main:{
        fontSize:20,
        fontWeight: 'bold'
    }
});