import MobileLandingPage from "@/ui/landing-page/mobile-landing-page";
import DesktopLandingPage from "@/ui/landing-page/desktop-landing-page";

export default function LandingPage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopLandingPage />
      </div>
      <div className="md:hidden">
        <MobileLandingPage />
      </div>
    </>
  );
}
