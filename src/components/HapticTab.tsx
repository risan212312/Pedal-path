import * as Haptics from 'expo-haptics';
import { ComponentProps } from 'react';
import { Platform, Pressable } from 'react-native';

export function HapticTab(props: ComponentProps<typeof Pressable>) {
  return (
    <Pressable
      {...props}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPress?.(e);
      }}
    />
  );
} 