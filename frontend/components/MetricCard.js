// components/MetricCard.js
import React from 'react';
import { View, Text } from 'react-native';
import { dashboardStyles } from '../styles/dashboardStyles';

const MetricCard = ({ name, value, unit, icon }) => {
  return (
    <View style={dashboardStyles.metricCard}>
      <View style={dashboardStyles.metricHeader}>
        <Text style={dashboardStyles.metricIcon}>{icon}</Text>
        <Text style={dashboardStyles.metricName}>{name}</Text>
      </View>
      <Text style={dashboardStyles.metricValue}>{value}</Text>
      <Text style={dashboardStyles.metricUnit}> {unit}</Text>
    </View>
  );
};

export default MetricCard;
