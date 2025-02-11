"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    name: "Event List",
    href: "/",
    tabName: "event",
    icon: "/assets/icons/icon-event-list.svg",
  },
  {
    name: "Kanban",
    href: "/kanban",
    tabName: "kanban",
    icon: "/assets/icons/icon-kanban.svg",
  },
];

export function TabSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex gap-6 border-b px-2 border-border-color">
      {tabs.map(({ name, href, tabName, icon }) => {
        const isActive = pathname === href;

        return (
          <Link key={tabName} href={href}>
            <button
              className={`flex items-center pb-3 font-medium gap-2 transition-all ${
                isActive
                  ? "border-b-2 border-black text-black"
                  : "text-gray-898989"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Image
                alt={name}
                src={icon}
                width={16}
                height={16}
                className={`transition-all ${
                  isActive
                    ? "filter invert-0"
                    : "filter  grayscale brightness-75"
                }`}
              />
              {name}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
