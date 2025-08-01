// styles/appStyles.js
import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 375;

export const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },

  container: {
    flex: 1,
    flexDirection: width >= 768 ? 'row' : 'column',
  },

  header: {
    paddingVertical: 20 * scale,
    paddingHorizontal: 16 * scale,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  headerTitle: {
    fontSize: 24 * scale,
    fontWeight: 'bold',
    color: '#2563eb',
  },

  headerSubtitle: {
    fontSize: 12 * scale,
    color: '#6b7280',
    marginTop: 4,
  },

  mainContent: {
    flex: 1,
    paddingHorizontal: 12 * scale,
    paddingTop: 10 * scale,
    paddingBottom: width < 768 ? 70 : 20,
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  navButton: {
    padding: 10 * scale,
  },

  navText: {
    fontSize: 12 * scale,
    color: '#9ca3af',
  },

  navTextActive: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },

  navLink: {
    alignItems: 'center',
    marginVertical: 8,
  },

  navLinkActive: {
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
  },

  navLinkIcon: {
    fontSize: 22 * scale,
    marginBottom: 2,
  },

  navLinkText: {
    fontSize: 14 * scale,
    color: '#6b7280',
  },

  navLinkTextActive: {
    color: '#2563eb',
    fontWeight: 'bold',
  },

  contentContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },

  sidebar: {
    width: 240,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },

  sidebarHeader: {
    marginBottom: 24,
  },

  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d68f2',
  },

  tagline: {
    fontSize: 12,
    color: '#6b7280',
  },

  navLinks: {
    flex: 1,
  },

  profileContainer: {
    marginTop: 40,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#c7d2fe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: {
    color: '#1e3a8a',
    fontWeight: 'bold',
  },

  profileInfo: {
    flexShrink: 1,
  },

  profileName: {
    fontWeight: 'bold',
    color: '#111827',
  },

  profileStatus: {
    fontSize: 12,
    color: '#6b7280',
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#111827',
  }
});
