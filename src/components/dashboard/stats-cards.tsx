"use client";

import { motion } from "framer-motion";
import { Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Customers",
    value: "232,000",
    icon: <Users className="h-8 w-8 text-green-500" />,
    color: "bg-green-100",
  },
  {
    title: "Total Orders",
    value: "32,000",
    icon: <ShoppingBag className="h-8 w-8 text-red-500" />,
    color: "bg-red-100",
  },
  {
    title: "Total Sales",
    value: "$332,000",
    icon: <DollarSign className="h-8 w-8 text-blue-500" />,
    color: "bg-blue-100",
  },
  {
    title: "Earn Growth",
    value: "+50%",
    icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
    color: "bg-orange-100",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center gap-4"
        >
          <div className={`p-4 rounded-full ${stat.color}`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-gray-500 text-sm">{stat.title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
