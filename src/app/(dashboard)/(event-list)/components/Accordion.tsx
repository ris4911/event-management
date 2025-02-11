"use client";
import { Column, columnsData } from "@/app/constants/constant";
import { ColumnHeader } from "@/components/dashboard/ColumnHeader";
import { Task } from "@/utils/types";

interface AccordionProps {
  title: Column;
  tasks: Task[];
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function Accordion({
  title,
  tasks,
  children,
  isOpen = false,
  onToggle,
}: AccordionProps) {
  const borderColor = columnsData[title]?.color || "border-color";

  return (
    <>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center"
      >
        <ColumnHeader column={title} columnTasks={tasks} />
      </button>
      {isOpen && (
        <div
          className={`pl-6 -mt-2 border-b border-current mb-2 text-${borderColor}`}
        >
          {children}
        </div>
      )}
    </>
  );
}
