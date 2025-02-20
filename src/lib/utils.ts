import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, toZonedTime } from "date-fns-tz";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string, resultFormat: string) => {
  if (!dateString) return "";

  const parsedDate = new Date(dateString);
  if (isNaN(parsedDate.getTime())) return "";

  const zonedDate = toZonedTime(new Date(dateString), "America/New_York");
  return format(zonedDate, resultFormat, {
    timeZone: "America/New_York",
  });
};
