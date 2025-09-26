export interface DashboardStats {
  totalCustomers: number;
  totalOrders: number;
  totalSales: number;
  growthRate: number;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface TaskItem {
  id: string;
  title: string;
  status: 'completed' | 'pending';
  time: string;
}