"use client";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { User, Users, Package } from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/",
    icon: "/assets/icons/icon-dashboard.svg",
  },
  {
    name: "User",
    href: "#",
    icon: <User size={18} />,
    subItems: [
      { name: "User List", href: "#" },
      { name: "Add User", href: "#" },
    ],
  },
  {
    name: "Customer",
    href: "#",
    icon: <Users size={18} />,
    subItems: [
      { name: "Customer List", href: "#" },
      { name: "Add Customer", href: "#" },
    ],
  },
  {
    name: "Job",
    href: "#",
    icon: "/assets/icons/icon-job.svg",
    subItems: [
      { name: "Job List", href: "#" },
      { name: "Add Job", href: "#" },
    ],
  },
  {
    name: "Contract",
    href: "#",
    icon: "/assets/icons/icon-contract.svg",
    subItems: [
      { name: "Contract List", href: "#" },
      { name: "Add Contract", href: "#" },
    ],
  },
  {
    name: "Vendor",
    href: "#",
    icon: "/assets/icons/icon-vendor.svg",
    subItems: [
      { name: "Vendor List", href: "#" },
      { name: "Add Vendor", href: "#" },
    ],
  },
  {
    name: "Inventory",
    href: "#",
    icon: <Package size={18} />,
    subItems: [
      { name: "Inventory List", href: "#" },
      { name: "Add Inventory", href: "#" },
    ],
  },
  {
    name: "Report",
    href: "#",
    icon: "/assets/icons/icon-report.svg",
    subItems: [
      { name: "Report List", href: "#" },
      { name: "Generate Report", href: "#" },
    ],
  },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>("User");
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <aside className="h-full w-64 bg-white p-4 border-r border-border-color">
      <p className="uppercase text-body-3 font-medium pb-2">Menu</p>
      <nav className="text-body-3 font-medium">
        <ul>
          {links.map((link, index) => (
            <MenuItem
              key={`nav-${index}`}
              name={link.name}
              href={link.href}
              icon={link.icon}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              subItems={link.subItems}
              openMenu={openMenu}
              toggleMenu={toggleMenu}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
