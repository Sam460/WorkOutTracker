// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from './styles/appStyles';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import ActivityLog from './components/ActivityLog';
import Schedule from './components/Schedule';

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');

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
        {/* Sidebar Navigation (or Top Bar on small screens) */}
        <View style={appStyles.sidebar}>
          <View style={appStyles.logoContainer}>
            <Text style={appStyles.logoText}>FitTrack</Text>
            <Text style={appStyles.tagline}>Your Health Companion</Text>
          </View>
          <View style={appStyles.navLinks}>
            <TouchableOpacity
              style={[appStyles.navLink, activeView === 'dashboard' && appStyles.navLinkActive]}
              onPress={() => setActiveView('dashboard')}
            >
              <Text style={[appStyles.navLinkText, activeView === 'dashboard' && appStyles.navLinkTextActive]}>📊 Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[appStyles.navLink, activeView === 'reports' && appStyles.navLinkActive]}
              onPress={() => setActiveView('reports')}
            >
              <Text style={[appStyles.navLinkText, activeView === 'reports' && appStyles.navLinkTextActive]}>📈 Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[appStyles.navLink, activeView === 'activity' && appStyles.navLinkActive]}
              onPress={() => setActiveView('activity')}
            >
              <Text style={[appStyles.navLinkText, activeView === 'activity' && appStyles.navLinkTextActive]}>🏃 Activity Log</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[appStyles.navLink, activeView === 'schedule' && appStyles.navLinkActive]}
              onPress={() => setActiveView('schedule')}
            >
              <Text style={[appStyles.navLinkText, activeView === 'schedule' && appStyles.navLinkTextActive]}>🗓️ Schedule</Text>
            </TouchableOpacity>
          </View>
          <View style={appStyles.profileContainer}>
            <View style={appStyles.avatarPlaceholder}>
              <Text style={appStyles.avatarText}>AV</Text>
            </View>
            <View style={appStyles.profileInfo}>
              <Text style={appStyles.profileName}>Alex Doe</Text>
              <Text style={appStyles.profileStatus}>Premium User</Text>
            </View>
          </View>
        </View>

        {/* Main Content Area */}
        <View style={appStyles.mainContent}>
          {renderActiveView()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
