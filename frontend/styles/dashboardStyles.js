// styles/dashboardStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scale = screenWidth / 375;

export const dashboardStyles = StyleSheet.create({
  metricContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // allow natural wrapping
    marginBottom: 20,
  },

  metricCard: {
    // Removed fixed flexBasis for dynamic sizing
    padding: 16 * scale,
    backgroundColor: '#ffffff',
    borderRadius: 16 ,
    marginRight: 12,
    marginBottom: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'flex-start', // shrink-wrap based on content
    minWidth: 120, // keep small cards readable
    maxWidth: screenWidth * 0.9, // prevent stretching too much

    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8 * scale,
    flexWrap: 'wrap',
  },

  metricIcon: {
    fontSize: 26 * scale,
    marginRight: 8,
  },

  metricName: {
    fontSize: 16 * scale,
    fontWeight: '600',
    color: '#4b5563',
    flexShrink: 1,
    flexWrap: 'wrap',
  },

  metricValue: {
    fontSize: 28 * scale,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 4,
    flexShrink: 1,
  },

  metricUnit: {
    fontSize: 14 * scale,
    color: '#6b7280',
    marginTop: 2,
  },
});
