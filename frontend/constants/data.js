// constants/data.js

// Realistic chart data for weekly and monthly workout durations and calories.
// This data is 'functional' in the sense that it represents typical fitness tracking data.
export const chartData = {
  weekly: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    duration: [35, 50, 65, 30, 75, 40, 95], // Duration in minutes
    calories: [380, 550, 700, 320, 800, 450, 1000], // Calories burned
  },
  monthly: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    duration: [280, 350, 310, 380], // Total duration per week in minutes
  },
  stepsGoal: {
    current: 7890, // Current steps
    goal: 10000,    // Daily step goal
  },
};

// Initial activity log data with realistic workout entries.
export const initialActivityLogData = [
  { type: 'Running', duration: 45, calories: 500, date: '2025-07-28' },
  { type: 'Weight Training', duration: 60, calories: 450, date: '2025-07-27' },
  { type: 'Cycling', duration: 75, calories: 650, date: '2025-07-26' },
  { type: 'Yoga', duration: 30, calories: 180, date: '2025-07-25' },
  { type: 'Swimming', duration: 40, calories: 400, date: '2025-07-24' },
];

// Initial schedule data for upcoming activities.
export const initialScheduleData = [
  { time: 'Tomorrow, 8:00 AM', activity: 'Morning Run (5k)', details: 'Park loop, focus on pace' },
  { time: 'July 31, 6:00 PM', activity: 'Gym Session', details: 'Leg day: squats, lunges, deadlifts' },
  { time: 'August 01, 10:00 AM', activity: 'Yoga Class', details: 'Vinyasa flow at local studio' },
  { time: 'August 02, 7:30 AM', activity: 'Cycling', details: 'Scenic route, 20km' },
  { time: 'August 03, 9:00 AM', activity: 'Rest Day', details: 'Active recovery: light stretching' },
];
