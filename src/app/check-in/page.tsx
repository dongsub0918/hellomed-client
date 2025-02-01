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
import { Checkbox } from "@/ui/external/checkbox";
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
    zipcode: "",
    medicationAllergy: "",
    preferredPharmacy: "",
    homeMedication: "",
    reasonForVisit: "",
    exposures: "",
    recentTests: "",
    recentVisits: "",
  });

  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [tempPreferredPharmacy, setTempPreferredPharmacy] =
    useState<string>("");

  useEffect(() => {
    const requiredFields = [
      "name",
      "birthDate",
      "phone",
      "email",
      "address",
      "zipcode",
      "reasonForVisit",
      "preferredPharmacy",
    ];
    const isValid =
      (requiredFields.every(
        (field) => formInputs[field as keyof CheckInFormInputs] !== ""
      ) &&
        formInputs["preferredPharmacy"] !== "others") ||
      (requiredFields.every(
        (field) => formInputs[field as keyof CheckInFormInputs] !== ""
      ) &&
        formInputs["preferredPharmacy"] === "others" &&
        tempPreferredPharmacy !== "");
    setIsFormValid(isValid);
  }, [formInputs, tempPreferredPharmacy]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    // Assign the user custom preferred pharmacy to the form inputs
    if (formInputs["preferredPharmacy"] === "others") {
      formInputs["preferredPharmacy"] = tempPreferredPharmacy;
    }

    try {
      const res = await postCheckIn(formInputs);

      // Store form data in sessionStorage
      sessionStorage.setItem("formData", JSON.stringify(formInputs));

      // Redirect to the success page
      router.push("/check-in/success");
    } catch (error) {
      window.alert("Something went wrong. Please try again.");
      setIsSubmitting(false); // Re-enable the submit button on error
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
            <Label htmlFor="address">Address *</Label>
            <Textarea
              name="address"
              placeholder="Enter your full address"
              value={formInputs.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipcode">Zip code *</Label>
            <Input
              name="zipcode"
              placeholder="Enter your zip code"
              value={formInputs.zipcode}
              onChange={handleChange}
              required
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
            <Select
              name="preferredPharmacy"
              value={formInputs.preferredPharmacy}
              onValueChange={(value) =>
                handleChange("preferredPharmacy", value)
              }
            >
              <SelectTrigger id="preferredPharmacy">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CVS - 209 S State St, Ann Arbor, MI 48104">
                  CVS - 209 S State St, Ann Arbor, MI 48104
                </SelectItem>
                <SelectItem value="CVS - 3535 Plymouth Rd, Ann Arbor, MI 48105">
                  CVS - 3535 Plymouth Rd, Ann Arbor, MI 48105
                </SelectItem>
                <SelectItem value="Kroger - 2641 Plymouth Rd, Ann Arbor, MI 48105">
                  Kroger - 2641 Plymouth Rd, Ann Arbor, MI 48105
                </SelectItem>
                <SelectItem value="Walgreen - 317 S State St, Ann Arbor, MI 48104">
                  Walgreen - 317 S State St, Ann Arbor, MI 48104
                </SelectItem>
                <SelectItem value="Meijer pharmacy - 3145 Ann Arbor-Saline Rd, Ann Arbor, MI 48103">
                  Meijer pharmacy - 3145 Ann Arbor-Saline Rd, Ann Arbor, MI
                  48103
                </SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
            {formInputs.preferredPharmacy === "others" && (
              <Textarea
                name="tempPreferredPharmacy"
                placeholder="Please specify your preferred pharmacy"
                value={tempPreferredPharmacy}
                onChange={(e) => setTempPreferredPharmacy(e.target.value)}
                required
              />
            )}
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

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) =>
                  setAgreedToTerms(checked as boolean)
                }
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the following terms:
              </Label>
            </div>
            <p className="text-sm text-muted-foreground">
              We at HelloMed are required by law to maintain the privacy of and
              provide individuals with the attached Notice of our legal duties
              and privacy practices with respect to protected health
              information. If you have any objections to the Notice, please ask
              to speak with our HIPAA Compliance Officer in person or by phone
              at our main phone number. If you would like a copy of the Notice,
              please ask. HelloMed could send an e-mail or call to inform you of
              your test result, follow up or news.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!isFormValid || !agreedToTerms || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Check-In Form"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
