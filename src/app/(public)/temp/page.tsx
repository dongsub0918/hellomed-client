import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/ui/footer";
import HoursTable from "@/ui/hours-table";
import LocationsSection from "@/ui/locations-section";
import Carousel from "@/ui/landing-page/desktop/carousel";
import homeStructuredData from "@/lib/content/structured-data/home";
import TempNavbar from "./navbar";
import Link from "next/link";

export default function TempLandingPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      <TempNavbar />

      <section className={styles.hero} id="about">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Urgent Care Clinic Ann Arbor</p>
            <h1 className={styles.heroTitle}>
              Medical Attention You Can Rely On
            </h1>
            <p className={styles.heroSubtitle}>
              HELLOMED Walk-in Clinic is a neighborhood-focused clinic dedicated
              to providing medical care in an accessible and convenient way. We
              are here to serve the urgent healthcare needs of the Ann Arbor
              community and have been doing so since 2014.
            </p>
            <div className={styles.heroActions}>
              <Link href="/urgent-care" className={styles.primaryButton}>
                Explore urgent care
              </Link>
              <Link
                href="/primary-care"
                className={`${styles.secondaryButton} ${styles.primaryCareButton}`}
              >
                Explore primary care
              </Link>
              <Link
                href="/immigration-medical-exam"
                className={`${styles.secondaryButton} ${styles.immigrationButton}`}
              >
                Immigration Medical Exam
              </Link>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image
              src="/landing-img.webp"
              alt="HELLOMED clinic front desk"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 100vw"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>
              Care that fits your schedule
            </p>
            <h2 className={styles.sectionTitle}>
              After Hours Walk-In Clinic Ann Arbor
            </h2>
            <p className={styles.sectionSubtitle}>
              We blend quick access with thoughtful care, so you can get back to
              your day confidently.
            </p>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Fast, friendly visits</h3>
              <p>
                Same-day walk-ins and appointments with a team that takes time
                to listen.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Primary & urgent care</h3>
              <p>
                From annual checkups to unexpected injuries, we are here when
                you need us most.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Convenient locations</h3>
              <p>
                Two Ann Arbor clinics, easy parking, and extended hours for busy
                schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionAlt} ${styles.carouselSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.carouselWrap}>
            <h2 className={styles.sectionTitle}>What&apos;s new at HELLOMED</h2>
            <p className={styles.sectionSubtitle}>
              Updates, announcements, and community highlights.
            </p>
            <div className={styles.carouselFrame}>
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionDark} id="hours">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeaderLight}>
            <h2>Clinic Hours</h2>
            <p>
              Tap each location to see today&apos;s hours and holiday updates.
            </p>
          </div>
          <div className={styles.hoursPanel}>
            <HoursTable />
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionTightBottom}`}
        id="locations"
      >
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Locations</h2>
            <p className={styles.sectionSubtitle}>
              Choose the clinic that works best for you. Appointments are
              available at both locations.
            </p>
          </div>
          <LocationsSection appointmentLinks />
        </div>
      </section>
      <div className={styles.footerWrap}>
        <Footer />
      </div>
    </main>
  );
}
