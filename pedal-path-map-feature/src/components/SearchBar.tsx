import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface SearchBarProps {
  apiKey: string;
  onLocationSelect: (details: any) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  apiKey,
  onLocationSelect,
  placeholder = 'Search for a location...',
}) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        onPress={(data, details = null) => {
          if (details) {
            onLocationSelect(details);
          }
        }}
        query={{
          key: apiKey,
          language: 'en',
        }}
        fetchDetails={true}
        styles={{
          container: styles.searchContainer,
          textInput: styles.input,
          listView: styles.listView,
        }}
        enablePoweredByContainer={false}
        debounce={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    top: 40,
    alignSelf: 'center',
    zIndex: 1,
  },
  searchContainer: {
    flex: 0,
  },
  input: {
    height: 45,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SearchBar;