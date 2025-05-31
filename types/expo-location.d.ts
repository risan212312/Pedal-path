declare module 'expo-location' {
  export interface LocationObject {
    coords: {
      latitude: number;
      longitude: number;
      altitude: number | null;
      accuracy: number;
      altitudeAccuracy: number | null;
      heading: number | null;
      speed: number | null;
    };
    timestamp: number;
  }

  export interface LocationPermissionResponse {
    status: 'granted' | 'denied';
    granted: boolean;
    canAskAgain: boolean;
  }

  export function requestForegroundPermissionsAsync(): Promise<LocationPermissionResponse>;
  export function getCurrentPositionAsync(options?: {
    accuracy?: number;
  }): Promise<LocationObject>;
} 