import React from 'react';
import { Text, TextProps, TextStyle, useColorScheme } from 'react-native';

type ThemedTextType = 'title' | 'subtitle' | 'default' | 'defaultSemiBold' | 'link';

interface ThemedTextProps extends TextProps {
  type?: ThemedTextType;
  children: React.ReactNode;
}

export function ThemedText({ type = 'default', style, ...props }: ThemedTextProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      color: isDark ? '#FFFFFF' : '#000000',
    };

    switch (type) {
      case 'title':
        return {
          ...baseStyle,
          fontSize: 24,
          fontWeight: '700',
        };
      case 'subtitle':
        return {
          ...baseStyle,
          fontSize: 20,
          fontWeight: '600',
        };
      case 'defaultSemiBold':
        return {
          ...baseStyle,
          fontSize: 16,
          fontWeight: '600',
        };
      case 'link':
        return {
          ...baseStyle,
          fontSize: 16,
          fontWeight: '400',
          color: '#2f95dc',
          textDecorationLine: 'underline',
        };
      default:
        return {
          ...baseStyle,
          fontSize: 16,
          fontWeight: '400',
        };
    }
  };

  return <Text style={[getTextStyle(), style]} {...props} />;
} 