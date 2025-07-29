// styles/dashboardStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const dashboardStyles = StyleSheet.create({
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  metricCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    width: (windowWidth - 80) / 2 - 10, // Adjust for padding and gap on small screens
    marginBottom: 15,
    ...(windowWidth >= 768 && {
      width: (windowWidth - 250 - 80) / 4 - 15, // Adjust for sidebar, padding and gap on larger screens
    }),
  },
  iconCircle: {
    padding: 12,
    borderRadius: 9999, // Full rounded
    marginRight: 15,
  },
  iconText: {
    fontSize: 20,
  },
  metricLabel: {
    fontSize: 13,
    color: '#6b7280', // Gray-500 equivalent
  },
  metricValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937', // Gray-800 equivalent
  },
  metricUnit: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  chartSection: {
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
});
