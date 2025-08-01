// components/Dashboard.js
import React from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import MetricCard from './MetricCard';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import { appStyles } from '../styles/appStyles';
import { dashboardStyles } from '../styles/dashboardStyles';
import { commonStyles } from '../styles/commonStyles';
import { dashboardMetrics, chartData } from '../constants/data';

const screenWidth = Dimensions.get('window').width;

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={appStyles.contentContainer}>
      <View style={dashboardStyles.metricContainer}>
        {dashboardMetrics.map((metric) => (
          <MetricCard
            key={metric.id}
            name={metric.name}
            value={metric.value}
            unit={metric.unit}
            icon={metric.icon}
          />
        ))}
      </View>

      {/* Line Chart for Daily Activity */}
      <View style={commonStyles.card}>
        <Text style={commonStyles.cardTitle}>Daily Activity</Text>
        <Text style={commonStyles.cardDescription}>
          Your workout duration and calories this week.
        </Text>
        <LineChart
          data={{
            labels: chartData.weekly.labels,
            datasets: [
              {
                data: chartData.weekly.duration,
                color: () => '#3b82f6',
                strokeWidth: 2,
              },
              {
                data: chartData.weekly.calories,
                color: () => '#ef4444',
                strokeWidth: 2,
              },
            ],
            legend: ['Duration (min)', 'Calories (kcal)'],
          }}
          width={screenWidth - 40}
          height={240}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(31, 41, 55, ${opacity})`,
            labelColor: () => '#6b7280',
            style: { borderRadius: 16 },
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#ffffff',
            },
          }}
          style={{
            borderRadius: 16,
            marginTop: 10,
          }}
        />
      </View>

      {/* Progress Chart for Completion */}
      <View style={commonStyles.card}>
        <Text style={commonStyles.cardTitle}>Goal Completion</Text>
        <Text style={commonStyles.cardDescription}>Based on weekly target</Text>
        <ProgressChart
          data={{
            labels: ['Steps', 'Calories', 'Water'],
            data: dashboardMetrics.map(m => m.value / m.goal),
          }}
          width={screenWidth - 40}
          height={220}
          strokeWidth={16}
          radius={40}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(45, 104, 242, ${opacity})`,
            labelColor: () => '#6b7280',
          }}
          hideLegend={false}
          style={{
            marginTop: 10,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
