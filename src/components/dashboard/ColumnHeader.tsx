import React from "react";
import { columnsData, Column } from "@/app/constants/constant";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { Task } from "@/utils/types";

interface ColumnHeaderProps {
  column: Column;
  columnTasks: Task[];
}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  column,
  columnTasks,
}) => {
  const columnInfo = columnsData[column];

  return (
    <div
      className={clsx(
        "flex justify-between items-center w-full mb-2 py-2 px-[10px] bg-white border-b border-current rounded-t-lg",
        `text-${columnInfo.color}`,
      )}
    >
      <div className="flex items-center gap-[10px]">
        <label
          className={clsx(
            "rounded-full h-2 w-2 bg-current",
            `text-${columnInfo.color}`,
          )}
        ></label>
        <h2 className="text-body-3 text-black-161616">{column}</h2>
        <p>
          <span
            className={clsx(
              columnInfo.badgeBgColor,
              `text-${columnInfo.color}`,
              "p-1 text-[10px] font-medium rounded",
            )}
          >
            {columnTasks.length}
          </span>
        </p>
      </div>
      <div className="flex">
        <span className="p-1 rounded-full bg-gray-F2F4F7">
          <Plus size={8} className="text-black-161616" />
        </span>
      </div>
    </div>
  );
};
