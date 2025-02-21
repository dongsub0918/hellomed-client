export interface CheckInBase {
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
}

export interface CheckInFormInputs extends CheckInBase {
  zipcode: string;
}

export interface CheckInFormOutputs extends CheckInFormInputs {
  id: number;
  created_at: string;
}

export interface CheckInFormBoardDisplay {
  id: number;
  name: string;
  birthDate: string;
  email: string;
  reasonForVisit: string;
  created_at: string;
  viewed: boolean;
}

export interface CheckInFromBoardOutputs {
  checkIns: CheckInFormBoardDisplay[];
  totalCheckIns: number;
}

export interface GetCheckInsParams {
  size?: number;
  page?: number;
}
