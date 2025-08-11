// styles/commonStyles.js
import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  // Title for form screens
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937', // dark gray
    marginBottom: 20,
    textAlign: 'center',
  },

  // Input field style
  formInput: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#d1d5db', // light gray
    borderRadius: 8,
    backgroundColor: '#ffffff',
    fontSize: 16,
    marginBottom: 15,
    
  },

  // Primary action button
  primaryButton: {
    backgroundColor: '#3b82f6', // blue
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Button text
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
