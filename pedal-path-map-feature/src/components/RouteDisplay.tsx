import { decode } from '@mapbox/polyline';
import React, { useEffect, useState } from 'react';
import { Polyline } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from '../config/googleMaps'; // Adjust the import path as necessary

interface RouteDisplayProps {
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
  onRouteCalculated?: (duration: number, distance: number) => void;
}

const RouteDisplay: React.FC<RouteDisplayProps> = ({
  origin,
  destination,
  onRouteCalculated,
}) => {
  const [routeCoordinates, setRouteCoordinates] = useState<any[]>([]);

  useEffect(() => {
    fetchRoute();
  }, [origin, destination]);

  const fetchRoute = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&mode=bicycling&key=${GOOGLE_MAPS_API_KEY}`
      );
      const result = await response.json();

      if (result.routes.length) {
        const route = result.routes[0];
        const points = route.overview_polyline.points;
        const decodedPoints = decode(points).map((point: number[]) => ({
          latitude: point[0],
          longitude: point[1],
        }));

        setRouteCoordinates(decodedPoints);

        if (onRouteCalculated) {
          const duration = route.legs[0].duration.value; // in seconds
          const distance = route.legs[0].distance.value; // in meters
          onRouteCalculated(duration, distance);
        }
      }
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  return (
    <Polyline
      coordinates={routeCoordinates}
      strokeWidth={4}
      strokeColor="#FF4B4B"
      geodesic
    />
  );
};

export default RouteDisplay;