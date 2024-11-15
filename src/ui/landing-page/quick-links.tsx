import Image from "next/image";
import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className="text-center text-white">
      <Link href="/make-appointment">
        <div className="font-semibold uppercase rounded-lg bg-hmred hover:bg-red-500 shadow-md shadow-slate-400 p-2">
          make an appointment now
        </div>
      </Link>
      <Link href="/urgent-care">
        <div className="font-semibold rounded-lg bg-hmred hover:bg-red-500 shadow-md shadow-slate-400 mt-5">
          Urgent Care Home
        </div>
      </Link>
      <Link href="/primary-care">
        <div className="font-semibold text-black rounded-lg bg-hmgreen-pastel hover:bg-green-100 shadow-md shadow-slate-400 mt-5">
          Primary Care Home
        </div>
      </Link>
      <Link href="/immigration-medical-exam">
        <div className="font-semibold rounded-lg bg-hmblue hover:bg-indigo-300 shadow-md shadow-slate-400 mt-5">
          Immigration Medical Exam
        </div>
      </Link>
    </div>
  );
}
