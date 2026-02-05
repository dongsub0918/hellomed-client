import GoogleAnalytics from "@/components/GoogleAnalytics";
import PublicLayoutShell from "@/ui/public-layout-shell";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GoogleAnalytics />
      <PublicLayoutShell>{children}</PublicLayoutShell>
    </>
  );
}
