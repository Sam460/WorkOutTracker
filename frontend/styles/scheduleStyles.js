// styles/scheduleStyles.js
import { StyleSheet } from 'react-native';

export const scheduleStyles = StyleSheet.create({
  scheduleItem: {
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f7f9',
    borderRadius: 8,
  },

  scheduleActivity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },

  scheduleDetails: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },

  scheduleTime: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 8,
    fontWeight: 'bold',
  },
});
