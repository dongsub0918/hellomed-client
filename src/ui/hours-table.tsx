"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/external/table";
import { getLocationsInfo } from "@/apis/locations";
import { LocationInfo } from "@/lib/types/locations";
import { isAfter, isBefore, differenceInDays } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { formatDate } from "@/lib/features/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function HoursTable() {
  const [locations, setLocations] = useState<LocationInfo[]>([]);
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function fetchLocations() {
    try {
      setError(null);
      const res = await getLocationsInfo();
      setLocations(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setError(null);
    }
  }

  enum HolidayStatus {
    None,
    Upcoming,
    Ongoing,
  }

  function getHolidayStatus(holidayStart: string, holidayEnd: string) {
    if (!holidayStart || !holidayEnd) return null;

    const now = toZonedTime(new Date(), "America/New_York");
    const start = toZonedTime(new Date(holidayStart), "America/New_York");
    const end = toZonedTime(new Date(holidayEnd), "America/New_York");
    const daysUntilStart = differenceInDays(start, now);

    if (daysUntilStart > 7) {
      return HolidayStatus.None;
    } else if (daysUntilStart <= 7 && isAfter(start, now)) {
      return HolidayStatus.Upcoming;
    } else if (isBefore(start, now) && isAfter(end, now)) {
      return HolidayStatus.Ongoing;
    }
  }

  useEffect(() => {
    fetchLocations();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-6">
      {locations.map(
        ({
          code,
          title,
          address,
          holiday_start,
          holiday_end,
          holiday_message,
          mon,
          tue,
          wed,
          thu,
          fri,
          sat,
          sun,
          lunch_break,
          open,
        }) => (
          <div key={code} className="bg-white rounded-lg overflow-hidden">
            {/* Clickable bar */}
            <button
              className="bg-slate-600 text-white p-4 cursor-pointer flex justify-between items-center w-full md:text-xl lg:text-2xl"
              onClick={() =>
                code === expandedLocation
                  ? setExpandedLocation(null)
                  : setExpandedLocation(code)
              }
            >
              <h3 className="font-bold">{title}</h3>
              {expandedLocation === code ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* Expanded content */}
            <AnimatePresence initial={false}>
              {expandedLocation === code && (
                <motion.div
                  key={code}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-transparent"
                >
                  {!open ? (
                    <div className="text-center p-4 bg-red-100 text-red-800">
                      <p className="font-bold text-lg">Closed</p>
                      <p>Coming soon</p>
                    </div>
                  ) : (
                    <>
                      {/* Table is displayed unless holiday is ongoing */}
                      {getHolidayStatus(holiday_start, holiday_end) !==
                        HolidayStatus.Ongoing && (
                        <Table className="font-semibold mt-2 md:text-lg">
                          <TableBody>
                            {[
                              { day: "Mon", hours: mon },
                              { day: "Tue", hours: tue },
                              { day: "Wed", hours: wed },
                              { day: "Thu", hours: thu },
                              { day: "Fri", hours: fri },
                              { day: "Sat", hours: sat },
                              { day: "Sun", hours: sun },
                              { day: "Lunch Break", hours: lunch_break },
                            ].map(({ day, hours }) => (
                              <TableRow key={day}>
                                <TableCell className="w-1/2 text-left">
                                  {day}
                                </TableCell>
                                <TableCell className="w-1/2 text-right">
                                  {hours}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}

                      {/* Upcoming holiday message is displayed with the table */}
                      {getHolidayStatus(holiday_start, holiday_end) ===
                        HolidayStatus.Upcoming && (
                        <div className="text-center rounded-lg mt-4 p-4 bg-red-100 text-red-800">
                          <p className="font-bold text-lg">Upcoming Holiday</p>
                          <p>
                            {formatDate(holiday_start, "MMM dd yyyy")} -{" "}
                            {formatDate(holiday_end, "MMM dd yyyy")}
                          </p>
                          <p className="mt-4">{holiday_message}</p>
                        </div>
                      )}

                      {/* Ongoing holiday message is displayed without the table */}
                      {getHolidayStatus(holiday_start, holiday_end) ===
                        HolidayStatus.Ongoing && (
                        <div className="text-center p-4 bg-red-100 text-red-800">
                          <p className="font-bold text-lg">Closed</p>
                          <p>
                            {formatDate(holiday_start, "MMM dd yyyy")} -{" "}
                            {formatDate(holiday_end, "MMM dd yyyy")}
                          </p>
                          <p className="mt-4">{holiday_message}</p>
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      )}
    </div>
  );
}
