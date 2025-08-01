// styles/appStyles.js
import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Light gray background
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb', // Blue-600 equivalent
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6b7280', // Gray-500 equivalent
    marginTop: 2,
  },
  mainContent: {
    flex: 1,
    padding: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 3,
  },
  navButton: {
    padding: 10,
  },
  navText: {
    fontSize: 12,
    color: '#9ca3af', // Gray-400
  },
  navTextActive: {
    color: '#3b82f6', // Blue-500
    fontWeight: 'bold',
  },
  contentContainer: {
    flexGrow: 1,
  },
});
