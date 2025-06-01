import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FIREBASE_AUTH } from '../../firebaseconfig';

const Login = () => {
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
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding' style={styles.innerContainer}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to your account</Text>
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                />
                <TextInput
                    secureTextEntry
                    value={password}
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    autoCapitalize="none"
                    onChangeText={setPassword}
                />
                {loading ? (
                    <ActivityIndicator size="large" color="#4F46E5" style={{ marginTop: 24 }} />
                ) : (
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.signupButton} onPress={signUp}>
                            <Text style={styles.signupButtonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginButton} onPress={signIn}>
                            <Image
                                source={require('../../cyclists image/login.png')}
                                style={styles.loginIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FD',
    },
    innerContainer: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 28,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 6,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 8,
        fontFamily: 'Roboto',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
        fontFamily: 'Roboto',
    },
    input: {
        width: '100%',
        height: 52,
        borderRadius: 14,
        backgroundColor: '#F3F4F6',
        paddingHorizontal: 18,
        marginBottom: 18,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        color: '#1A1A1A',
        fontFamily: 'Roboto',
    },
    buttonRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 12,
        gap: 12,
    },
    signupButton: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#4F46E5',
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
        elevation: 2,
        shadowColor: '#4F46E5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    signupButtonText: {
        color: '#4F46E5',
        fontWeight: '600',
        fontSize: 16,
        fontFamily: 'Roboto',
    },
    loginButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4F46E5',
        borderRadius: 14,
        paddingVertical: 14,
        justifyContent: 'center',
        marginLeft: 6,
        elevation: 2,
        shadowColor: '#4F46E5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    loginIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        fontFamily: 'Roboto',
    },
});

export default Login;