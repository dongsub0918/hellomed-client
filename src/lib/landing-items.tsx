import { MobileHoursTable, DesktopHoursTable } from "@/ui/hours-table";

export const landingItems = {
  about: {
    name: "About",
    content: (
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Accessibility, Convenience, and Quality Care.
        </h1>
        <h2 className="mt-5">
          We are here to serve the urgent healthcare needs of the Ann Arbor
          community and have been doing so since 2014.
        </h2>
      </div>
    ),
  },
  hours: {
    name: "Hours",
    content: (
      <>
        <div className="md:hidden">
          <MobileHoursTable />
        </div>
        <div className="hidden md:block">
          <DesktopHoursTable />
        </div>
      </>
    ),
  },
};
