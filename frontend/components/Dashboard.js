// components/Dashboard.js
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import MetricCard from './MetricCard';
import ChartPlaceholder from './ChartPlaceholder';
import { dashboardStyles } from '../styles/dashboardStyles';
import { appStyles } from '../styles/appStyles';
import { chartData } from '../constants/data';

const Dashboard = () => {
  const steps = chartData.stepsGoal.current;
  const goal = chartData.stepsGoal.goal;

  return (
    <ScrollView style={appStyles.contentContainer}>
      <Text style={appStyles.heading}>Welcome Back, Alex!</Text>
      <Text style={appStyles.subHeading}>Here's your health summary for today.</Text>

      <View style={dashboardStyles.metricsGrid}>
        <MetricCard icon="❤️" label="Heart Rate" value="78" unit="bpm" iconBgColor="#fee2e2" />
        <MetricCard icon="👣" label="Footsteps" value={steps.toLocaleString()} iconBgColor="#dbeafe" />
        <MetricCard icon="🔥" label="Calories" value="1,230" unit="kcal" iconBgColor="#fef9c3" />
        <MetricCard icon="⚡" label="Active Time" value="45" unit="min" iconBgColor="#d1fae5" />
      </View>

      <ChartPlaceholder
        title="Weekly Activity"
        description="This section provides a visual summary of your workout durations over the past week, helping you track consistency and progress at a glance."
        type="line"
        data={{
          labels: chartData.weekly.labels,
          datasets: [{ data: chartData.weekly.duration }]
        }}
      />

      <ChartPlaceholder
        title="Today's Steps"
        description={`You've completed ${((steps / goal) * 100).toFixed(1)}% of your daily step goal (${goal} steps). Keep moving to fill the circle!`}
        type="doughnut"
        data={{
          labels: ['Completed', 'Remaining'],
          datasets: [{ data: [steps, goal - steps > 0 ? goal - steps : 0] }]
        }}
      />
    </ScrollView>
  );
};

export default Dashboard;
