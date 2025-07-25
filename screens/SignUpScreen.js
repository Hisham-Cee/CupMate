import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function SignUpScreen({navigation}){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

    const signUpHandler= async() =>{
        await AsyncStorage.setItem('userName', name);
        await AsyncStorage.setItem('userEmail', email);
        await AsyncStorage.setItem('userPhoneNumber', phoneNumber);
        await AsyncStorage.setItem('userPassword', password);
        await AsyncStorage.setItem('userConfirmPass', confirmPass);
        if(name && email && phoneNumber && password && confirmPass && password === confirmPass){
            navigation.navigate('Home');
            console.log(email, password);
        } else {
            Alert.alert('Invalid !', 'Please fill all the details');
        }
        
    };

    return(
        <>
        <StatusBar style="light" />
        <View style={styles.rootContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.head}>Sign Up</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.inputName}>Name</Text>
                <TextInput 
                    value={name}
                    onChangeText={setName}
                    style={styles.inputBox}
                />
                <Text style={styles.inputName}>Email</Text>
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    style={styles.inputBox}
                />
                <Text style={styles.inputName}>Phone Number</Text>
                <TextInput 
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    style={styles.inputBox}
                    keyboardType="number-pad"
                />
                <Text style={styles.inputName}>Password</Text>
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    style={styles.inputBox}
                />
                <Text style={styles.inputName}>Confirm Password</Text>
                <TextInput 
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                    style={styles.inputBox}
                />
                <Pressable style={styles.button} onPress={signUpHandler}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.footer} onPress={() => navigation.reset({index: 0, routes: [{ name: 'Login' }]})}>
                    <Text>Already have an account? Log In</Text>
                </Pressable>
            </View>
        </View>
        </>
    );
};

export default SignUpScreen;

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
        flex: 5,
        justifyContent: 'flex-start',
        backgroundColor: '#eae9e8ef',
        borderTopLeftRadius: 80,
        paddingTop: 55
    },
    inputName:{
        marginHorizontal: 25,
    },
    inputBox:{
        width: 'auto',
        backgroundColor: '#f8f2edef',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#d1cecaef',
        marginHorizontal: 25,
        marginBottom: 20,
        marginTop:5,
    },
    button:{
        width: 'auto',
        height: 45,
        borderRadius: 30,
        marginHorizontal: 25,
        marginBottom: 20,
        marginTop: 90,
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