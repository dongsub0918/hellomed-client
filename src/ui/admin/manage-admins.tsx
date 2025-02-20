"use client";
import { getAdmins, postAdmin, deleteAdmin } from "@/apis/auth";
import { useState, useEffect, FormEvent } from "react";
import { Admin } from "@/lib/types/auth";
import { Label } from "@/ui/external/label";
import { Textarea } from "@/ui/external/textarea";
import { Button } from "@/ui/external/button";

export default function ManageAdmins() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [adminsAreStale, setAdminsAreStale] = useState(true);
  const [adminToAdd, setAdminToAdd] = useState<string>("");
  const [adminToDelete, setAdminToDelete] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  async function fetchAdmins() {
    try {
      setError(null);
      const res = await getAdmins();
      setAdmins(res);
    } catch (error) {
      setError(error as string);
    }
  }

  async function handleDeleteClick() {
    try {
      await deleteAdmin(adminToDelete);
      setAdminToDelete("");
      setAdminsAreStale(true);
    } catch (error: any) {
      window.alert(error.response.data.error);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      await postAdmin(adminToAdd);
      setAdminToAdd("");
      setAdminsAreStale(true);
    } catch (error: any) {
      window.alert(error.response.data.error);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAdminToAdd(e.target.value);
  }

  useEffect(() => {
    if (adminsAreStale) {
      fetchAdmins();
      setAdminsAreStale(false);
    }
  }, [adminsAreStale]);

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <>
      {/* Notes on admin accounts */}
      <ul className="w-full border-4 border-black p-4 mt-6">
        <li className="text-lg text-center font-bold text-red-600 pb-5">
          Notes on admin accounts
        </li>
        <li>
          - Please note that only emails with @hello-med.com domains can be used
          as admin accounts.
        </li>
        <li>
          - Admin accounts must be able to sign in using Google credentials.
        </li>
      </ul>

      {/* Manage admins */}
      <div className="flex w-full mt-10 h-8/12 border-2 border-black">
        {/* Reserved Admins */}
        <div className="flex flex-col items-center w-1/2 border-r border-black">
          <span className="bg-slate-200 py-2 w-full text-center font-bold">
            Reserved admins
          </span>
          <ul className="w-full border-t border-black p-4 overflow-y-auto space-y-2">
            {admins.map((admin) => (
              <li
                key={admin.email}
                className="text-center hover:bg-slate-100"
                onClick={() => setAdminToDelete(admin.email)}
              >
                {admin.email}
              </li>
            ))}
          </ul>
        </div>

        {/* Add / remove admins */}
        <div className="flex flex-col items-center w-1/2">
          <span className="bg-slate-200 py-2 w-full text-center font-bold">
            Remove / add Admins
          </span>
          <div className="w-full h-full border-t border-black">
            <div className="h-1/2 border-b border-black p-4">
              <div className="text-lg font-semibold">
                Select an admin email from the left
              </div>
              {adminToDelete && (
                <div className="flex flex-col justify-between py-10 h-full">
                  <div>Selected admin to delete:</div>
                  <div className="text-center">
                    <span className="text-lg text-center font-bold">
                      {adminToDelete}
                    </span>
                  </div>
                  <Button onClick={handleDeleteClick}>Delete from Admin</Button>
                </div>
              )}
            </div>
            <div className="p-4 h-1/2">
              <Label htmlFor="email" className="text-lg font-semibold">
                Email to add to admin
              </Label>
              <form onSubmit={handleSubmit} className="space-y-4 w-full h-full">
                <div className="flex flex-col h-full pt-10 space-y-2">
                  <Textarea
                    name="email"
                    placeholder="Enter new admin email"
                    value={adminToAdd}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" disabled={adminToAdd === ""}>
                    Add to Admin
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
