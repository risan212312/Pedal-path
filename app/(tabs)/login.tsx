import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { ActivityIndicator, Button, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FIREBASE_AUTH } from '../../firebaseconfig';

const Login = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading , setLoading] = useState(false);

    const auth = FIREBASE_AUTH;
    const router = useRouter();

    const signIn = async () => {
        setLoading(true);
        try {   
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert ('Login Successfull');
            router.replace('/HomeScreen'); // Navigate to HomeScreen after login
        }   catch (error: any){
            console.log(error);
            alert('Invalid email or password');
        }   finally{
            setLoading(false);
        }
            
    }
    

    const signUp = async () => {
        setLoading(true);
        try {   
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert ('Account created, check your email');
        }   catch (error: any){
            console.log(error);
            alert('sign up failed');
        }   finally{
            setLoading(false);
        }
            
    }

    return (
        <View style ={styles.container}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <TextInput value={email} style = {styles.input} placeholder="Email" autoCapitalize="none" onChangeText = {(text)=> setEmail(text)}/> 
            <TextInput secureTextEntry={true} value={password} style = {styles.input} placeholder="password" autoCapitalize="none" onChangeText = {(text)=> setPassword(text)}/> 

            {loading ? (
            
            <ActivityIndicator size={"large"}  color={"#0000ff"}/>
            ): (
            <View style={styles.buttonContainer}>

            <Button title="Sign Up" onPress={signUp}/>

            <Button title="Login" onPress={signIn}/>
            
            
            </View>
            )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      flex: 1,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      marginVertical: 4,
      marginBottom: 20,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'space-around',
        padding: 10,
        height: 120, // Adjust height as needed
        alignItems: 'center',
    },

  });