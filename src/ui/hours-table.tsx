"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/external/table";

const locations = [
  { name: "Central", address: "625 E Liberty St, Ann Arbor" },
  { name: "North", address: "2731 Plymouth Rd, Ann Arbor" },
  { name: "Meijer's", address: "Coming Soon" },
];

const hours = [
  {
    day: "Mon",
    central: "9:10 am - 6:00 pm",
    north: "9:10 am - 6:00 pm",
    meijers: "",
  },
  { day: "Tue", central: "9:10 am - 6:00 pm", north: "Closed", meijers: "" },
  { day: "Wed", central: "Closed", north: "9:10 am - 6:00 pm", meijers: "" },
  { day: "Thu", central: "9:10 am - 6:00 pm", north: "Closed", meijers: "" },
  {
    day: "Fri",
    central: "9:10 am - 5:00 pm",
    north: "9:10 am - 6:00 pm",
    meijers: "",
  },
  { day: "Sat", central: "Closed", north: "10:10 am - 4:00 pm", meijers: "" },
  { day: "Sun", central: "Closed", north: "Closed", meijers: "" },
  {
    day: "Lunch Break",
    central: "1:30 pm - 2:00 pm",
    north: "1:30 pm - 2:00 pm",
    meijers: "",
  },
];

export function MobileHoursTable() {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  const toggleLocation = (location: string) => {
    setExpandedLocation(expandedLocation === location ? null : location);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((location) => (
          <div
            key={location.name}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="bg-slate-500 text-white p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleLocation(location.name)}
            >
              <div>
                <h3 className="text-lg font-bold">{location.name}</h3>
                <p className="text-sm">{location.address}</p>
              </div>
              {expandedLocation === location.name ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </div>
            {expandedLocation === location.name && (
              <div className="p-4">
                <table className="w-full">
                  <tbody>
                    {hours.map((row) => (
                      <tr key={row.day} className="border-b last:border-b-0">
                        <td className="py-2 pr-4 font-medium">{row.day}</td>
                        <td className="py-2 text-right">
                          {row[
                            location.name.toLowerCase() as keyof typeof row
                          ] || "Closed"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DesktopHoursTable() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6 bg-slate-100 font-bold text-lg">
              Day
            </TableHead>
            {locations.map((location) => (
              <TableHead
                key={location.name}
                className="w-1/4 bg-slate-500 text-white"
              >
                <div className="text-center">
                  <p className="text-lg font-bold">{location.name}</p>
                  <p className="text-sm">{location.address}</p>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {hours.map((row) => (
            <TableRow key={row.day} className="hover:bg-slate-50">
              <TableCell className="font-semibold text-slate-700">
                {row.day}
              </TableCell>
              <TableCell className="text-center">
                {row.central || "Closed"}
              </TableCell>
              <TableCell className="text-center">
                {row.north || "Closed"}
              </TableCell>
              <TableCell className="text-center">
                {row.meijers || "Closed"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
