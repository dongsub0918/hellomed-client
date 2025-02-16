export type CheckInFormInputs = {
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  hearAboutUs: string;
  address: string;
  zipcode: string;
  medicationAllergy: string;
  preferredPharmacy: string;
  homeMedication: string;
  reasonForVisit: string;
  exposures: string;
  recentTests: string;
  recentVisits: string;
};

export type CheckInFormOutputs = {
  id: number;
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  hearAboutUs: string;
  address: string;
  medicationAllergy: string;
  preferredPharmacy: string;
  homeMedication: string;
  reasonForVisit: string;
  exposures: string;
  recentTests: string;
  recentVisits: string;
  created_at: string;
};

export type CheckInFromBoardOutputs = {
  checkIns: CheckInFormBoardDisplay[];
  totalCheckIns: number;
};

export type CheckInFormBoardDisplay = {
  id: number;
  name: string;
  birthDate: string;
  email: string;
  reasonForVisit: string;
  created_at: string;
};

export interface GetCheckInsParams {
  size?: number;
  page?: number;
}
