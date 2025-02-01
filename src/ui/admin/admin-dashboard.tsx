"use client";
import { useState } from "react";
import CheckInView from "@/ui/admin/check-in-view";
import ChangeHours from "@/ui/admin/change-hours";

export default function AdminDashboard() {
  const [expandedMenu, setExpandedMenu] = useState<string>("check-in-view");
  const menus = [
    {
      name: "View check-ins",
      key: "check-in-view",
      component: <CheckInView />,
    },
    { name: "Add admins", key: "add-admins", component: <CheckInView /> },
    { name: "Change hours", key: "change-hours", component: <ChangeHours /> },
    {
      name: "Update carousel",
      key: "update-carousel",
      component: <CheckInView />,
    },
  ];
  return (
    <div className="flex min-h-[calc(100svh-76px)]">
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
      {menus.find((menu) => menu.key === expandedMenu)?.component}
    </div>
  );
}
