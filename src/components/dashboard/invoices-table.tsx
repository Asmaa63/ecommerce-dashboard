'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Invoice } from '@/types/invoice';

const initialInvoices: Invoice[] = [
  { id: 1, customer: 'John Doe', date: '2025-09-01', amount: 500, status: 'Paid' },
  { id: 2, customer: 'Jane Smith', date: '2025-09-03', amount: 1200, status: 'Unpaid' },
  { id: 3, customer: 'Michael Johnson', date: '2025-09-05', amount: 750, status: 'Overdue' },
];

export default function InvoicesTable() {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [showModal, setShowModal] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  const [formData, setFormData] = useState<Invoice>({
    id: 0,
    customer: '',
    date: '',
    amount: 0,
    status: 'Unpaid',
  });

  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Unpaid':
        return 'bg-yellow-100 text-yellow-700';
      case 'Overdue':
        return 'bg-red-100 text-red-700';
      default:
        return '';
    }
  };

  const handleAdd = () => {
    setEditingInvoice(null);
    setFormData({ id: Date.now(), customer: '', date: '', amount: 0, status: 'Unpaid' });
    setShowModal(true);
  };

  const handleEdit = (invoice: Invoice) => {
    setEditingInvoice(invoice);
    setFormData(invoice);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setInvoices(invoices.filter((i) => i.id !== id));
  };

  const handleDownload = (invoice: Invoice) => {
    alert(`Downloading Invoice #${invoice.id} for ${invoice.customer}`);
  };

  const handleSubmit = () => {
    if (editingInvoice) {
      setInvoices(invoices.map((i) => (i.id === editingInvoice.id ? formData : i)));
    } else {
      setInvoices([...invoices, formData]);
    }
    setShowModal(false);
  };

  return (
    <div>
      {/* Add Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
        >
          + Add Invoice
        </button>
      </div>

      {/* Invoices Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <AnimatePresence>
              {invoices.map((invoice) => (
                <motion.tr
                  key={invoice.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 text-sm text-gray-900">{invoice.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{invoice.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{invoice.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">${invoice.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(invoice)}
                      className="px-3 py-1 text-xs rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(invoice.id)}
                      className="px-3 py-1 text-xs rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleDownload(invoice)}
                      className="px-3 py-1 text-xs rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
                    >
                      Download
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg w-96 p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-semibold mb-4">
                {editingInvoice ? 'Edit Invoice' : 'Add New Invoice'}
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Customer Name"
                  value={formData.customer}
                  onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as Invoice['status'] })}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>

              <div className="flex justify-end mt-6 space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingInvoice ? 'Update' : 'Add'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
