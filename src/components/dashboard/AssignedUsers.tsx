import userIcon from "@/../public/assets/images/test-user.png";
import Image from "next/image";

interface AssignedUsersProps {
  users: string[];
  maxVisible?: number;
}

export function AssignedUsers({ users, maxVisible = 4 }: AssignedUsersProps) {
  const assignedUsersToShow = users.slice(0, maxVisible);
  const remainingUsersCount =
    users.length > maxVisible ? users.length - maxVisible : 0;

  return (
    <div className="flex pl-4">
      {assignedUsersToShow.map((user, index) => (
        <div key={index} className="-ml-2">
          <Image
            src={userIcon.src}
            width={24}
            height={24}
            alt={user}
            title={user}
            className="rounded-full h-6 w-6"
          />
        </div>
      ))}
      {remainingUsersCount > 0 && (
        <div className="-ml-2 flex items-center justify-center rounded-full bg-gray-200 h-6 w-6 text-xs text-gray-500">
          +{remainingUsersCount}
        </div>
      )}
    </div>
  );
}
