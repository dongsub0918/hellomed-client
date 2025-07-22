const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "HELLOMED Urgent Care",
  url: "https://hello-med.com",
  telephone: "+1-734-210-1122",
  email: "JWHS@hello-med.com",
  image: "https://hello-med.com/landing-img.webp",
  description: `HELLOMED Urgent Care is a walk-in clinic that provides urgent care services to the community. We are located in Ann Arbor, Michigan and serve the surrounding areas.`,
  containsPlace: [
    {
      "@type": "MedicalClinic",
      name: "HELLOMED North",
      image: "https://hello-med.com/landing-img.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2731 Plymouth Rd",
        addressLocality: "Ann Arbor",
        addressRegion: "Michigan",
        postalCode: "48105",
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
    {
      "@type": "MedicalClinic",
      name: "HELLOMED Central",
      image: "https://hello-med.com/landing-img.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "623 E Liberty St",
        addressLocality: "Ann Arbor",
        addressRegion: "Michigan",
        postalCode: "48104",
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
      "@type": "MedicalClinic",
      name: "HELLOMED South (inside Meijer)",
      image: "https://hello-med.com/landing-img.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3145 Ann Arbor-Saline Rd Space B",
        addressLocality: "Ann Arbor",
        addressRegion: "Michigan",
        postalCode: "48103",
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://calendar.google.com/calendar/u/0/appointments/AcZssZ2R7wwx1LOxXF4t5LsMP16McAcJxCW3AX3pI4Y=",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    },
    {
      "@type": "MedicalClinic",
      name: "HELLOMED Telemedicine",
      image: "https://hello-med.com/telemedicine-location.jpg",
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://calendar.google.com/calendar/u/0/appointments/AcZssZ1x0Q-g6WSa_xtiFrXkbd5fX9M-JQxk5aoiUGk=",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    },
  ],
};

export default homeStructuredData;
