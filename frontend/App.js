// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import ActivityLog from './components/ActivityLog';
import Schedule from './components/Schedule';
import { appStyles } from './styles/appStyles';

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');

  // Function to render the active component based on the state
  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'reports':
        return <Reports />;
      case 'activity':
        return <ActivityLog />;
      case 'schedule':
        return <Schedule />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <View style={appStyles.container}>
        {/* Top Header */}
        <View style={appStyles.header}>
          <Text style={appStyles.headerTitle}>FitTrack</Text>
          <Text style={appStyles.headerSubtitle}>Your Health Companion</Text>
        </View>

        {/* Main Content Area - This is where the active view is rendered */}
        <View style={appStyles.mainContent}>
          {renderActiveView()}
        </View>

        {/* Bottom Navigation Bar */}
        <View style={appStyles.bottomNav}>
          <TouchableOpacity
            style={appStyles.navButton}
            onPress={() => setActiveView('dashboard')}
          >
            <Text style={[appStyles.navText, activeView === 'dashboard' && appStyles.navTextActive]}>📊 Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appStyles.navButton}
            onPress={() => setActiveView('reports')}
          >
            <Text style={[appStyles.navText, activeView === 'reports' && appStyles.navTextActive]}>📈 Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appStyles.navButton}
            onPress={() => setActiveView('activity')}
          >
            <Text style={[appStyles.navText, activeView === 'activity' && appStyles.navTextActive]}>🏃 Activity Log</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appStyles.navButton}
            onPress={() => setActiveView('schedule')}
          >
            <Text style={[appStyles.navText, activeView === 'schedule' && appStyles.navTextActive]}>🗓️ Schedule</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
