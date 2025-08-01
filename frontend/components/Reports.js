// components/Reports.js
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import ChartPlaceholder from './ChartPlaceholder';
import { reportsStyles } from '../styles/reportsStyles';
import { appStyles } from '../styles/appStyles';
import { commonStyles } from '../styles/commonStyles';
import { chartData } from '../constants/data';

const Reports = () => {
  const [reportPeriod, setReportPeriod] = useState('weekly');

  return (
    <ScrollView contentContainerStyle={appStyles.contentContainer}>
      <Text style={appStyles.headerTitle}>Reports</Text>
      <Text style={appStyles.headerSubtitle}>Analyze your progress over time with detailed charts.</Text>

      <View style={commonStyles.card}>
        <View style={reportsStyles.reportHeader}>
          <View>
            <Text style={commonStyles.cardTitle}>Workout Duration</Text>
            <Text style={commonStyles.cardDescription}>Track the total minutes you've exercised over different periods.</Text>
          </View>
          <View style={reportsStyles.buttonGroup}>
            <TouchableOpacity
              style={[reportsStyles.filterButton, reportPeriod === 'weekly' && reportsStyles.filterButtonActive]}
              onPress={() => setReportPeriod('weekly')}
            >
              <Text style={[reportsStyles.filterButtonText, reportPeriod === 'weekly' && reportsStyles.filterButtonTextActive]}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[reportsStyles.filterButton, reportPeriod === 'monthly' && reportsStyles.filterButtonActive]}
              onPress={() => setReportPeriod('monthly')}
            >
              <Text style={[reportsStyles.filterButtonText, reportPeriod === 'monthly' && reportsStyles.filterButtonTextActive]}>Monthly</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ChartPlaceholder
          title="Workout Duration Trend"
          description=""
          type="line"
          data={{
            labels: chartData[reportPeriod].labels,
            datasets: [{ data: chartData[reportPeriod].duration }]
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Reports;
