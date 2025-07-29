// components/ChartPlaceholder.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChartPlaceholder = ({ title, description, type, data }) => (
  <View style={styles.chartSection}>
    <Text style={styles.chartTitle}>{title}</Text>
    {description && <Text style={styles.chartDescription}>{description}</Text>}
    <View style={styles.chartContainer}>
      {/* Making the text larger and more visible for debugging */}
      <Text style={styles.chartVisualText}>
        {type === 'line' ? 'LINE CHART VISUAL' : type === 'bar' ? 'BAR CHART VISUAL' : 'DOUGHNUT CHART VISUAL'}
      </Text>
      {data && data.datasets && data.datasets[0] && (
        <Text style={styles.chartVisualTextSmall}>
          Data Received: {JSON.stringify(data.datasets[0].data)}
        </Text>
      )}
      {!data || !data.datasets || !data.datasets[0] && (
        <Text style={styles.chartVisualTextSmall}>
          (No data prop or empty datasets)
        </Text>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
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
  chartContainer: {
    height: 250, // Fixed height for chart placeholder
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb', // Light gray background for chart area
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginTop: 15,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#1f2937',
  },
  chartDescription: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 10,
  },
  chartVisualText: {
    color: '#3b82f6', // Distinct blue color
    fontSize: 20, // Larger font size
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  chartVisualTextSmall: {
    color: '#6b7280', // Gray color for data
    fontSize: 14, // Slightly larger for visibility
    textAlign: 'center',
    marginTop: 5,
  }
});

export default ChartPlaceholder;
