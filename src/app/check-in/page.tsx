"use client";

import { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/external/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import { Input } from "@/ui/external/input";
import { Label } from "@/ui/external/label";
import { RadioGroup, RadioGroupItem } from "@/ui/external/radio-group";
import { Textarea } from "@/ui/external/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/external/select";
import { CheckInFormInputs } from "@/lib/types";
import { postCheckIn } from "@/apis/check-in";

export default function CheckInFormPage() {
  const router = useRouter();
  const [formInputs, setFormInputs] = useState<CheckInFormInputs>({
    name: "",
    birthDate: "",
    phone: "",
    email: "",
    hearAboutUs: "",
    address: "",
    medicationAllergy: "",
    preferredPharmacy: "",
    homeMedication: "",
    reasonForVisit: "",
    exposures: "",
    recentTests: "",
    recentVisits: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const requiredFields = [
      "name",
      "birthDate",
      "phone",
      "email",
      "reasonForVisit",
      "preferredPharmacy",
    ];
    const isValid = requiredFields.every(
      (field) => formInputs[field as keyof CheckInFormInputs] !== ""
    );
    setIsFormValid(isValid);
  }, [formInputs]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await postCheckIn(formInputs);

      // Store form data in sessionStorage
      sessionStorage.setItem("formData", JSON.stringify(formInputs));

      // Redirect to the success page
      router.push("/check-in/success");
    } catch (error) {
      window.alert("Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    nameOrEvent:
      | string
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    value?: string
  ) => {
    if (typeof nameOrEvent === "string") {
      // Handle Select and RadioGroup changes
      setFormInputs((prev) => ({ ...prev, [nameOrEvent]: value }));
    } else {
      // Handle Input, Textarea, and native Select changes
      const { name, value } = nameOrEvent.target;
      setFormInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 sm:border-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Patient Check-In Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                name="name"
                placeholder="Full Name"
                value={formInputs.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthDate">Birth Date *</Label>
              <Input
                name="birthDate"
                type="date"
                value={formInputs.birthDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                name="phone"
                type="tel"
                placeholder="(123) 456-7890"
                value={formInputs.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formInputs.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
            <Select
              name="hearAboutUs"
              value={formInputs.hearAboutUs}
              onValueChange={(value) => handleChange("hearAboutUs", value)}
            >
              <SelectTrigger id="hearAboutUs">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friend">Friend or Family</SelectItem>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="bing">Bing</SelectItem>
                <SelectItem value="yelp">Yelp</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="localOnlineCommunity">
                  Local Online Community
                </SelectItem>
                <SelectItem value="walkBy">Walk By</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              name="address"
              placeholder="Enter your full address"
              value={formInputs.address}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicationAllergy">Medication Allergy</Label>
            <Textarea
              name="medicationAllergy"
              placeholder="List any medication allergies"
              value={formInputs.medicationAllergy}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredPharmacy">Preferred Pharmacy *</Label>
            <Input
              name="preferredPharmacy"
              placeholder="Pharmacy name and location"
              value={formInputs.preferredPharmacy}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="homeMedication">At Home Medication</Label>
            <Textarea
              name="homeMedication"
              placeholder="List your current medications"
              value={formInputs.homeMedication}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reasonForVisit">
              Reason for Visit (Main Concern) *
            </Label>
            <Textarea
              name="reasonForVisit"
              placeholder="Describe your main concern"
              value={formInputs.reasonForVisit}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>
              Have you had any exposures such as COVID, Strep, Flu, or Mono?
            </Label>
            <RadioGroup
              name="exposures"
              value={formInputs.exposures}
              onValueChange={(value) => handleChange("exposures", value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="exposures-yes" />
                <Label htmlFor="exposures-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="exposures-no" />
                <Label htmlFor="exposures-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="recentTests">
              Have you been tested for anything in the past week? If so, what
              and what were the results?
            </Label>
            <Textarea
              name="recentTests"
              placeholder="Describe any recent tests and results"
              value={formInputs.recentTests}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="recentVisits">
              Have you been seen anywhere else in the past week? If so, did they
              prescribe any medications?
            </Label>
            <Textarea
              name="recentVisits"
              placeholder="Describe any recent medical visits and prescribed medications"
              value={formInputs.recentVisits}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full" disabled={!isFormValid}>
            Submit Check-In Form
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
