import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, toZonedTime } from "date-fns-tz";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (
  dateString: string | undefined,
  resultFormat: string,
  timezone: "UTC" | "EST" = "EST"
) => {
  if (!dateString) return "";

  const parsedDate = new Date(dateString);
  if (isNaN(parsedDate.getTime())) return "";

  let timeZone = timezone === "UTC" ? "UTC" : "America/New_York";

  const zonedDate = toZonedTime(new Date(dateString), timeZone);
  return format(zonedDate, resultFormat, { timeZone });
};
