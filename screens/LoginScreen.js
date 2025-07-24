import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function LoginScreen({navigation}){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginHandler = async ()=> {
       const storedEmail = await AsyncStorage.getItem('userEmail');
       const storedPassword = await AsyncStorage.getItem('userPassword');
        if(storedEmail === email && storedPassword === password){
            navigation.navigate('Home');
        } else{
            Alert.alert('Error', 'Invalid email or password');
        };
    };
    
    return(
        <>
        <StatusBar style="light" />
        <View style={styles.rootContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.head}>LOGO</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.heading}>Login</Text>
                <Text style={styles.email}>Email</Text>
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    style={styles.emailInput}
                />
                <Text style={styles.password}>Password</Text>
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.passwordInput}
                />
                <Pressable style={styles.button} onPress={loginHandler}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <Pressable style={styles.footer} onPress={()=> navigation.navigate('SignUp')}>
                    <Text >Don't have any account? Sign Up</Text>
                </Pressable>
            </View>
        </View>
        </>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: '#000'
    },
    headContainer:{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    head:{
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center' 
    },
    subContainer:{
        flex: 2,
        justifyContent: 'flex-start',
        backgroundColor: '#eae9e8ef',
        borderTopLeftRadius: 80

    },
    heading:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 35,
        marginBottom: 75
    },
    email:{
        marginHorizontal: 25,
    },
    emailInput:{
        width: 'auto',
        backgroundColor: '#f8f2edef',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#d1cecaef',
        marginHorizontal: 25,
        marginBottom: 60,
        marginTop:5,
    },
    password:{
        marginHorizontal: 25,
    },
    passwordInput:{
        width: 'auto',
        backgroundColor: '#f8f2edef',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#d1cecaef',
        marginHorizontal: 25,
        marginBottom: 60,
        marginTop:5,
    },
    button:{
        width: 'auto',
        height: 45,
        borderRadius: 30,
        marginHorizontal: 25,
        marginBottom: 40,
        backgroundColor: '#000',
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 20
    },
    footer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});