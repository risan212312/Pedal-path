import React from 'react';
import { View, ViewProps, useColorScheme } from 'react-native';

export function ThemedView(props: ViewProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: isDark ? '#000000' : '#FFFFFF',
          padding: 16,
          borderRadius: 8,
        },
        props.style,
      ]}
    />
  );
} 