// components/ChartPlaceholder.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ChartPlaceholder = ({ title, description, type }) => (
  <View style={styles.chartSection}>
    <Text style={styles.chartTitle}>{title}</Text>
    {description && <Text style={styles.chartDescription}>{description}</Text>}
    <View style={styles.chartContainer}>
      <Text style={styles.chartVisualText}>
        {type === 'line'
          ? 'LINE CHART HERE'
          : type === 'bar'
          ? 'BAR CHART HERE'
          : 'DOUGHNUT CHART HERE'}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  chartSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 25,
    width: screenWidth - 30,
    alignSelf: 'center',
  },
  chartContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e4e7',
    marginTop: 15,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
    color: '#1f2937',
  },
  chartDescription: {
    fontSize: 14,
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
