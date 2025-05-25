const GOOGLE_MAPS_API_KEY = 'AIzaSyBDasgMhdj8noYALi9Nq53gbcPnGpi6isA';

export default {
  name: 'Pedal Path',
  slug: 'pedal-path',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.pedalpath.app',
    config: {
      googleMapsApiKey: GOOGLE_MAPS_API_KEY
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    package: 'com.pedalpath.app',
    config: {
      googleMaps: {
        apiKey: GOOGLE_MAPS_API_KEY
      }
    }
  },
  web: {
    favicon: './assets/favicon.png'
  }
}; 