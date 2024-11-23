import Link from "next/link";
import { Button } from "@/ui/external/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Laptop,
  Phone,
  Clock,
  DollarSign,
  Heart,
  ThumbsUp,
  Calendar,
} from "lucide-react";

export default function TelemedicinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        TELEMEDICINE
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What is Telehealth?
        </h2>
        <p className="text-lg xl:text-xl mb-4">
          Through audio and video over the internet, you can meet with your
          clinician on-the-go from your desktop, laptop, tablet, or mobile
          device (iOS or Android) - it's your choice! Telehealth allows us to
          connect anywhere with secure and convenient appointments that save you
          time and hassle. There's no need to deal with traffic when you can
          schedule and attend your appointments directly from a laptop or mobile
          device.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Benefits of Telehealth
        </h2>
        <p className="text-lg xl:text-xl mb-4">
          Here are a few of the research-based benefits to providing Telehealth
          services:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Laptop className="mr-2 mb-1" />
                Increases access
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Busy professionals and students or geriatric patients! Telehealth
              can play an important role in these communities by increasing
              accessibility.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <DollarSign className="mr-2 mb-1" />
                Reduces costs for clients
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Nearly all research suggests that Telehealth saves money when
              compared with traditional approaches to providing care. For
              clients, this often means lower copays, transportation costs, less
              time missed from work, and less money spent on child care
              expenses.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Heart className="mr-2 mb-1" />
                Same-level client care
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              No client outcome difference was found between Telehealth
              appointments and face-to-face office visits.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <ThumbsUp className="mr-2 mb-1" />
                Better client experience
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Telehealth eliminates the wasted time traveling and sitting in the
              waiting room.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          SERVICES INCLUDE
        </h2>
        <ol className="list-decimal list-inside space-y-2 xl:text-lg">
          <li>All patients who need the services</li>
          <li>
            Conditions including:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>
                Sickness: UTI, Pink Eye, Skin conditions, Minor sore throat
              </li>
              <li>Medication refill for chronic disease conditions</li>
              <li>
                Counselling: Smoking cessation, Weight management,
                contraception, menopause
              </li>
              <li>Wellness counselling</li>
              <li>
                Follow up counselling: Adverse effects, Change or Addition of
                medications
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Service Information
        </h2>
        <Card>
          <CardContent className="flex items-center pt-6 xl:text-xl">
            <Clock className="mr-3 mb-1" />
            <p>
              <strong>Service Duration:</strong> 15 – 25 minutes
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="text-center">
        <Link href={"/make-appointment"}>
          <Button className="my-4 h-12 text-lg xl:text-2xl">
            <Calendar className="mr-1 mb-1" />
            Book an Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
}
