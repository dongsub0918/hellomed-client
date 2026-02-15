"use client";

import { getCheckIn } from "@/apis/check-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import { formatDate } from "@/lib/features/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckInFormOutputs } from "@/lib/types/check-in";
import { getImageFromS3 } from "@/lib/features/image";
import Image from "next/image";

export default function CheckInDetailsPage() {
  const params = useParams<{ id: string }>();
  const checkInId = params?.id ? Number(params.id) : null;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState<CheckInFormOutputs>();
  const [idImageSrc, setIdImageSrc] = useState<string | null>(null);
  const [insuranceImageFrontSrc, setInsuranceImageFrontSrc] = useState<
    string | null
  >(null);
  const [insuranceImageBackSrc, setInsuranceImageBackSrc] = useState<
    string | null
  >(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCheckIn() {
      if (!checkInId || Number.isNaN(checkInId)) {
        setError("Invalid check-in ID.");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const res = await getCheckIn(checkInId);
        setCheckIn(res);

        if (res.idImage) {
          setIdImageSrc(await getImageFromS3(`id/checkin-${checkInId}`));
        }
        if (res.insuranceImageFront) {
          setInsuranceImageFrontSrc(
            await getImageFromS3(`insurance-front/checkin-${checkInId}`)
          );
        }
        if (res.insuranceImageBack) {
          setInsuranceImageBackSrc(
            await getImageFromS3(`insurance-back/checkin-${checkInId}`)
          );
        }
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
  }, [checkInId]);

  if (error) {
    return (
      <div className="text-center text-3xl text-red-500 font-bold">{error}</div>
    );
  }

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
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
          <dl className="grid grid-cols-1 gap-4 gap-y-10">
            <div>
              <dt className="font-medium text-gray-500">ID</dt>
              <dd className="flex justify-center mt-1">
                {idImageSrc ? (
                  <div
                    className="relative w-fit cursor-pointer"
                    onClick={() => window.open(idImageSrc, "_blank")}
                  >
                    <Image
                      src={idImageSrc}
                      alt="ID card image"
                      width={350}
                      height={250}
                      className="object-contain hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-gray-500 italic">Not submitted</span>
                )}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">
                Insurance Card Front
              </dt>
              <dd className="flex justify-center mt-1">
                {insuranceImageFrontSrc ? (
                  <div
                    className="relative w-fit cursor-pointer"
                    onClick={() =>
                      window.open(insuranceImageFrontSrc, "_blank")
                    }
                  >
                    <Image
                      src={insuranceImageFrontSrc}
                      alt="Insurance card image front"
                      width={350}
                      height={250}
                      className="object-contain hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-gray-500 italic">Not submitted</span>
                )}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Insurance Card Back</dt>
              <dd className="flex justify-center mt-1">
                {insuranceImageBackSrc ? (
                  <div
                    className="relative w-fit cursor-pointer"
                    onClick={() => window.open(insuranceImageBackSrc, "_blank")}
                  >
                    <Image
                      src={insuranceImageBackSrc}
                      alt="Insurance card image back"
                      width={350}
                      height={250}
                      className="object-contain hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-gray-500 italic">Not submitted</span>
                )}
              </dd>
            </div>
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
