const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "HELLOMED Central ",
      url: "https://hello-med.com",
      telephone: "+1-734-210-1122",
      address: {
        "@type": "PostalAddress",
        streetAddress: "623 E Liberty St",
        addressLocality: "Ann Arbor",
        addressRegion: "Michigan",
        postalCode: "48104",
        addressCountry: "US",
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://calendar.google.com/calendar/u/0/appointments/AcZssZ1ShT3cr2KENkFggsD0CDqXNIooOQLuYa5o7Xc=",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    },
    {
      "@type": "MedicalBusiness",
      name: "HELLOMED North",
      url: "https://hello-med.com",
      telephone: "+1-734-210-1122",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2731 Plymouth Rd",
        addressLocality: "Ann Arbor",
        addressRegion: "Michigan",
        postalCode: "48105",
        addressCountry: "US",
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://calendar.google.com/calendar/u/0/appointments/AcZssZ3YAF2k-13KqDQerAO87OY9fx46q7g-8XC_OnM=",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    },
  ],
};

export default structuredData;
