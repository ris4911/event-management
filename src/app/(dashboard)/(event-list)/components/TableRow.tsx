import { AssignedUsers } from "@/components/dashboard/AssignedUsers";
import { Task } from "@/utils/types";
import { MoreVertical } from "lucide-react";
import { departmentStyles } from "@/app/constants/constant";
import Image from "next/image";

interface TableRowProps {
  task: Task;
}

export function TableRow({ task }: TableRowProps) {
  const isOverdue = new Date(task.endDate) < new Date();

  const departmentStyle = departmentStyles[task.department] || {
    text: "text-gray-500",
    bg: "bg-gray-100",
  };

  const formattedStartDate = new Date(task.startDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    },
  );
  const formattedEndDate = new Date(task.endDate).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <tr className="border-b hover:bg-gray-50 text-body-3 transition-colors">
      <td className="pl-4 py-3">
        <input
          type="checkbox"
          className="form-checkbox h-[14px] w-[14px] text-gray-CACACA"
        />
      </td>
      <td className="px-2 py-3 font-medium text-black-161616 break-words">
        {task.title}
      </td>
      <td className="px-2 py-3 text-sm text-gray-898989 font-normal break-words">
        {task.description}
      </td>
      <td className="px-2 py-3 text-sm">
        <span
          className={isOverdue ? "text-red font-semibold" : "text-gray-898989"}
          title={isOverdue ? `Overdue date: ${formattedEndDate}` : ""}
        >
          {formattedStartDate} - {formattedEndDate}
        </span>
      </td>
      <td className="px-2 py-3">
        <span
          className={`${departmentStyle.text} ${departmentStyle.bg} p-1 font-medium rounded`}
        >
          {task.department}
        </span>
      </td>
      <td className="px-2 py-3">
        <div className="flex items-center space-x-2">
          <AssignedUsers users={task.assignedUsers} maxVisible={3} />
        </div>
      </td>
      <td className="px-2 py-3">
        <div className="flex space-x-4 items-center justify-end">
          <Image
            src="/assets/icons/icon-edit.svg"
            alt="Iocn Edit"
            height={16}
            width={16}
          />
          <MoreVertical
            size={18}
            className="text-black-161616 hover:text-gray-700 cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
}
