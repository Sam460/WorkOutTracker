// styles/scheduleStyles.js
import { StyleSheet } from 'react-native';

export const scheduleStyles = StyleSheet.create({
  scheduleItem: {
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6', // Blue-500 equivalent
    backgroundColor: '#eff6ff', // Blue-50 equivalent
    borderRadius: 8,
    marginBottom: 10,
  },
  scheduleActivity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e40af', // Blue-800 equivalent
  },
  scheduleDetails: {
    fontSize: 14,
    color: '#4b5563', // Gray-600 equivalent
    marginTop: 2,
  },
  scheduleTime: {
    fontSize: 12,
    color: '#6b7280', // Gray-500 equivalent
    marginTop: 5,
  },
});
