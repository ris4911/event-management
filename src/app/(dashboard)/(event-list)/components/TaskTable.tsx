import { TableRow } from "@/app/(dashboard)/(event-list)/components/TableRow";
import { Task } from "@/utils/types";

interface TaskTableProps {
  tasks: Task[];
}

export function TaskTable({ tasks }: TaskTableProps) {
  return (
    <div className="scroll-table-container">
      <table className="w-full bg-white">
        <thead className="bg-blue-F4F9FF text-body-3 text-black-161616 border-b border-border-color">
          <tr>
            <th colSpan={2} className="p-2 text-center">
              Task Name
            </th>
            <th className="p-2 text-center">Note</th>
            <th className="p-2 text-center">Estimate</th>
            <th className="p-2 text-center">Department</th>
            <th colSpan={2} className="p-2 text-start">
              Assigned Users
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TableRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
