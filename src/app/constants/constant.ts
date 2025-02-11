export const columnsData = {
  "To Do": {
    color: "black-161616",
    badgeBgColor: "bg-gray-F2F4F7",
  },
  "In Progress": {
    color: "orange",
    badgeBgColor: "bg-light-orange",
  },
  "In Review": {
    color: "blue",
    badgeBgColor: "bg-light-blue",
  },
  Done: {
    color: "green-15A31B",
    badgeBgColor: "bg-light-green",
  },
} as const;

export type Column = keyof typeof columnsData;

interface DepartmentStyles {
  text: string;
  bg: string;
}
export const departmentStyles: Record<string, DepartmentStyles> = {
  Production: { text: "text-orange", bg: "bg-light-orange" },
  Labor: { text: "text-red", bg: "bg-light-red" },
  Logistics: { text: "text-purple", bg: "bg-light-purple" },
  Procurement: { text: "text-blue-label", bg: "bg-light-blue" },
  Travel: { text: "text-blue-3538CD", bg: "bg-blue-EEF4FF" },
  Creative: { text: "text-green-15A31B", bg: "bg-light-green" },
  Accounts: { text: "text-black-161616", bg: "bg-gray-F2F4F7" },
};
