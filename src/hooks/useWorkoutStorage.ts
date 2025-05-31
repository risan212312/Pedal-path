import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { MET_VALUES, WorkoutSession, WorkoutType } from '../types/workout';

export const DEFAULT_WEIGHT = 70; // Default weight in kg
const STORAGE_KEY = 'workout_history';
const WEIGHT_KEY = 'user_weight';

export function useWorkoutStorage() {
  const [workoutHistory, setWorkoutHistory] = useState<WorkoutSession[]>([]);
  const [userWeight, setUserWeight] = useState<number>(DEFAULT_WEIGHT);

  useEffect(() => {
    loadWorkoutHistory();
    loadUserWeight();
  }, []);

  const loadWorkoutHistory = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setWorkoutHistory(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading workout history:', error);
    }
  };

  const loadUserWeight = async () => {
    try {
      const stored = await AsyncStorage.getItem(WEIGHT_KEY);
      if (stored) {
        setUserWeight(Number(stored));
      }
    } catch (error) {
      console.error('Error loading user weight:', error);
    }
  };

  const saveUserWeight = async (weight: number) => {
    try {
      await AsyncStorage.setItem(WEIGHT_KEY, weight.toString());
      setUserWeight(weight);
    } catch (error) {
      console.error('Error saving user weight:', error);
    }
  };

  const calculateCaloriesBurned = (duration: number, type: WorkoutType): number => {
    // Formula: Calories = MET × Weight (kg) × Duration (hours)
    const hours = duration / 3600; // Convert seconds to hours
    const met = MET_VALUES[type];
    return Math.round(met * userWeight * hours);
  };

  const saveWorkout = async (workout: Omit<WorkoutSession, 'id'>) => {
    try {
      const newWorkout: WorkoutSession = {
        ...workout,
        id: Date.now().toString(),
      };

      const updatedHistory = [newWorkout, ...workoutHistory];
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
      setWorkoutHistory(updatedHistory);
    } catch (error) {
      console.error('Error saving workout:', error);
    }
  };

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setWorkoutHistory([]);
    } catch (error) {
      console.error('Error clearing workout history:', error);
    }
  };

  return {
    workoutHistory,
    userWeight,
    saveUserWeight,
    calculateCaloriesBurned,
    saveWorkout,
    clearHistory,
  };
} 