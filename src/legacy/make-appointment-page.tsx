"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FormData {
  date: Date | null;
  location: string;
  staff: string;
  name: string;
  email: string;
  phone: string;
}

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [location, setLocation] = useState("All");
  const [staff, setStaff] = useState("All");
  const [phase, setPhase] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    date: null,
    location: "",
    staff: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleNextClick = () => {
    setFormData((prev) => ({
      ...prev,
      date: selectedDate,
      location,
      staff,
    }));
    setPhase(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send formData to your API endpoint
    console.log(formData);
    // Implement your API call here
  };

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gray-50 py-8 px-4 lg:px-16">
      <Link href={"/"}>
        <button className="text-blue-600 mb-4">{"< Back to home"}</button>
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div
          className={`transition-transform duration-500 ease-in-out ${
            phase === 2 ? "-translate-x-full" : ""
          }`}
        >
          {phase === 1 && (
            <>
              <h1 className="text-2xl font-bold mb-4">Sick / Problem Visit</h1>
              <p className="text-gray-600 mb-4">
                We have two locations. Check our availability and book a
                schedule which best works for you. If you cannot find an
                opening, you can still walk in but you would expect some
                waiting.
              </p>

              <div className="flex justify-between mb-4">
                <div className="space-x-4">
                  <label className="text-gray-700">Filter by:</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <option value="All">Location (All)</option>
                    <option value="Location1">Location 1</option>
                    <option value="Location2">Location 2</option>
                  </select>

                  <select
                    value={staff}
                    onChange={(e) => setStaff(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <option value="All">Staff Member (All)</option>
                    <option value="Staff1">Staff 1</option>
                    <option value="Staff2">Staff 2</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-bold">Select a Date and Time</h2>
                  <p className="text-sm text-gray-500">
                    Eastern Daylight Time (EDT)
                  </p>
                </div>
                <div className="text-right">
                  <button className="text-blue-500">
                    Check Next Availability
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-8">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center font-bold text-gray-600"
                    >
                      {day}
                    </div>
                  )
                )}

                {Array.from(Array(30).keys()).map((i) => (
                  <button
                    key={i}
                    onClick={() => handleDateClick(new Date(2024, 8, i + 1))}
                    className={`p-2 rounded-lg ${
                      selectedDate?.getDate() === i + 1
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Service Details</h3>
                  <p>Sick / Problem visit</p>
                  <p className="text-sm text-gray-500">Insurance/Self Pay</p>
                </div>
                <button
                  className="bg-blue-500 text-white rounded-lg py-2 px-6"
                  disabled={!selectedDate}
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>

        <div
          className={`transition-transform duration-500 ease-in-out ${
            phase === 1 ? "translate-x-full" : ""
          }`}
        >
          {phase === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg py-2 px-6"
              >
                Submit Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
