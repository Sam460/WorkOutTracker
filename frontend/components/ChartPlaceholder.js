// components/ChartPlaceholder.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChartPlaceholder = ({ title, description, type, data }) => (
  <View style={styles.chartSection}>
    <Text style={styles.chartTitle}>{title}</Text>
    {description && <Text style={styles.chartDescription}>{description}</Text>}
    <View style={styles.chartContainer}>
      <Text style={styles.chartVisualText}>
        {type === 'line' ? 'LINE CHART VISUAL' : type === 'bar' ? 'BAR CHART VISUAL' : 'DOUGHNUT CHART VISUAL'}
      </Text>
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
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
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
    color: '#6b7280',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChartPlaceholder;
