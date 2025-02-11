import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { JSX, useEffect } from "react";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  name: string;
  href: string;
  icon: string | JSX.Element;
  activeLink: string | null;
  setActiveLink: (name: string) => void;
  subItems?: { name: string; href: string }[];
  openMenu: string | null;
  toggleMenu: (menuName: string) => void;
}

const MenuItem = ({
  name,
  href,
  icon,
  activeLink,
  setActiveLink,
  subItems,
  openMenu,
  toggleMenu,
}: MenuItemProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === href) {
      setActiveLink(name);
    }
    if (subItems) {
      subItems.forEach((subItem) => {
        if (pathname === subItem.href) {
          setActiveLink(subItem.name);
          toggleMenu(name);
        }
      });
    }
  }, [pathname, href, name, subItems, setActiveLink, toggleMenu]);

  return (
    <li>
      <button
        className={`flex items-center justify-between w-full px-2 py-2 hover:text-black ${activeLink === name ? "text-black" : ""}`}
        onClick={() => {
          if (subItems) {
            toggleMenu(name);
          }
          setActiveLink(name);
        }}
      >
        <div className="flex items-center gap-3">
          {typeof icon === "string" ? (
            <Image src={icon} alt={name} width={16} height={16} />
          ) : (
            icon
          )}
          {href === "#" ? (
            <span>{name}</span>
          ) : (
            <Link
              href={href}
              className={activeLink === name ? "font-semibold" : ""}
            >
              {name}
            </Link>
          )}
        </div>
        {subItems && (
          <span>
            {openMenu === name ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
        )}
      </button>
      {subItems && openMenu === name && (
        <ul className="pl-4">
          {subItems.map((subItem, subIndex) => (
            <li key={`subnav-${subIndex}`}>
              <Link
                href={subItem.href}
                className={`block px-3 py-2 hover:text-black ${activeLink === subItem.name ? "font-semibold" : ""}`}
                onClick={() => setActiveLink(subItem.name)}
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
