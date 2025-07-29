// styles/commonStyles.js
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#1f2937', // Gray-800 equivalent
  },
  cardDescription: {
    fontSize: 13,
    color: '#4b5563', // Gray-600 equivalent
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#2563eb', // Blue-600 equivalent
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#10b981', // Green-600 equivalent
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  formGroup: {
    marginBottom: 15,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151', // Gray-700 equivalent
    marginBottom: 5,
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#d1d5db', // Gray-300 equivalent
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
});
