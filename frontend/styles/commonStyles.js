// styles/commonStyles.js
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    color: '#1f2937',
  },

  cardDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 15,
  },

  primaryButton: {
    backgroundColor: '#2d68f2',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secondaryButton: {
    backgroundColor: '#eef2ff',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#2d68f2',
  },

  secondaryButtonText: {
    color: '#2d68f2',
    fontSize: 16,
    fontWeight: 'bold',
  },

  formGroup: {
    marginBottom: 20,
  },

  formLabel: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
    fontWeight: '600',
  },

  formInput: {
    borderWidth: 1,
    borderColor: '#e0e4e7',
    borderRadius: 10,
    padding: 14,
    backgroundColor: '#f9fafb',
    fontSize: 16,
    color: '#1f2937',
  },
});
