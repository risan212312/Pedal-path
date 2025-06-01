import { Tabs, useRouter, useSegments } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FIREBASE_AUTH } from '../../firebaseconfig';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (!user && segments[1] !== 'login') {
        router.replace('/(tabs)/login');
      }
      if (user && segments[1] === 'login') {
        router.replace('/(tabs)/HomeScreen');
      }
    });
    return unsubscribe;
  }, [router, segments]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.2.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: 'Maps',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../cyclists image/map_icon.png')}
              style={{ width: 28, height: 28, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../cyclists image/login.png')}
              style={{ width: 28, height: 28, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      {/* ...other tabs... */}
    </Tabs>
  );
}
