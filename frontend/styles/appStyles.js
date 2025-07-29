// styles/appStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Light neutral background
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f2f5',
  },
  sidebar: {
    width: 250, // Fixed width for sidebar on larger screens
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    ...(windowWidth < 768 && {
      width: 'auto', // Auto width for smaller screens (e.g., mobile portrait)
      flexDirection: 'column', // Stack vertically
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
    }),
  },
  logoContainer: {
    marginBottom: 30,
    ...(windowWidth < 768 && { marginBottom: 10 }),
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb', // Blue-600 equivalent
  },
  tagline: {
    fontSize: 12,
    color: '#6b7280', // Gray-500 equivalent
  },
  navLinks: {
    flexGrow: 1,
    ...(windowWidth < 768 && { flexDirection: 'row', justifyContent: 'space-around', flexGrow: 0 }),
  },
  navLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  navLinkActive: {
    backgroundColor: '#3b82f6', // Blue-500 equivalent
  },
  navLinkText: {
    fontSize: 16,
    color: '#4b5563', // Gray-600 equivalent
  },
  navLinkTextActive: {
    color: '#ffffff',
    fontWeight: '600',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    ...(windowWidth < 768 && { display: 'none' }), // Hide profile on small screens for simplicity
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e2e8f0', // Gray-200 equivalent
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#4a5568', // Gray-700 equivalent
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileInfo: {},
  profileName: {
    fontWeight: '600',
    fontSize: 14,
  },
  profileStatus: {
    fontSize: 12,
    color: '#6b7280', // Gray-500 equivalent
  },
  mainContent: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightblue', // TEMPORARY: Add this to see if main content area is visible
    ...(windowWidth < 768 && { padding: 10 }),
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: 'lightgreen', // TEMPORARY: Add this to see if ScrollView is visible
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1f2937', // Gray-800 equivalent
  },
  subHeading: {
    fontSize: 16,
    color: '#4b5563', // Gray-600 equivalent
    marginBottom: 25,
  },
});
