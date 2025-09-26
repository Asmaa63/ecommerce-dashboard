"use client";

export default function LastTasks() {
  const tasks = [
    { title: "New Category Add", time: "Last week" },
    { title: "Smart Phone Buy with back-part", time: "3d ago" },
    { title: "Purchase report", time: "4d ago" },
    { title: "New Product Add", time: "5d ago" },
    { title: "Product tag Add", time: "5d ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Last Month Task</h3>
        <button className="text-sm text-blue-500 hover:underline">See all</button>
      </div>
      <ul className="space-y-3">
        {tasks.map((task, i) => (
          <li key={i} className="flex justify-between text-sm text-gray-700">
            <span>{task.title}</span>
            <span className="text-gray-400">{task.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
