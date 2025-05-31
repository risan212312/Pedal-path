import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

export function HelloWave() {
  return <ThemedText style={styles.wave}>👋</ThemedText>;
}

const styles = StyleSheet.create({
  wave: {
    fontSize: 24,
  },
}); 