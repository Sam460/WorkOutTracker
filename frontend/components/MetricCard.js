// components/MetricCard.js
import React from 'react';
import { View, Text } from 'react-native';
import { dashboardStyles } from '../styles/dashboardStyles';

const MetricCard = ({ icon, label, value, unit, iconBgColor }) => (
  <View style={dashboardStyles.metricCard}>
    <View style={[dashboardStyles.iconCircle, { backgroundColor: iconBgColor }]}>
      <Text style={dashboardStyles.iconText}>{icon}</Text>
    </View>
    <View>
      <Text style={dashboardStyles.metricLabel}>{label}</Text>
      <Text style={dashboardStyles.metricValue}>
        {value} {unit && <Text style={dashboardStyles.metricUnit}>{unit}</Text>}
      </Text>
    </View>
  </View>
);

export default MetricCard;
