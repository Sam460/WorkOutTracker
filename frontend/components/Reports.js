// components/Reports.js
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { reportsStyles } from '../styles/reportsStyles';
import { appStyles } from '../styles/appStyles';
import { commonStyles } from '../styles/commonStyles';
import { chartData } from '../constants/data';

const screenWidth = Dimensions.get('window').width;

const Reports = () => {
  const [reportPeriod, setReportPeriod] = useState('weekly');
  const currentData = chartData[reportPeriod];

  return (
    <ScrollView contentContainerStyle={appStyles.contentContainer}>
      <View style={commonStyles.card}>
        {/* Header Section */}
        <View style={reportsStyles.reportHeader}>
          <View>
            <Text style={commonStyles.cardTitle}>Workout Duration</Text>
            <Text style={commonStyles.cardDescription}>
              Track your total minutes exercised over different periods.
            </Text>
          </View>

          {/* Toggle Buttons */}
          <View style={reportsStyles.buttonGroup}>
            <TouchableOpacity
              style={[
                reportsStyles.filterButton,
                reportPeriod === 'weekly' && reportsStyles.filterButtonActive,
              ]}
              onPress={() => setReportPeriod('weekly')}
            >
              <Text
                style={[
                  reportsStyles.filterButtonText,
                  reportPeriod === 'weekly' && reportsStyles.filterButtonTextActive,
                ]}
              >
                Weekly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                reportsStyles.filterButton,
                reportPeriod === 'monthly' && reportsStyles.filterButtonActive,
              ]}
              onPress={() => setReportPeriod('monthly')}
            >
              <Text
                style={[
                  reportsStyles.filterButtonText,
                  reportPeriod === 'monthly' && reportsStyles.filterButtonTextActive,
                ]}
              >
                Monthly
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Chart Section */}
        <LineChart
          data={{
            labels: currentData.labels,
            datasets: [
              {
                data: currentData.duration,
                strokeWidth: 2,
                color: () => '#3b82f6',
              },
            ],
            legend: ['Workout Duration (min)'],
          }}
          width={screenWidth - 40}
          height={240}
          yAxisSuffix="m"
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(31, 41, 55, ${opacity})`,
            labelColor: () => '#6b7280',
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
    </ScrollView>
  );
};

export default Reports;
