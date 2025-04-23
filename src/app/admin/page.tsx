"use client";
import { useState, useMemo } from "react";
import CheckInView from "@/ui/admin/check-in-view";
import ChangeHours from "@/ui/admin/change-hours";
import ManageAdmins from "@/ui/admin/manage-admins";
import ManageCarousel from "@/ui/admin/manage-carousel";

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
      {
        name: "Manage carousel",
        key: "manage-carousel",
        component: ManageCarousel,
      },
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
      <div className="bg-slate-700 w-52 p-6 overflow-y-auto">
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
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-12 py-10">
          <h1 className="text-2xl font-bold">
            {menus.find((menu) => menu.key === expandedMenu)?.name}
          </h1>
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </div>
  );
}
