// styles/activityLogStyles.js
import { StyleSheet } from 'react-native';

export const activityLogStyles = StyleSheet.create({
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9fafb', // Gray-50 equivalent
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb', // Gray-200 equivalent
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280', // Gray-500 equivalent
    textTransform: 'uppercase',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tableCell: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
    textAlign: 'center',
  },
  tableCellBold: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
    textAlign: 'center',
  },
  tableCellSmall: {
    fontSize: 13,
    color: '#6b7280',
    flex: 1,
    textAlign: 'center',
  },
});
