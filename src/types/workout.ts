export type WorkoutType = 'cycling' | 'running' | 'walking' | 'hiking' | 'other';

export type WorkoutState = 'idle' | 'running' | 'paused';

export interface WorkoutSession {
  id: string;
  type: WorkoutType;
  startTime: number;
  endTime: number;
  duration: number;
  caloriesBurned: number;
}

// MET (Metabolic Equivalent of Task) values for different activities
export const MET_VALUES: Record<WorkoutType, number> = {
  cycling: 7.5, // Moderate effort
  running: 9.8, // 10-minute mile pace
  walking: 3.5, // Moderate pace
  hiking: 5.3,  // General hiking
  other: 4.0,   // Moderate activity
}; 