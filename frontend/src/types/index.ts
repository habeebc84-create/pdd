export interface Trip {
  id: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  type: 'passenger' | 'parcel';
  status: 'available' | 'confirmed' | 'completed';
  seats?: number;
  weight?: string;
}

export interface DashboardMetric {
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down';
}
