import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    // State variables for trip information
    const [tripsDone, setTripsDone] = useState(5); // Example value
    const [totalDistance, setTotalDistance] = useState(120); // Example value in kilometers
    const [userInfo, setUser ] = useState({
        name: 'Risan Shrestha',
        email: 'risan005@gmail.com',
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Pedal Path</Text>
            <Image 
                source={require('@/assets/images/pic.jpeg')} // Update with your image path
                style={styles.image} 
            />
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Trips Done: {tripsDone}</Text>
                <Text style={styles.infoText}>Total Distance: {totalDistance} km</Text>
                <Text style={styles.infoText}>:User  {userInfo.name}</Text>
                <Text style={styles.infoText}>Email: {userInfo.email}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6', // Light blue background
    },
    title: {
        fontSize: 24,
        marginBottom: 30,
    },
    infoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200, // Set the width of the image
        height: 200, // Set the height of the image
        marginBottom: 20, // Add some space below the image
    },
    infoText: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default HomeScreen;
