"use client";
import { useState, useMemo } from "react";
import CheckInView from "@/ui/admin/check-in-view";
import ChangeHours from "@/ui/admin/change-hours";
import ManageAdmins from "@/ui/admin/manage-admins";

export default function AdminDashboard() {
  const [expandedMenu, setExpandedMenu] = useState<string>("check-in-view");
  const menus = useMemo(
    () => [
      {
        name: "View check-ins",
        key: "check-in-view",
        component: CheckInView,
      },
      { name: "Change hours", key: "change-hours", component: ChangeHours },
      // {
      //   name: "Update carousel",
      //   key: "update-carousel",
      //   component: ChangeHours,
      // },
      {
        name: "Manage admins",
        key: "manage-admins",
        component: ManageAdmins,
      },
    ],
    []
  );

  const ActiveComponent = menus.find(
    (menu) => menu.key === expandedMenu
  )?.component;
  return (
    <div className="flex h-[calc(100svh-76px)]">
      {/* sidebar */}
      <div className="bg-slate-700 w-52 p-6">
        <ul className="space-y-4">
          {menus.map((menu) => (
            <li key={menu.key}>
              <button
                onClick={() => {
                  if (menu.key !== expandedMenu) {
                    setExpandedMenu(menu.key);
                  }
                }}
              >
                <span className="text-white underline hover:font-semibold">
                  {menu.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* main content */}
      <div className="container px-4 py-8">
        <h1 className="text-2xl font-bold">
          {menus.find((menu) => menu.key === expandedMenu)?.name}
        </h1>
        {/* {menus.find((menu) => menu.key === expandedMenu)?.component} */}
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}
