import { Trip, DashboardMetric } from './types';

export const DEMO_TRIPS: Trip[] = [
  { id: '1', origin: 'New York', destination: 'Boston', date: '2026-10-20', time: '09:00', type: 'passenger', status: 'available', seats: 3 },
  { id: '2', origin: 'Chicago', destination: 'Detroit', date: '2026-10-21', time: '14:30', type: 'parcel', status: 'available', weight: '2kg' },
  { id: '3', origin: 'Austin', destination: 'Dallas', date: '2026-10-22', time: '18:00', type: 'passenger', status: 'confirmed', seats: 1 },
  { id: '4', origin: 'Seattle', destination: 'Portland', date: '2026-10-23', time: '10:00', type: 'parcel', status: 'available', weight: '5kg' },
];

export const DASHBOARD_METRICS: DashboardMetric[] = [
  { label: 'Available Trips', value: 124, change: '+12%', trend: 'up' },
  { label: 'Ride Requests', value: 45, change: '+5%', trend: 'up' },
  { label: 'Parcel Requests', value: 32, change: '-2%', trend: 'down' },
  { label: 'Potential Matches', value: 18, change: '+8%', trend: 'up' },
];
