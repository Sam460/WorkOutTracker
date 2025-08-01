// components/Schedule.js
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { scheduleStyles } from '../styles/scheduleStyles';
import { appStyles } from '../styles/appStyles';
import { commonStyles } from '../styles/commonStyles';
import { initialScheduleData } from '../constants/data';

const Schedule = () => {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getTimeInMinutes = (timeStr) => {
    const [hour, rest] = timeStr.split(':');
    const minutes = parseInt(rest);
    const isPM = timeStr.toLowerCase().includes('pm');
    const hourInt = parseInt(hour) % 12 + (isPM ? 12 : 0);
    return hourInt * 60 + minutes;
  };

  // Get the nearest upcoming activity by time
  const getUpcomingId = () => {
    const now = new Date();
    const nowMins = now.getHours() * 60 + now.getMinutes();
    let closest = null;
    let minDiff = Infinity;
    initialScheduleData.forEach((item) => {
      const itemMins = getTimeInMinutes(item.time);
      const diff = itemMins - nowMins;
      if (diff >= 0 && diff < minDiff) {
        minDiff = diff;
        closest = item.id;
      }
    });
    return closest;
  };

  const upcomingId = getUpcomingId();

  return (
    <ScrollView contentContainerStyle={appStyles.contentContainer}>
      <View style={commonStyles.card}>
        {initialScheduleData.map((item) => {
          const isUpcoming = item.id === upcomingId;
          const isDone = completed.includes(item.id);

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => toggleComplete(item.id)}
              style={[
                scheduleStyles.scheduleItem,
                isUpcoming && { backgroundColor: '#eef6ff' },
                isDone && { opacity: 0.5 },
              ]}
            >
              <Text style={[scheduleStyles.scheduleActivity, isDone && { textDecorationLine: 'line-through' }]}>
                {item.activity}
              </Text>
              <Text style={scheduleStyles.scheduleDetails}>{item.details}</Text>
              <Text style={scheduleStyles.scheduleTime}>
                {item.time} {isUpcoming ? '⏰' : isDone ? '✅' : ''}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Schedule;
