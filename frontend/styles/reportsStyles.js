// styles/reportsStyles.js
import { StyleSheet } from 'react-native';

export const reportsStyles = StyleSheet.create({
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
    gap: 8,
  },

  buttonGroup: {
    flexDirection: 'row',
    backgroundColor: '#eef2ff',
    borderRadius: 10,
    padding: 4,
  },

  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  filterButtonActive: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  filterButtonText: {
    fontSize: 14,
    color: '#6b7280',
  },

  filterButtonTextActive: {
    color: '#2d68f2',
    fontWeight: 'bold',
  },
});
