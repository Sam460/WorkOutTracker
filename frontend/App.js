// App.js
import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import ActivityLog from './components/ActivityLog';
import Schedule from './components/Schedule';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { appStyles } from './styles/appStyles';
import { AuthProvider, AuthContext } from './context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const isDesktop = windowWidth >= 768;

const MainApp = () => {
  const { user, logout, login, register } = useContext(AuthContext); // added login & register from context
  const [activeView, setActiveView] = useState('dashboard');
  const [authView, setAuthView] = useState(null); // null | 'login' | 'register'

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

  const renderAuthOverlay = () => {
    if (!authView) return null;
    return (
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffffee', justifyContent: 'center' }}>
        {authView === 'login' ? (
          <LoginScreen onLogin={login} /> // pass login from AuthContext
        ) : (
          <RegisterScreen onRegister={register} /> // pass register from AuthContext
        )}
        <TouchableOpacity
          onPress={() => setAuthView(authView === 'login' ? 'register' : 'login')}
          style={{ alignItems: 'center', marginTop: 16 }}
        >
          <Text style={{ color: '#2d68f2' }}>
            {authView === 'login' ? "Don't have an account? Register" : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAuthView(null)} style={{ alignItems: 'center', marginTop: 8 }}>
          <Text style={{ color: '#ef4444' }}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderProfileIcon = () => (
    <TouchableOpacity
      onPress={() => {
        if (user) logout();
        else setAuthView('login');
      }}
      style={appStyles.profileIcon}
    >
      <Text style={{ color: '#1e3a8a', fontWeight: 'bold' }}>
        {user?.username?.substring(0, 2).toUpperCase() || '👤'}
      </Text>
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
          </View>
        )}

        <View style={appStyles.mainContent}>
          <Text style={appStyles.mainTitle}>
            {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
          </Text>
          {renderProfileIcon()}
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

      {renderAuthOverlay()}
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
