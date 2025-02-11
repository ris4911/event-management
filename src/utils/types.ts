export interface Task {
  id: string;
  title: string;
  description: string;
  department: string;
  status: "To Do" | "In Progress" | "In Review" | "Done";
  startDate: string;
  endDate: string;
  assignedUsers: string[];
}
