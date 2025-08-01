// styles/activityLogStyles.js
import { StyleSheet } from 'react-native';

export const activityLogStyles = StyleSheet.create({
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 5,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#6b7280',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  tableCell: {
    fontSize: 14,
    color: '#4b5563',
    flex: 1,
    textAlign: 'center',
  },
  tableCellBold: {
    fontSize: 14,
    color: '#1f2937',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableCellSmall: {
    fontSize: 12,
    color: '#9ca3af',
    flex: 1,
    textAlign: 'center',
  },
});
