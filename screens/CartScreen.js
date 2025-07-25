import { View, Text, StyleSheet } from "react-native";

function CartScreen(){
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.main}>Cart Screen</Text>
        </View>
    );
};

export default CartScreen;

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