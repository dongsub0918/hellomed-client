import clsx from "clsx";
import Link from "next/link";

export const DesktopMenu = ({
  setActive,
  children,
}: {
  setActive: any;
  children: any;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="px-2 pt-2 pb-4 text-lg md:flex text-white md:p-0"
    >
      {children}
    </nav>
  );
};

export const DesktopMenuItem = ({
  setActive,
  active,
  item,
}: {
  setActive: any;
  active: any;
  item: any;
}) => {
  return (
    <div className="relative" onMouseEnter={() => setActive(item.name)}>
      <div className="mt-1 block px-2 py-1 font-semibold rounded md:mt-0 md:ml-2">
        {item.name}
      </div>
      {active === item.name && (
        <div className="absolute right-0 py-2 w-48 bg-white rounded-lg border-black border-2">
          {item.dropdown.map((subItem: any) => (
            <Link
              href={subItem.href}
              className="block px-4 py-2 text-center text-black hover:bg-slate-200"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const MobileMenu = ({
  setActive,
  navOpen,
  children,
}: {
  setActive: any;
  navOpen: Boolean;
  children: any;
}) => {
  return (
    <nav
      className={clsx("px-2 pt-2 pb-4 text-lg text-white md:flex md:p-0", {
        block: navOpen,
        hidden: !navOpen,
      })}
    >
      {children}
    </nav>
  );
};

export const MobileMenuItem = ({
  setActive,
  active,
  item,
}: {
  setActive: any;
  active: any;
  item: any;
}) => {
  return (
    <div onClick={() => setActive(active === item.name ? null : item.name)}>
      <div className="mt-1 block px-2 py-1 font-semibold rounded">
        {item.name}
      </div>
      {active === item.name && (
        <div className="w-full py-2 border-y-2">
          {item.dropdown.map((subItem: any) => (
            <Link href={subItem.href} className="block text-center py-2">
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
