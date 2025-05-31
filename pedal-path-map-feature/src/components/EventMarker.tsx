import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Callout, Marker } from 'react-native-maps';

interface EventMarkerProps {
  event: {
    id: string;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    date: string;
    time: string;
  };
  onPress?: () => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ event, onPress }) => {
  return (
    <Marker
      coordinate={{
        latitude: event.latitude,
        longitude: event.longitude,
      }}
      onPress={onPress}
    >
      <View style={styles.markerContainer}>
        <MaterialCommunityIcons name="bike" size={24} color="#FF4B4B" />
      </View>
      <Callout>
        <TouchableOpacity style={styles.calloutContainer} onPress={onPress}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.description}>{event.description}</Text>
          <Text style={styles.dateTime}>{event.date} at {event.time}</Text>
        </TouchableOpacity>
      </Callout>
    </Marker>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: '#FF4B4B',
  },
  calloutContainer: {
    width: 200,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 12,
    color: '#666',
  },
});

export default EventMarker;