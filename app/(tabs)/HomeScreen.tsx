// File: /Pedal-path/app/(tabs)/HomeScreen.tsx

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Page!</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Home"
                    onPress={() => navigator.navigate('Home')}
                />
                <Button
                    title="Map"
                    onPress={() => navigator.navigate('Map')}
                />
                <Button
                    title="Communication"
                    onPress={() => navigator.navigate('Communication')}
                />
                <Button
                    title="Settings"
                    onPress={() => navigator.navigate('Settings')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'space-around',
        height: 200, // Adjust height as needed
    },
});

export default HomeScreen;
