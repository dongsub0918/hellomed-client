"use client";

import { getCheckIn } from "@/apis/check-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckInFormOutputs } from "@/lib/types/check-in";

export default function CheckInDetailsPage({
  params,
}: {
  params: { id: number };
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState<CheckInFormOutputs>();
  const router = useRouter();

  useEffect(() => {
    async function fetchCheckIn() {
      setLoading(true);
      setError(null);
      try {
        const res = await getCheckIn(params.id);
        setCheckIn(res);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchCheckIn();
  }, []);

  if (error) {
    return (
      <div className="text-center text-3xl text-red-500 font-bold">{error}</div>
    );
  }

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="space-y-6 px-10 pt-5">
      <button
        onClick={() => {
          router.back();
        }}
        className="text-blue-500 underline"
      >
        Back to View Page
      </button>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">
              Check-in Details for: {`${checkIn?.name}`}
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-gray-500">Name</dt>
              <dd className="mt-1">{checkIn?.name}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Birth Date</dt>
              <dd className="mt-1">
                {formatDate(checkIn?.birthDate, "MM/dd/yyyy", "UTC")}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Phone</dt>
              <dd className="mt-1">{checkIn?.phone}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Email</dt>
              <dd className="mt-1">{checkIn?.email}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Address</dt>
              <dd className="mt-1">{checkIn?.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Zipcode</dt>
              <dd className="mt-1">{checkIn?.zipcode}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">
                How did you hear about us?
              </dt>
              <dd className="mt-1">{checkIn?.hearAboutUs}</dd>
            </div>
          </dl>
        </CardContent>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-gray-500">Medication Allergy</dt>
              <dd className="mt-1">{checkIn?.medicationAllergy}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Preferred Pharmacy</dt>
              <dd className="mt-1">{checkIn?.preferredPharmacy}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Home Medication</dt>
              <dd className="mt-1">{checkIn?.homeMedication}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Reason for Visit</dt>
              <dd className="mt-1">{checkIn?.reasonForVisit}</dd>
            </div>
          </dl>
        </CardContent>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="font-medium text-gray-500">Recent Exposures</dt>
              <dd className="mt-1">{checkIn?.exposures}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Recent Tests</dt>
              <dd className="mt-1">{checkIn?.recentTests}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Recent Visits</dt>
              <dd className="mt-1">{checkIn?.recentVisits}</dd>
            </div>
          </dl>
        </CardContent>
        <CardContent>
          <dl>
            <div>
              <dt className="font-medium text-gray-500">Check-In Time</dt>
              <dd className="mt-1">
                {formatDate(checkIn?.created_at, "MM/dd/yyyy hh:mm:ss a (zzz)")}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
