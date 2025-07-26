import { View, Text, StyleSheet } from "react-native";

function ProfileScreen(){
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.main}>Profile Screen</Text>
        </View>
    );
};

export default ProfileScreen;

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