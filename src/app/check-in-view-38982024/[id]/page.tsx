import { Suspense } from "react";
import { getCheckIn } from "@/apis/check-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import { format, parse, parseISO } from "date-fns";
import Link from "next/link";

async function CheckInDetails({ id }: { id: number }) {
  let checkIn;
  let error_message = "";
  try {
    checkIn = await getCheckIn(id);
  } catch (error) {
    console.error("Error fetching check-in:", error);
    error_message =
      "Something went wrong. Please navigate to the previous page.";
  }

  const formatDate = (dateString: Date) => {
    return dateString.toLocaleTimeString([], {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (error_message) {
    return (
      <div className="text-center text-3xl text-red-500 font-bold">{`${error_message}`}</div>
    );
  }

  return (
    <div className="space-y-6 pt-10">
      <Link href={"/check-in-view-38982024"}>
        <span className="text-blue-500 underline">Back to View Page</span>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="texr-3xl">
              Check-in Details for: {`${checkIn.name}`}
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-gray-500">Name</dt>
              <dd className="mt-1">{checkIn.name}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Birth Date</dt>
              <dd className="mt-1">
                {format(
                  parse(
                    checkIn.birthDate,
                    "EEE, dd MMM yyyy HH:mm:ss 'GMT'",
                    new Date()
                  ),
                  "MMM dd, yyyy"
                )}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Phone</dt>
              <dd className="mt-1">{checkIn.phone}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Email</dt>
              <dd className="mt-1">{checkIn.email}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Address</dt>
              <dd className="mt-1">{checkIn.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Zipcode</dt>
              <dd className="mt-1">{checkIn.zipcode}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">
                How did you hear about us?
              </dt>
              <dd className="mt-1">{checkIn.hearAboutUs}</dd>
            </div>
          </dl>
        </CardContent>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-gray-500">Medication Allergy</dt>
              <dd className="mt-1">{checkIn.medicationAllergy}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Preferred Pharmacy</dt>
              <dd className="mt-1">{checkIn.preferredPharmacy}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Home Medication</dt>
              <dd className="mt-1">{checkIn.homeMedication}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Reason for Visit</dt>
              <dd className="mt-1">{checkIn.reasonForVisit}</dd>
            </div>
          </dl>
        </CardContent>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="font-medium text-gray-500">Recent Exposures</dt>
              <dd className="mt-1">{checkIn.exposures}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Recent Tests</dt>
              <dd className="mt-1">{checkIn.recentTests}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Recent Visits</dt>
              <dd className="mt-1">{checkIn.recentVisits}</dd>
            </div>
          </dl>
        </CardContent>
        <CardContent>
          <dl>
            <div>
              <dt className="font-medium text-gray-500">Check-In Time</dt>
              <dd className="mt-1">
                {formatDate(new Date(checkIn.created_at))}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CheckInPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <CheckInDetails id={parseInt(params.id, 10)} />
      </Suspense>
    </div>
  );
}
