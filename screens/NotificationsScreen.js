import { View, Text, StyleSheet } from "react-native";

function NotificationsScreen(){
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.main}>Notifications Screen</Text>
        </View>
    );
};

export default NotificationsScreen;

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