import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface ParallaxScrollViewProps {
  children: React.ReactNode;
  headerImage?: React.ReactNode;
  headerBackgroundColor?: {
    light: string;
    dark: string;
  };
}

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor = { light: '#FFFFFF', dark: '#000000' },
}: ParallaxScrollViewProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { backgroundColor: headerBackgroundColor.light }]}>
        {headerImage}
      </View>
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    padding: 16,
  },
}); 