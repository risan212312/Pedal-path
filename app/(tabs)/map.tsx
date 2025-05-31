import { Image } from 'expo-image';
import React from 'react';
import { Platform, StyleSheet, View, useWindowDimensions } from 'react-native';
import { ThemedView } from '../../src/components/ThemedView';

export default function MapScreen() {
  const { width, height } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';

  return (
    <ThemedView style={styles.container}>
      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/images/sydney-map.png')}
          style={[
            styles.mapImage,
            {
              width: isWeb ? width * 0.8 : width * 0.9,
              height: isWeb ? height * 0.8 : height * 0.85,
            }
          ]}
          contentFit="contain"
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  mapImage: {
    resizeMode: 'contain',
  },
}); 