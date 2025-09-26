"use client";

import { Star } from "lucide-react";

export default function CustomerReview() {
  const reviews = [
    { label: "Excellent", value: 80, color: "bg-green-500" },
    { label: "Good", value: 70, color: "bg-blue-500" },
    { label: "Average", value: 50, color: "bg-yellow-500" },
    { label: "Poor", value: 20, color: "bg-red-500" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Customer Review</h3>
        <span className="flex items-center text-yellow-500">
          <Star className="h-5 w-5 fill-yellow-500" /> 
          <span className="ml-1 text-gray-800 font-bold">4.0</span>
          <span className="ml-1 text-sm text-gray-500">out of 5</span>
        </span>
      </div>

      <div className="space-y-3">
        {reviews.map((r, i) => (
          <div key={i}>
            <p className="text-sm text-gray-600 mb-1">{r.label}</p>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full ${r.color}`}
                style={{ width: `${r.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
