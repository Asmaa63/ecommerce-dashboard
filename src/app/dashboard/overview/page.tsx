'use client';

import { motion } from 'framer-motion';
import { AreaChartComponent } from '@/components/charts/area-chart';
import { LineChartComponent } from '@/components/charts/line-chart';
import { PieChartComponent } from '@/components/charts/pie-chart';

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Overview</h1>
        <p className="text-gray-600">
          A quick insight into your store performance and key stats.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Revenue', value: '$450,000', color: 'green' },
          { title: 'Customers', value: '12,340', color: 'blue' },
          { title: 'Sales', value: '9,876', color: 'purple' },
          { title: 'Invoices', value: '1,245', color: 'orange' },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <p className="text-sm text-gray-500">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <div className={`mt-2 h-1 w-20 bg-${stat.color}-500 rounded-full`}></div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Growth</h3>
          <LineChartComponent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Sales</h3>
          <PieChartComponent />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
        <AreaChartComponent />
      </motion.div>
    </div>
  );
}
