"use client";

import React, { useState } from "react";
import { mockData } from "@/utils/mockData";
import { Card } from "@/app/(dashboard)/kanban/components/Card";
import { Task } from "@/utils/types";
import { ColumnHeader } from "@/components/dashboard/ColumnHeader";
import { columnsData, Column } from "@/app/constants/constant";

interface KanbanProps {
  searchQuery: string;
}
export function Kanban({ searchQuery }: KanbanProps) {
  const [tasks, setTasks] = useState<Task[]>(mockData);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (column: Column) => {
    if (!draggedTask) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggedTask.id ? { ...task, status: column } : task,
      ),
    );
    setDraggedTask(null);
  };

  const handleTaskDrop = (destinationIndex: number, column: Column) => {
    if (!draggedTask) return;

    const columnTasks = tasks.filter((task) => task.status === column);
    const sourceIndex = columnTasks.findIndex(
      (task) => task.id === draggedTask.id,
    );

    const reorderedTasks = [...columnTasks];
    reorderedTasks.splice(sourceIndex, 1);
    reorderedTasks.splice(destinationIndex, 0, draggedTask);

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.status === column
          ? reorderedTasks.find((t) => t.id === task.id) || task
          : task,
      ),
    );

    setDraggedTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return (
      task.title.toLowerCase().includes(lowercasedQuery) ||
      task.description.toLowerCase().includes(lowercasedQuery) ||
      task.department.toLowerCase().includes(lowercasedQuery)
    );
  });
  return (
    <div className="grid grid-cols-4 gap-2">
      {Object.keys(columnsData).map((column) => {
        const columnTasks = filteredTasks.filter(
          (task) => task.status === column,
        );

        return (
          <div
            key={column}
            className="min-h-[200px]"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column as Column)}
          >
            <ColumnHeader column={column as Column} columnTasks={columnTasks} />
            {columnTasks.map((task, index) => (
              <div
                key={task.id}
                draggable
                onDragStart={() => handleDragStart(task)}
                onDrop={() => handleTaskDrop(index, column as Column)}
                className="mb-4 rounded-lg bg-white py-4 px-[10px] border border-border-color cursor-move"
              >
                <Card task={task} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
