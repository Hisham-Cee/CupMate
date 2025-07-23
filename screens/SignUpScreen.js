import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function SignUpScreen({navigation}){
    return(
        <>
        <StatusBar style="light" />
        <View style={styles.rootContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.head}>Sign Up</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.inputName}>Name</Text>
                <TextInput style={styles.inputBox}/>
                <Text style={styles.inputName}>Email</Text>
                <TextInput style={styles.inputBox}/>
                <Text style={styles.inputName}>Phone Number</Text>
                <TextInput style={styles.inputBox}/>
                <Text style={styles.inputName}>Password</Text>
                <TextInput style={styles.inputBox}/>
                <Text style={styles.inputName}>Confirm Password</Text>
                <TextInput style={styles.inputBox}/>
                <Pressable style={styles.button}>
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