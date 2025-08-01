// styles/dashboardStyles.js
import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  metricContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  metricCard: {
    width: '48%', // For two cards per row
    marginBottom: 15,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 3,
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  metricName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4b5563',
  },
  metricValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 10,
  },
  metricUnit: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 5,
  },
});
