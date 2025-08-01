// constants/data.js

// Dashboard metrics data
export const dashboardMetrics = [
  { id: '1', name: 'Steps', value: 7500, goal: 10000, unit: 'steps', icon: '👟' },
  { id: '2', name: 'Calories', value: 540, goal: 800, unit: 'kcal', icon: '🔥' },
  { id: '3', name: 'Water Intake', value: 1.8, goal: 2.5, unit: 'L', icon: '💧' },
];

// Chart data
export const chartData = {
  weekly: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    duration: [30, 45, 60, 40, 50, 70, 60],
    calories: [350, 420, 550, 380, 480, 650, 590],
  },
  monthly: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    duration: [210, 250, 280, 220],
  },
};

// Activity log data
export const initialActivityLogData = [
  { type: 'Running', duration: 45, calories: 420, date: '2025-07-28' },
  { type: 'Weightlifting', duration: 60, calories: 550, date: '2025-07-27' },
  { type: 'Yoga', duration: 30, calories: 150, date: '2025-07-26' },
  { type: 'Cycling', duration: 50, calories: 480, date: '2025-07-25' },
];

// Schedule data
export const initialScheduleData = [
  { id: '1', activity: 'Morning Run', details: '30 minute jog in the park', time: '8:00 AM' },
  { id: '2', activity: 'Gym Session', details: 'Upper body workout', time: '6:00 PM' },
  { id: '3', activity: 'Yoga Class', details: 'Hatha yoga with a friend', time: '7:30 PM' },
];
