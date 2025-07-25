import { View, Text, StyleSheet } from "react-native";

function FavoritesScreen(){
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.main}>Favorites Screen</Text>
        </View>
    );
};

export default FavoritesScreen;

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