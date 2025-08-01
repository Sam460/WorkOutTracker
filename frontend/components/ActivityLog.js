// components/ActivityLog.js
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { activityLogStyles } from '../styles/activityLogStyles';
import { appStyles } from '../styles/appStyles';
import { commonStyles } from '../styles/commonStyles';
import { initialActivityLogData } from '../constants/data';

const ActivityLog = () => {
  const [activityLogData, setActivityLogData] = useState(initialActivityLogData);
  const [showLogForm, setShowLogForm] = useState(false);
  const [newActivityType, setNewActivityType] = useState('');
  const [newActivityDuration, setNewActivityDuration] = useState('');
  const [newActivityCalories, setNewActivityCalories] = useState('');

  const handleLogActivity = () => {
    if (!newActivityType || !newActivityDuration || !newActivityCalories) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (isNaN(newActivityDuration) || isNaN(newActivityCalories)) {
      Alert.alert('Invalid Input', 'Duration and Calories must be numeric values.');
      return;
    }

    const newActivity = {
      type: newActivityType.trim(),
      duration: parseInt(newActivityDuration),
      calories: parseInt(newActivityCalories),
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
    };

    setActivityLogData([newActivity, ...activityLogData]);

    setNewActivityType('');
    setNewActivityDuration('');
    setNewActivityCalories('');
    setShowLogForm(false);

    Alert.alert('Success', 'Activity logged successfully!');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={appStyles.contentContainer}>
        {/* Toggle Form Button */}
        <TouchableOpacity
          style={commonStyles.primaryButton}
          onPress={() => setShowLogForm(!showLogForm)}
        >
          <Text style={commonStyles.primaryButtonText}>
            {showLogForm ? 'Hide Form' : 'Log New Activity'}
          </Text>
        </TouchableOpacity>

        {/* Form */}
        {showLogForm && (
          <View style={commonStyles.card}>
            <Text style={commonStyles.cardTitle}>Log a New Workout</Text>

            <View style={commonStyles.formGroup}>
              <Text style={commonStyles.formLabel}>Workout Type</Text>
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
              style={commonStyles.primaryButton}
              onPress={handleLogActivity}
            >
              <Text style={commonStyles.primaryButtonText}>Save Activity</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Table Display */}
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
    </KeyboardAvoidingView>
  );
};

export default ActivityLog;
