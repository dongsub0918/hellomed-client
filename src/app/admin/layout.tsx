import { getServerSession } from "next-auth";
import { SignOutButton } from "@/ui/admin/auth-components";
import Image from "next/image";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <main>
      <header className="w-full bg-sky-500 flex justify-between text-white">
        <h1 className="flex text-3xl font-extrabold items-center ml-4">
          <Link href="/admin">Admin page</Link>
        </h1>
        <div className="flex items-center space-x-4 px-4 py-2 bg-slate-700">
          <span className="font-bold">{session?.user?.email}</span>
          <Image
            className="rounded-full"
            src={session?.user?.image!}
            width={60}
            height={60}
            priority
            alt="Google session image"
          />
          <div className="font-bold bg-slate-500 hover:bg-slate-400 p-2 rounded-lg">
            <SignOutButton />
          </div>
        </div>
      </header>
      {children}
    </main>
  );
}
