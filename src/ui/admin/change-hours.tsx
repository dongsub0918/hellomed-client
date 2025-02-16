"use client";
import { getAdmins } from "@/apis/auth";
import { useState, useEffect } from "react";
import { Admin } from "@/lib/types/auth";

export default function ChangeHours() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  useEffect(() => {
    async function fetchAdmins() {
      try {
        const res = await getAdmins();
        setAdmins(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAdmins();
  }, []);
  return (
    <div>
      {admins.map((admin) => (
        <div>{admin.email}</div>
      ))}
    </div>
  );
}
