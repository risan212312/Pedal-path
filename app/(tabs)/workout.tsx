import { HapticTab } from '@/components/HapticTab';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { DEFAULT_WEIGHT, useWorkoutStorage } from '@/hooks/useWorkoutStorage';
import { WorkoutState, WorkoutType } from '@/types/workout';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function WorkoutScreen() {
  const [workoutState, setWorkoutState] = useState<WorkoutState>('idle');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<WorkoutType>('cycling');
  const { workoutHistory, userWeight, saveUserWeight, calculateCaloriesBurned, saveWorkout } = useWorkoutStorage();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (workoutState === 'running') {
      intervalId = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [workoutState]);

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartPause = () => {
    if (workoutState === 'idle' || workoutState === 'paused') {
      setWorkoutState('running');
      if (workoutState === 'idle') {
        setStartTime(Date.now());
      }
    } else {
      setWorkoutState('paused');
    }
  };

  const handleStop = async () => {
    if (startTime) {
      const endTime = Date.now();
      await saveWorkout({
        type: selectedType,
        startTime,
        endTime,
        duration: elapsedTime,
        caloriesBurned: calculateCaloriesBurned(elapsedTime, selectedType),
      });
    }
    setWorkoutState('idle');
    setElapsedTime(0);
    setStartTime(null);
  };

  const workoutTypes: WorkoutType[] = ['cycling', 'running', 'walking', 'hiking', 'other'];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.settingsContainer}>
        <ThemedText type="subtitle">Settings</ThemedText>
        <View style={styles.settingsRow}>
          <ThemedText>Weight (kg):</ThemedText>
          <TextInput
            style={[
              styles.weightInput,
              { color: workoutState === 'running' ? '#808080' : '#000000' }
            ]}
            value={userWeight.toString()}
            onChangeText={(text) => saveUserWeight(Number(text) || DEFAULT_WEIGHT)}
            keyboardType="numeric"
            placeholderTextColor="#808080"
          />
        </View>
        <View style={styles.workoutTypesContainer}>
          <ThemedText>Workout Type:</ThemedText>
          <View style={styles.typeButtons}>
            {workoutTypes.map((type) => (
              <Pressable
                key={type}
                style={[
                  styles.typeButton,
                  selectedType === type && styles.selectedTypeButton,
                  (workoutState === 'running' || workoutState === 'paused') && styles.disabledTypeButton
                ]}
                onPress={() => {
                  if (workoutState === 'idle') {
                    setSelectedType(type);
                  }
                }}
                disabled={workoutState !== 'idle'}>
                <ThemedText
                  style={[
                    styles.typeButtonText,
                    selectedType === type && styles.selectedTypeButtonText,
                    (workoutState === 'running' || workoutState === 'paused') && styles.disabledTypeText
                  ]}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </ThemedText>
              </Pressable>
            ))}
          </View>
        </View>
      </ThemedView>

      <ThemedView style={styles.timerContainer}>
        <ThemedText type="title" style={styles.timerText}>
          {formatTime(elapsedTime)}
        </ThemedText>
      </ThemedView>

      <View style={styles.buttonContainer}>
        <HapticTab onPress={handleStartPause} style={styles.button}>
          <ThemedView style={styles.buttonInner}>
            <IconSymbol
              name={workoutState === 'running' ? 'pause-circle' : 'play-circle'}
              size={24}
              color="#808080"
            />
            <ThemedText>{workoutState === 'running' ? 'Pause' : 'Start'}</ThemedText>
          </ThemedView>
        </HapticTab>

        {workoutState !== 'idle' && (
          <HapticTab onPress={handleStop} style={styles.button}>
            <ThemedView style={styles.buttonInner}>
              <IconSymbol name="stop-circle" size={24} color="#808080" />
              <ThemedText>Stop</ThemedText>
            </ThemedView>
          </HapticTab>
        )}
      </View>

      <ThemedView style={styles.statsContainer}>
        <ThemedText type="subtitle">Current Workout Stats</ThemedText>
        <View style={styles.statsRow}>
          <ThemedText>Duration: {formatTime(elapsedTime)}</ThemedText>
        </View>
        <View style={styles.statsRow}>
          <ThemedText>
            Calories: {calculateCaloriesBurned(elapsedTime, selectedType)} kcal
          </ThemedText>
        </View>
        <View style={styles.statsRow}>
          <ThemedText>Type: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}</ThemedText>
        </View>
      </ThemedView>

      <ThemedView style={styles.historyContainer}>
        <ThemedText type="subtitle">Workout History</ThemedText>
        {workoutHistory.slice(0, 5).map((workout) => (
          <ThemedView key={workout.id} style={styles.historyItem}>
            <ThemedText type="defaultSemiBold">
              {new Date(workout.startTime).toLocaleDateString()}
            </ThemedText>
            <ThemedText>Type: {workout.type}</ThemedText>
            <ThemedText>Duration: {formatTime(workout.duration)}</ThemedText>
            <ThemedText>Calories: {workout.caloriesBurned} kcal</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  settingsContainer: {
    marginBottom: 16,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  weightInput: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 8,
    padding: 8,
    width: 80,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  workoutTypesContainer: {
    marginTop: 16,
  },
  typeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  typeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
  },
  selectedTypeButton: {
    backgroundColor: '#808080',
  },
  disabledTypeButton: {
    backgroundColor: '#D0D0D0',
    opacity: 0.6,
  },
  typeButtonText: {
    color: '#000000',
  },
  selectedTypeButtonText: {
    color: '#FFFFFF',
  },
  disabledTypeText: {
    color: '#808080',
  },
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 16,
  },
  button: {
    minWidth: 100,
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
  },
  statsContainer: {
    marginTop: 16,
  },
  statsRow: {
    marginTop: 16,
  },
  historyContainer: {
    marginTop: 16,
    marginBottom: 32,
  },
  historyItem: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#808080',
  },
}); 