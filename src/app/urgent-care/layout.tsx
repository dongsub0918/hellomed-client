import "@/ui/globals.css";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

export default function UrgentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar theme="urgent" />

      {/* Main Content */}
      <div className="mt-[67px] md:mt-[162px]">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
