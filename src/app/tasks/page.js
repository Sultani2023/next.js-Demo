"use client";
import { useState } from "react";
import { tasks as initialTasks } from "@/app/data/mockData";

export default function TasksPage() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(initialTasks);
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "completed").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    todo: tasks.filter((t) => t.status === "todo").length,
  };

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "completed" ? "todo" : "completed",
            }
          : task,
      ),
    );
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 animate-fadeInUp">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Tasks</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage and track your team's tasks
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
          <p className="text-2xl font-bold">{stats.total}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total Tasks
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
          <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
          <p className="text-2xl font-bold text-yellow-600">
            {stats.inProgress}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            In Progress
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
          <p className="text-2xl font-bold text-gray-600">{stats.todo}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">To Do</p>
        </div>
      </div>
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-800">
        {["all", "todo", "in-progress", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 capitalize transition-colors ${
              filter === status
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            {status.replace("-", " ")}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 cursor-pointer"
                checked={task.status === "completed"}
                onChange={() => toggleTaskStatus(task.id)}
              />
              <div className="flex-1">
                <h3
                  className={`font-semibold ${task.status === "completed" ? "line-through text-gray-500" : ""}`}
                >
                  {task.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {task.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                  <span>📅 Due: {task.dueDate}</span>
                  <span>👤 {task.assignee}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      task.priority === "high"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
