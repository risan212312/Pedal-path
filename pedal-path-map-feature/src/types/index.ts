// filepath: pedal-path-map-feature/pedal-path-map-feature/src/types/index.ts
export interface Event {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  date: string;
  time: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Route {
  origin: Location;
  destination: Location;
  duration: number; // in seconds
  distance: number; // in meters
}