// styles/reportsStyles.js
import { StyleSheet } from 'react-native';

export const reportsStyles = StyleSheet.create({
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#e5e7eb', // Gray-200 equivalent
  },
  filterButtonActive: {
    backgroundColor: '#3b82f6', // Blue-500 equivalent
  },
  filterButtonText: {
    color: '#374151', // Gray-700 equivalent
    fontSize: 14,
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
});
