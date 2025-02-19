"use client";
import { getLocationsInfo, putLocationsInfo } from "@/apis/locations";
import { useEffect, useState } from "react";
import { LocationTitle, LocationInfo } from "@/lib/types/locations";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Label } from "@/ui/external/label";
import { Input } from "@/ui/external/input";
import { Textarea } from "@/ui/external/textarea";
import { ChangeEvent } from "react";

export default function ChangeHours() {
  const [formData, setFormData] = useState<LocationInfo[]>([]);
  const [tempTitles, setTempTitles] = useState<LocationTitle[]>([]);
  const [expandedLocation, setExpandedLocation] = useState<string | null>("");
  const [error, setError] = useState<string | null>(null);
  const [dataStale, setDataStale] = useState<boolean>(true);

  const fetchLocationsInfo = async () => {
    try {
      setError(null);
      const res = await getLocationsInfo();

      // As soon as data arrives, ensure that they are fomatted est
      setFormData(
        res.map((location: LocationInfo) => ({
          ...location,
          holiday_start: convertToEST(location.holiday_start),
          holiday_end: convertToEST(location.holiday_end),
        }))
      );

      // Store the titles in a separate state for rendering purposes
      setTempTitles(() =>
        (res as LocationInfo[]).map(({ code, title }) => ({ code, title }))
      );
    } catch (error) {
      setError(error as string);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setError(null);
      await putLocationsInfo(formData);
      window.alert("Changes submitted successfully.");
    } catch (error) {
      setError(error as string);
    }
  };

  const handleResetClick = async () => {
    setDataStale(true);
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prevData) =>
      prevData.map((location) =>
        location.code === expandedLocation
          ? { ...location, [id]: value }
          : location
      )
    );
  };

  const convertToEST = (date: string | null) => {
    if (!date) return "";
    const utcDate = new Date(date);
    const estDate = new Date(utcDate.getTime() - 5 * 60 * 60 * 1000);
    return estDate.toISOString().slice(0, 16);
  };

  useEffect(() => {
    if (dataStale) {
      fetchLocationsInfo();
      setDataStale(false);
    }
  }, [dataStale]);

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <section className="space-y-4">
      {formData.map(
        ({
          code,
          title,
          address,
          holiday_start,
          holiday_end,
          holiday_message,
          mon,
          tue,
          wed,
          thu,
          fri,
          sat,
          sun,
          lunch_break,
          open,
        }) => (
          <div className="flex flex-col" key={code}>
            <button
              className="flex justify-between p-4 rounded-lg font-bold text-xl text-white bg-slate-600  hover:bg-slate-500"
              onClick={() =>
                setExpandedLocation(code === expandedLocation ? "" : code)
              }
            >
              <span>
                {String(
                  tempTitles.find((omittedForm) => omittedForm.code === code)
                    ?.title
                )}
              </span>
              {expandedLocation === code ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedLocation === code && (
              <div className="p-4">
                <form onSubmit={handleSubmit}>
                  {/* General info */}
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">General Info</p>
                    <div className="flex items-center space-x-4">
                      <Label htmlFor="open">Open</Label>
                      <Input
                        id="open"
                        type="checkbox"
                        checked={open}
                        onChange={(e) => {
                          setFormData((prevData) =>
                            prevData.map((location) =>
                              location.code === code
                                ? { ...location, open: e.target.checked }
                                : location
                            )
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        type="text"
                        value={title}
                        onChange={handleFormChange}
                        disabled={!open}
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        type="text"
                        value={address}
                        onChange={handleFormChange}
                        disabled={!open}
                      />
                    </div>
                  </div>

                  {/* Holidays / open form */}
                  <p className="font-semibold text-lg">Scheduled Holiday</p>
                  <div className="flex space-x-10 my-5">
                    <div className="flex space-x-10 items-center">
                      <div>
                        <Label htmlFor="holiday_start"></Label>
                        <Input
                          id="holiday_start"
                          type="datetime-local"
                          value={convertToEST(holiday_start)}
                          onChange={handleFormChange}
                          disabled={!open}
                        />
                      </div>
                      <span>TO</span>
                      <div>
                        <Label htmlFor="holiday_end"></Label>
                        <Input
                          id="holiday_end"
                          type="datetime-local"
                          value={convertToEST(holiday_end)}
                          onChange={handleFormChange}
                          disabled={!open}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 w-full">
                      <Label htmlFor="holiday_message">Message</Label>
                      <Textarea
                        id="holiday_message"
                        value={holiday_message ?? ""}
                        onChange={handleFormChange}
                        disabled={!open}
                      />
                    </div>
                  </div>

                  {/* Calendar form */}
                  <p className="font-semibold text-lg">Weekly Hours</p>
                  <div className="grid grid-cols-8 space-x-2 text-center my-5">
                    {[
                      "mon",
                      "tue",
                      "wed",
                      "thu",
                      "fri",
                      "sat",
                      "sun",
                      "lunch_break",
                    ].map((day) => (
                      <div key={day}>
                        <Label htmlFor={day}>
                          {day.toUpperCase().replace("_", " ")}
                        </Label>
                        <Input
                          id={day}
                          type="text"
                          value={
                            String(
                              formData.find(
                                (location) => location.code === expandedLocation
                              )?.[day as keyof LocationInfo]
                            ) ?? ""
                          }
                          onChange={handleFormChange}
                          disabled={!open}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Submit button */}
                  <div className="flex w-full justify-center space-x-4">
                    <button
                      type="button"
                      onClick={handleResetClick}
                      className="rounded-lg bg-slate-600 hover:bg-slate-500 text-white font-semibold p-3"
                    >
                      Reset Changes
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-slate-600 hover:bg-slate-500 text-white font-semibold p-3"
                    >
                      Submit Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )
      )}
    </section>
  );
}
