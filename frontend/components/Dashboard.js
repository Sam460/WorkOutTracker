// components/Dashboard.js
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import MetricCard from './MetricCard';
import ChartPlaceholder from './ChartPlaceholder';
import { appStyles } from '../styles/appStyles';
import { dashboardStyles } from '../styles/dashboardStyles';
import { commonStyles } from '../styles/commonStyles';
import { dashboardMetrics, chartData } from '../constants/data';

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={appStyles.contentContainer}>
      <Text style={appStyles.headerTitle}>Overview</Text>
      <Text style={appStyles.headerSubtitle}>Here's your progress so far.</Text>

      {/* Metrics Section */}
      <View style={dashboardStyles.metricContainer}>
        {/*
          The error "TypeError: Cannot read property 'map' of undefined"
          occurs here if 'dashboardMetrics' is not an array. This code assumes
          that the '../constants/data' file is correct and exports an array.
        */}
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

      {/* Charts Section */}
      <View style={commonStyles.card}>
        <ChartPlaceholder
          title="Daily Activity"
          description="A summary of your daily workout duration and calories burned."
          type="line"
          data={{
            labels: chartData.weekly.labels,
            datasets: [
              { data: chartData.weekly.duration, label: 'Duration (min)' },
              { data: chartData.weekly.calories, label: 'Calories (kcal)' },
            ]
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
