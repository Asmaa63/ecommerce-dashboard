export interface Invoice {
  id: number;
  customer: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Unpaid' | 'Overdue';
}
