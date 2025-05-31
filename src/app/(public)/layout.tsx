import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  );
}
