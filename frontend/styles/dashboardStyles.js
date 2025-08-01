// styles/dashboardStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const dashboardStyles = StyleSheet.create({
  metricContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  metricCard: {
    width: screenWidth < 768 ? '48%' : '30%', // Responsive: 2 on mobile, 3 on tablet/desktop
    marginBottom: 15,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  metricIcon: {
    fontSize: 28,
    marginRight: 10,
  },

  metricName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4b5563',
  },

  metricValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 5,
  },

  metricUnit: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 2,
  },
});
