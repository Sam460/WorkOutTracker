// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import ActivityLog from './components/ActivityLog';
import Schedule from './components/Schedule';
import { appStyles } from './styles/appStyles';

const windowWidth = Dimensions.get('window').width;
const isDesktop = windowWidth >= 768;

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

  const navLink = (viewName, icon, label) => (
    <TouchableOpacity
      style={[appStyles.navLink, activeView === viewName && appStyles.navLinkActive]}
      onPress={() => setActiveView(viewName)}
    >
      <Text style={isDesktop ? appStyles.navLinkIcon : appStyles.navText}>{icon}</Text>
      <Text style={[appStyles.navLinkText, activeView === viewName && appStyles.navLinkTextActive]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <View style={appStyles.container}>
        {isDesktop && (
          <View style={appStyles.sidebar}>
            <View style={appStyles.sidebarHeader}>
              <Text style={appStyles.logoText}>FitTrack</Text>
              <Text style={appStyles.tagline}>Your Health Companion</Text>
            </View>
            <View style={appStyles.navLinks}>
              {navLink('dashboard', '📊', 'Dashboard')}
              {navLink('reports', '📈', 'Reports')}
              {navLink('activity', '🏃', 'Activity Log')}
              {navLink('schedule', '🗓️', 'Schedule')}
            </View>
            <View style={appStyles.profileContainer}>
              <View style={appStyles.avatarPlaceholder}>
                <Text style={appStyles.avatarText}>AB</Text>
              </View>
              <View style={appStyles.profileInfo}>
                <Text style={appStyles.profileName}>Alex Biswas</Text>
                <Text style={appStyles.profileStatus}>Premium User</Text>
              </View>
            </View>
          </View>
        )}

        <View style={appStyles.mainContent}>
          <Text style={appStyles.mainTitle}>{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</Text>
          {renderActiveView()}
        </View>

        {!isDesktop && (
          <View style={appStyles.bottomNav}>
            {navLink('dashboard', '📊', 'Dashboard')}
            {navLink('reports', '📈', 'Reports')}
            {navLink('activity', '🏃', 'Activity Log')}
            {navLink('schedule', '🗓️', 'Schedule')}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
