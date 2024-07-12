import Image from "next/image";
import PlusSign from "@/ui/urgent-care/plus-sign";

export default function HoursTable() {
  return (
    <>
      {/* Table for hours */}
      <table className="w-full table-auto border-separate border-spacing-2 md:border-spacing-4 rounded-xl text-center">
        <thead className="md:text-2xl text-white">
          <tr>
            <th></th>
            <th className="p-2 rounded-xl bg-slate-500">
              <p>HELLOMED Central</p>
              <p>(625 E Liberty St, Ann Arbor)</p>
            </th>
            <th className="p-2 rounded-xl bg-slate-500">
              <p>HELLOMED North</p>
              <p>(2731 Plymouth Rd, Ann Arbor)</p>
            </th>
          </tr>
        </thead>
        <tbody className="md:text-xl">
          <tr>
            <td>Mon</td>
            <td>9:10 am - 6:00 pm</td>
            <td>9:10 am - 6:00 pm</td>
          </tr>
          <tr>
            <td>Tue</td>
            <td>Closed</td>
            <td>9:10 am - 6:00 pm</td>
          </tr>
          <tr>
            <td>Wed</td>
            <td>9:10 am - 6:00 pm</td>
            <td>9:10 am - 6:00 pm</td>
          </tr>
          <tr>
            <td>Thu</td>
            <td>Closed</td>
            <td>9:10 am - 6:00 pm</td>
          </tr>
          <tr>
            <td>Fri</td>
            <td>9:10 am - 3:30 pm</td>
            <td>9:10 am - 6:00 pm</td>
          </tr>
          <tr>
            <td>Sat</td>
            <td>Closed</td>
            <td>10:10 am - 4:00 pm</td>
          </tr>
          <tr>
            <td>Sun</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
