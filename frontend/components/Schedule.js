// components/Schedule.js
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { scheduleStyles } from '../styles/scheduleStyles';
import { appStyles } from '../styles/appStyles';
import { commonStyles } from '../styles/commonStyles';
import { initialScheduleData } from '../constants/data';

const Schedule = () => {
  return (
    <ScrollView contentContainerStyle={appStyles.contentContainer}>
      <Text style={appStyles.headerTitle}>Your Schedule</Text>
      <Text style={appStyles.headerSubtitle}>Here are your upcoming activities.</Text>
      <View style={commonStyles.card}>
        {initialScheduleData.map((item, index) => (
          <View key={index} style={scheduleStyles.scheduleItem}>
            <Text style={scheduleStyles.scheduleActivity}>{item.activity}</Text>
            <Text style={scheduleStyles.scheduleDetails}>{item.details}</Text>
            <Text style={scheduleStyles.scheduleTime}>{item.time}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Schedule;
