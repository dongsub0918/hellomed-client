import Image from "next/image";
import Link from "next/link";

export default function QuickLinks() {
  return (
    <>
      <div className="text-center">
        <p>Not feeling good?</p>
        <div className="font-semibold uppercase rounded-lg bg-indigo-200 2xl:hover:bg-indigo-100 shadow-md shadow-slate-400">
          <Link href="/make-appointment"> make an appointment now</Link>
        </div>
        <div className="font-semibold rounded-lg bg-red-200 2xl:hover:bg-red-100 shadow-md shadow-slate-400 mt-5">
          <Link href="/urgent-care"> Urgent Care Home</Link>
        </div>
        <div className="font-semibold rounded-lg bg-green-200 2xl:hover:bg-green-100 shadow-md shadow-slate-400 mt-5">
          <Link href="/primary-care"> Primary Care Home </Link>
        </div>
      </div>
    </>
  );
}
