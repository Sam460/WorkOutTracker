// components/MetricCard.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const MetricCard = ({ name, value, unit, icon }) => {
  return (
    <View style={styles.metricCard}>
      <View style={styles.metricHeader}>
        <Text style={styles.metricIcon}>{icon}</Text>
        <Text style={styles.metricName}>{name}</Text>
      </View>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricUnit}> {unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  metricCard: {
    width: screenWidth < 768 ? '48%' : '30%',
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

export default MetricCard;
