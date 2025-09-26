'use client';

import OrdersTable from '@/components/dashboard/orders-table';

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Orders</h1>
      <OrdersTable />
    </div>
  );
}
