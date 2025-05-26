import { FIREBASE_AUTH } from '@/firebasecofig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { ActivityIndicator, Button, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const login = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading , setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {   
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
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
            <>
            <Button title="Sign Up" onPress={signUp}/>
            <Button title="Login" onPress={signIn}/>
            
            
            </>
            )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default login;

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      flex: 1,
      justifyContent: 'center',
    },
    input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
    },
  });