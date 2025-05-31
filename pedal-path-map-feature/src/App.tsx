import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import MapScreen from "./components/MapView";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <MapScreen />
    </SafeAreaView>
  );
}