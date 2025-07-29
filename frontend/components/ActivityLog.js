// components/ActivityLog.js
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { activityLogStyles } from '../styles/activityLogStyles';
import { appStyles } from '../styles/appStyles';
import { commonStyles } from '../styles/commonStyles';
import { initialActivityLogData } from '../constants/data';

const ActivityLog = () => {
  const [activityLogData, setActivityLogData] = useState(initialActivityLogData);
  const [showLogForm, setShowLogForm] = useState(false);
  const [newActivityType, setNewActivityType] = useState('Running');
  const [newActivityDuration, setNewActivityDuration] = useState('');
  const [newActivityCalories, setNewActivityCalories] = useState('');

  const handleLogActivity = () => {
    if (newActivityDuration && newActivityCalories) {
      const newActivity = {
        type: newActivityType,
        duration: parseInt(newActivityDuration),
        calories: parseInt(newActivityCalories),
        date: new Date().toISOString().split('T')[0], // Get current date in YYYY-MM-DD format
      };
      setActivityLogData([newActivity, ...activityLogData]); // Add new activity to the top
      setNewActivityDuration('');
      setNewActivityCalories('');
      setShowLogForm(false);
    }
  };

  return (
    <ScrollView style={appStyles.contentContainer}>
      <Text style={appStyles.heading}>Activity Log</Text>
      <Text style={appStyles.subHeading}>Keep a record of all your workouts. Log a new one to keep your history up to date.</Text>

      <TouchableOpacity
        style={commonStyles.primaryButton}
        onPress={() => setShowLogForm(!showLogForm)}
      >
        <Text style={commonStyles.primaryButtonText}>{showLogForm ? 'Hide Form' : 'Log New Activity'}</Text>
      </TouchableOpacity>

      {showLogForm && (
        <View style={commonStyles.card}>
          <Text style={commonStyles.cardTitle}>Log a New Workout</Text>
          <View style={commonStyles.formGroup}>
            <Text style={commonStyles.formLabel}>Workout Type</Text>
            {/* In a real app, use Picker or custom dropdown for workout type.
                For simplicity here, it's a TextInput. */}
            <TextInput
              style={commonStyles.formInput}
              value={newActivityType}
              onChangeText={setNewActivityType}
              placeholder="e.g., Running"
            />
          </View>
          <View style={commonStyles.formGroup}>
            <Text style={commonStyles.formLabel}>Duration (minutes)</Text>
            <TextInput
              style={commonStyles.formInput}
              keyboardType="numeric"
              value={newActivityDuration}
              onChangeText={setNewActivityDuration}
              placeholder="e.g., 30"
            />
          </View>
          <View style={commonStyles.formGroup}>
            <Text style={commonStyles.formLabel}>Calories Burned</Text>
            <TextInput
              style={commonStyles.formInput}
              keyboardType="numeric"
              value={newActivityCalories}
              onChangeText={setNewActivityCalories}
              placeholder="e.g., 350"
            />
          </View>
          <TouchableOpacity
            style={commonStyles.secondaryButton}
            onPress={handleLogActivity}
          >
            <Text style={commonStyles.secondaryButtonText}>Save Activity</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={commonStyles.card}>
        <View style={activityLogStyles.tableHeader}>
          <Text style={activityLogStyles.tableHeaderText}>Type</Text>
          <Text style={activityLogStyles.tableHeaderText}>Duration</Text>
          <Text style={activityLogStyles.tableHeaderText}>Calories</Text>
          <Text style={activityLogStyles.tableHeaderText}>Date</Text>
        </View>
        {activityLogData.map((item, index) => (
          <View key={index} style={activityLogStyles.tableRow}>
            <Text style={activityLogStyles.tableCellBold}>{item.type}</Text>
            <Text style={activityLogStyles.tableCell}>{item.duration} min</Text>
            <Text style={activityLogStyles.tableCell}>{item.calories} kcal</Text>
            <Text style={activityLogStyles.tableCellSmall}>{item.date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ActivityLog;
