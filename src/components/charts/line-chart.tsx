'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 400, orders: 240 },
  { month: 'Feb', users: 300, orders: 139 },
  { month: 'Mar', users: 200, orders: 980 },
  { month: 'Apr', users: 278, orders: 390 },
  { month: 'May', users: 189, orders: 480 },
  { month: 'Jun', users: 239, orders: 380 },
  { month: 'Jul', users: 349, orders: 430 },
];

export function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#10b981" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="orders" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  );
}
