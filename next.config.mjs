/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "hellomed-image.s3.amazonaws.com",
      },
    ],
  },
  reactStrictMode: false,
  async redirects() {
    return [
      // Mapped redirects based on available pages
      { source: "/home", destination: "/", permanent: false },
      {
        source: "/uti",
        destination: "/urgent-care/acute-conditions/uti",
        permanent: false,
      },
      {
        source: "/post/come-prepared-for-your-next-physical-examination",
        destination: "/primary-care/physical-exam/annual-physical",
        permanent: false,
      },
      {
        source: "/physical-exam-primary-care",
        destination: "/primary-care/physical-exam/annual-physical",
        permanent: false,
      },
      {
        source: "/book-online",
        destination: "/make-appointment",
        permanent: false,
      },
      {
        source: "/strep-sinusitis",
        destination: "/acute-conditions/strep",
        permanent: false,
      },
      { source: "/resource", destination: "/check-in", permanent: false },
      {
        source: "/immigration-medical-exam-i-693-1",
        destination: "/immigration-medical-exam",
        permanent: false,
      },
      {
        source: "/no-insurance-plan",
        destination: "/urgent-care/insurance-info/no-insurance-plan",
        permanent: false,
      },
      {
        source: "/telemedicine",
        destination: "/urgent-care/telemedicine",
        permanent: false,
      },
      {
        source: "/cold-flu",
        destination: "/urgent-care/acute-conditions/cold-flu",
        permanent: false,
      },
      {
        source: "/service-page/telemedicine",
        destination: "/urgent-care/telemedicine",
        permanent: false,
      },
      {
        source: "/abdominal-pain",
        destination: "/urgent-care/acute-conditions/abdominal-pain",
        permanent: false,
      },
      {
        source: "/plans-pricing",
        destination: "/urgent-care/insurance-info/no-insurance-plan",
        permanent: false,
      },
      {
        source: "/std",
        destination: "/primary-care/std-testing",
        permanent: false,
      },
      {
        source: "/service-page/wellness-exam",
        destination: "/physical-exam/annual-physical",
        permanent: false,
      },
      {
        source: "/service-page/sports-school-work-physical",
        destination: "/physical-exam/work-physical",
        permanent: false,
      },
      {
        source: "/pink-eye",
        destination: "/urgent-care/acute-conditions/pink-eye",
        permanent: false,
      },
      {
        source: "/services/pink-eye",
        destination: "/urgent-care/acute-conditions/pink-eye",
        permanent: false,
      },
      {
        source: "/service-page/immigration-medical-exam-i-693-1",
        destination: "/immigration-medical-exam",
        permanent: false,
      },
      {
        source: "/geriatric-service",
        destination: "/urgent-care/acute-conditions/geriatric-urgent-care",
        permanent: false,
      },
      {
        source: "/copy-of-uti",
        destination: "/urgent-care/acute-conditions/uti",
        permanent: false,
      },
      {
        source: "/post/telemedicine-urgent-care",
        destination: "/urgent-care/telemedicine",
        permanent: false,
      },
      {
        source: "/insurance",
        destination: "/urgent-care/insurance-info/insurance-accept",
        permanent: false,
      },
      {
        source: "/bookonline",
        destination: "/make-appointment",
        permanent: false,
      },
      {
        source: "/lab-tests-and-gene",
        destination: "/urgent-care/lab-services",
        permanent: false,
      },
      {
        source: "/service-page/telemedicine-self-pay",
        destination: "/urgent-care/telemedicine",
        permanent: false,
      },
      {
        source: "/service-page/std-tests",
        destination: "/primary-care/std-testing",
        permanent: false,
      },
      {
        source: "/services/abdominal-pain",
        destination: "/urgent-care/acute-conditions/abdominal-pain",
        permanent: false,
      },
      {
        source: "/services/physicals",
        destination: "/primary-care/physical-exam/annual-physical",
        permanent: false,
      },
      {
        source: "/covid-19-test",
        destination: "/urgent-care/acute-conditions/covid",
        permanent: false,
      },
      {
        source: "/bookings-checkout/telemedicine",
        destination: "/urgent-care/telemedicine",
        permanent: false,
      },
      {
        source: "/service-page/std-tests-or-other-service",
        destination: "/primary-care/std-testing",
        permanent: false,
      },
      {
        source: "/high-dose-vitamine-infusion",
        destination: "/primary-care/iv-infusion",
        permanent: false,
      },
      {
        source: "/ko/immigration-medical-exam-i-693-1",
        destination: "/immigration-medical-exam",
        permanent: false,
      },
      {
        source: "/es/immigration-medical-exam-i-693-1",
        destination: "/immigration-medical-exam",
        permanent: false,
      },
      {
        source: "/zh/copy-of-uti",
        destination: "/urgent-care/acute-conditions/uti",
        permanent: false,
      },
      {
        source: "/post/telemedicine-urgent-care",
        destination: "/urgent-care/telemedicine",
        permanent: false,
      },
      {
        source: "/zh/service-page/immigration-medical-i693-dr-maio-kim",
        destination: "/immigration-medical-exam",
        permanent: false,
      },
      {
        source: "/zh/geriatric-service",
        destination: "/acute-conditions/geriatric-urgent-care",
        permanent: false,
      },
      {
        source: "/zh/service-page/covid-19-test",
        destination: "/urgent-care/acute-conditions/covid",
        permanent: false,
      },
      {
        source: "/service-page/covid-test-conjunction-w-office-visit",
        destination: "/urgent-care/acute-conditions/covid",
        permanent: false,
      },
      {
        source: "/gerd",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/post/the-benefits-of-receiving-patient-centered-care",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/bookings-checkout/flu-shot",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/bookings-checkout/physical-exam",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/blog/",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/copy-of-gerd",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/general-9",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/contents",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/services",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/services/",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/es/bolt-performance",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/es/lab-tests-and-gene",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/ko/covid-19-test",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/zh/service-page/immigration-medical-i693-dr-maio-kim",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/medical-marijuana-counselling",
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/service-page/sick-problem-visit",
        destination: "/not-found",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
