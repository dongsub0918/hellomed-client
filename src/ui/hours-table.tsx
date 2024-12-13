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
  { name: "HELLOMED_Central", address: "625 E Liberty St, Ann Arbor" },
  { name: "HELLOMED_North", address: "2731 Plymouth Rd, Ann Arbor" },
  { name: "HELLOMED_South", address: "Coming Soon" },
];

const hours = [
  {
    day: "Mon",
    HELLOMED_Central: "9:10 am - 6:00 pm",
    HELLOMED_North: "9:10 am - 6:00 pm",
    HELLOMED_South: "",
  },
  {
    day: "Tue",
    HELLOMED_Central: "9:10 am - 6:00 pm",
    HELLOMED_North: "Closed",
    HELLOMED_South: "",
  },
  {
    day: "Wed",
    HELLOMED_Central: "Closed",
    HELLOMED_North: "9:10 am - 6:00 pm",
    HELLOMED_South: "",
  },
  {
    day: "Thu",
    HELLOMED_Central: "9:10 am - 6:00 pm",
    HELLOMED_North: "Closed",
    HELLOMED_South: "",
  },
  {
    day: "Fri",
    HELLOMED_Central: "9:10 am - 5:00 pm",
    HELLOMED_North: "9:10 am - 6:00 pm",
    HELLOMED_South: "",
  },
  {
    day: "Sat",
    HELLOMED_Central: "Closed",
    HELLOMED_North: "10:10 am - 4:00 pm",
    HELLOMED_South: "",
  },
  {
    day: "Sun",
    HELLOMED_Central: "Closed",
    HELLOMED_North: "Closed",
    HELLOMED_South: "",
  },
  {
    day: "Lunch Break",
    HELLOMED_Central: "1:30 pm - 2:00 pm",
    HELLOMED_North: "1:30 pm - 2:00 pm",
    HELLOMED_South: "",
  },
];

export function MobileHoursTable() {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  const toggleLocation = (location: string) => {
    setExpandedLocation(expandedLocation === location ? null : location);
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {locations.map((location) => (
        <div
          key={location.name}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div
            className="bg-slate-600 text-white p-4 cursor-pointer flex justify-between items-center"
            onClick={() => toggleLocation(location.name)}
          >
            <div>
              <h3 className="text-lg font-bold">
                {location.name.split("_").join(" ")}
              </h3>
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
                        {row[location.name as keyof typeof row] || "Closed"}
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
  );
}

export function DesktopHoursTable() {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/12 bg-slate-100 font-bold text-2xl text-center">
              Day
            </TableHead>
            {locations.map((location) => (
              <TableHead
                key={location.name}
                className="w-3/12 bg-slate-500 text-white"
              >
                <div className="text-center">
                  <p className="font-bold text-2xl">
                    {location.name.split("_").join(" ")}
                  </p>
                  <p className="text-xl">{location.address}</p>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {hours.map((row) => (
            <TableRow
              key={row.day}
              className="hover:bg-slate-50 md:text-xl xl:text-2xl text-center"
            >
              <TableCell className="font-semibold text-slate-700">
                {row.day}
              </TableCell>
              <TableCell>{row.HELLOMED_Central || "Closed"}</TableCell>
              <TableCell>{row.HELLOMED_North || "Closed"}</TableCell>
              <TableCell>{row.HELLOMED_South || "Closed"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
