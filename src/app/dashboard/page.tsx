"use client";

import { motion } from "framer-motion";
import StatsCards from "@/components/dashboard/stats-cards";
import { AreaChartComponent } from "@/components/charts/area-chart";
import { PieChartComponent } from "@/components/charts/pie-chart";
import { LineChartComponent } from "@/components/charts/line-chart";
import LastTasks from "@/components/dashboard/last-tasks";
import CustomerReview from "@/components/dashboard/customer-review";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here’s an overview of your store performance.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Area Chart */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Goal Completion
          </h3>
          <AreaChartComponent />
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Order Status
          </h3>
          <PieChartComponent />
        </motion.div>
      </div>

      {/* Line Chart + Customer Review + Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Visitor Performance
          </h3>
          <LineChartComponent />
        </motion.div>

        {/* Customer Review */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <CustomerReview />
        </motion.div>
      </div>

      {/* Last Month Tasks */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <LastTasks />
      </motion.div>
    </div>
  );
}
