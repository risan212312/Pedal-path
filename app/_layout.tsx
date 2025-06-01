import { Roboto_400Regular, Roboto_700Bold, useFonts as useRobotoFonts } from '@expo-google-fonts/roboto';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Keep splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useRobotoFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      >
        <Slot />
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
