'use client';

import { useState } from 'react';
import { Customer } from '../../types/customer';
import { CustomerForm } from './customer-form';

interface Props {
  customers: Customer[];
  onAdd: (customer: Customer) => void;
  onUpdate: (customer: Customer) => void;
  onDelete: (id: number) => void;
}

export function CustomerTable({ customers, onAdd, onUpdate, onDelete }: Props) {
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Customer List</h2>
        <button
          onClick={() => { setEditingCustomer(null); setShowForm(true); }}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add Customer
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Total Orders</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="p-2 border">{c.id}</td>
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.email}</td>
              <td className="p-2 border">{c.phone}</td>
              <td className="p-2 border">{c.totalOrders}</td>
              <td className="p-2 border">
                <button
                  onClick={() => { setEditingCustomer(c); setShowForm(true); }}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(c.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <CustomerForm
          customer={editingCustomer}
          onClose={() => setShowForm(false)}
          onSave={(data) => {
            if (editingCustomer) {
              onUpdate(data);
            } else {
              onAdd(data);
            }
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}
