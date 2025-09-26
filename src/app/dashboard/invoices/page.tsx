'use client';

import InvoicesTable from '@/components/dashboard/invoices-table';

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Invoices</h1>
      <InvoicesTable />
    </div>
  );
}
