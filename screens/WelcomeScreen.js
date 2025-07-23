import { StatusBar } from "expo-status-bar";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(){
    return (
        <>
        <StatusBar style="light" />
        <View style={styles.imgContainer}>
            <ImageBackground source={require('../assets/images/Intro-bg.png')} resizeMode="cover"
         style={styles.image}/>
        </View>
        <View style={styles.rootContainer}>
            <Text style={styles.heading}>Coffee so good, your taste buds will love it.</Text>
            <Text style={styles.subHeading}>The best grain, the finest roast, the powerful flavor.</Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
        </View>
        </>
    );
};

export default WelcomeScreen;

const styles= StyleSheet.create({
    imgContainer:{
        flex: 2,
    },
    rootContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingBottom: 40,
        backgroundColor: '#000'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    heading:{
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        marginHorizontal: 40,
        letterSpacing: 0.5,
    },
    subHeading:{
        color: '#aaa',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 20,
        textAlign: 'center',
        marginHorizontal: 50
    },
    button:{
        width: '80%',
        height: 60,
        backgroundColor: '#c5845bef',
        justifyContent:'center',
        borderRadius: 12
    },
    buttonText:{
        color: '#fff',
        textAlign:'center',
        fontSize: 16
    },
});