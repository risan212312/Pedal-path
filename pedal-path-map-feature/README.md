# Pedal Path Map Feature

## Overview
The Pedal Path Map Feature is a React Native application designed to help users find cycling events in their vicinity. The app utilizes the Google Maps API to display the user's current location, event markers, and routes to selected events.

## Project Structure
```
pedal-path-map-feature
├── src
│   ├── components
│   │   ├── MapView.tsx         # Renders the map and user location
│   │   ├── EventMarker.tsx      # Displays event markers on the map
│   │   ├── RouteDisplay.tsx     # Fetches and displays routes between locations
│   │   └── SearchBar.tsx        # Provides a search interface for locations
│   ├── config
│   │   └── firebase.ts          # Firebase configuration and initialization
│   ├── hooks
│   │   └── useCurrentLocation.ts # Custom hook for managing user location
│   ├── types
│   │   └── index.ts             # TypeScript types and interfaces
│   └── App.tsx                  # Main entry point of the application
├── package.json                  # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd pedal-path-map-feature
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Firebase Configuration**
   - Update the `src/config/firebase.ts` file with your Firebase project credentials.

4. **Start the Application**
   ```bash
   npx expo start
   ```

## Usage
- The app will request location permissions upon launch.
- Users can search for locations using the search bar.
- Markers will display cycling events on the map.
- Users can tap on event markers to view details and get directions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.