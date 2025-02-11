import { Task } from "@/utils/types";
import { AssignedUsers } from "@/components/dashboard/AssignedUsers";
import { departmentStyles } from "@/app/constants/constant";
import Image from "next/image";

interface CardProps {
  task: Task;
}

export function Card({ task }: CardProps) {
  const departmentStyle = departmentStyles[task.department] || {
    text: "text-gray-500",
    bg: "bg-gray-100",
  };

  return (
    <>
      <div className="flex flex-col items-start justify-between border-b border-border-color">
        <label
          className={`${departmentStyle.text} ${departmentStyle.bg} ml-2 text-body-3 p-1`}
        >
          {task.department}
        </label>
        <h2 className="text-body-2 pt-4 pb-2 text-black-161616">
          {task.title}
        </h2>
        <p className="text-body-3 text-gray-898989 line-clamp-3 pb-4">
          {task.description}
        </p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <AssignedUsers users={task.assignedUsers} maxVisible={4} />
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-3">
          <span className="inline-block">
            <Image
              src="/assets/icons/icon-calender.svg"
              alt="Icon Calender"
              height={16}
              width={16}
            />
          </span>
          {task.endDate}
        </p>
      </div>
    </>
  );
}
