export interface Order {
  id: number;
  customer: string;
  date: string;
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
}

export type OrdersResponse = Order[];
