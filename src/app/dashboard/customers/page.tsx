'use client';

import { useSearch } from '@/context/SearchContext';
import { useState } from 'react';

const DUMMY_CUSTOMERS = [
  { id: 1, name: 'Ali Mohamed', email: 'ali@email.com' },
  { id: 2, name: 'Sara Ahmed', email: 'sara@email.com' },
  { id: 3, name: 'Omar Hassan', email: 'omar@email.com' },
];

export default function CustomersPage() {
  const { query } = useSearch();
  const [customers] = useState(DUMMY_CUSTOMERS);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Customers</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td className="p-2 border">{customer.id}</td>
              <td className="p-2 border">{customer.name}</td>
              <td className="p-2 border">{customer.email}</td>
            </tr>
          ))}
          {filteredCustomers.length === 0 && (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-500">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
