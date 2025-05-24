import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function CommunityScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'transparent', dark: 'transparent' }}
      headerImage={
        <ThemedView style={styles.headerContainer}>
          <ThemedText type="title" style={styles.titleTop}>
            Community 💬
          </ThemedText>
        </ThemedView>
      }
    >
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'flex-start',
    marginTop: 80, 
    marginBottom: 10,
    paddingLeft: 24,
  },
  titleTop: {
    fontSize: 26, 
    fontWeight: '600', 
    color: '#2a7cff',
    marginBottom: 8,
    textAlign: 'left',
    letterSpacing: 0.5, 
  },
  header: {
    fontSize: 80,
    textAlign: 'center',
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    marginTop: 16,
    textAlign: 'center',
  },
});
