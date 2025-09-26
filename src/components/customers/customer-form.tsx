'use client';

import { useState } from 'react';
import { Customer } from '../../types/customer';

interface Props {
  customer: Customer | null;
  onClose: () => void;
  onSave: (customer: Customer) => void;
}

export function CustomerForm({ customer, onClose, onSave }: Props) {
  const [form, setForm] = useState<Customer>(
    customer || { id: 0, name: '', email: '', phone: '', totalOrders: 0 }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">
          {customer ? 'Edit Customer' : 'Add Customer'}
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <input
          type="number"
          name="totalOrders"
          placeholder="Total Orders"
          value={form.totalOrders}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
