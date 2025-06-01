import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MapsScreen = () => {
  const handlePress = () => {
    // Add your button logic here
    alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image
          source={require('../../cyclists image/map_icon.png')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#222',
    fontFamily: 'Roboto',
  },
});

export default MapsScreen;
