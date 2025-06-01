import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    // State variables for trip information
    const [tripsDone, setTripsDone] = useState(5); // Example value
    const [totalDistance, setTotalDistance] = useState(120); // Example value in kilometers
    const [userInfo, setUser ] = useState({
        name: 'Risan Shrestha',
        email: 'risan005@gmail.com',
    });

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
      });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ImageBackground
            source={require('@/assets/images/background.jpg')}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <View style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.35)', borderRadius: 24, padding: 24, margin: 24 }]}> 
                <Text style={[styles.title, { fontFamily: 'Roboto_700Bold', marginBottom: 16 }]}>Welcome to Pedal Path</Text>
                <Image 
                    source={require('@/assets/images/pic.jpeg')}
                    style={styles.avatar}
                />
                <View style={styles.infoContainer}>
                    <Text style={[styles.infoText, styles.label]}>Trips Done</Text>
                    <Text style={[styles.infoValue]}>{tripsDone}</Text>
                    <Text style={[styles.infoText, styles.label]}>Total Distance</Text>
                    <Text style={styles.infoValue}>{totalDistance} km</Text>
                    <Text style={[styles.infoText, styles.label]}>User</Text>
                    <Text style={styles.infoValue}>{userInfo.name}</Text>
                    <Text style={[styles.infoText, styles.label]}>Email</Text>
                    <Text style={styles.infoValue}>{userInfo.email}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginBottom: 0,
        // backgroundColor added inline for overlay
    },
    title: {
        fontSize: 26, // Smaller font size
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.4)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        letterSpacing: 1.2,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 24,
        borderWidth: 3,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    infoContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 8,
        gap: 4,
    },
    label: {
        fontSize: 13, // Smaller label
        color: '#e0e0e0',
        marginTop: 8,
        marginBottom: 2,
        letterSpacing: 0.5,
    },
    infoValue: {
        fontSize: 16, // Smaller value
        color: '#fff',
        fontFamily: 'Roboto_700Bold',
        marginBottom: 2,
        textShadowColor: 'rgba(0,0,0,0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    infoText: {
        fontSize: 13, // Smaller info text
        color: '#fff',
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
    },
});

export default HomeScreen;
