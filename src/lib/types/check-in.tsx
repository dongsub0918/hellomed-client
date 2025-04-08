interface CheckInBase {
  name: string;
  birthDate: string;
  email: string;
  reasonForVisit: string;
}

// Directly submitted into POST API
export interface CheckInFormInputs extends CheckInBase {
  phone: string;
  hearAboutUs: string;
  address: string;
  medicationAllergy: string;
  preferredPharmacy: string;
  homeMedication: string;
  exposures: string;
  recentTests: string;
  recentVisits: string;
  zipcode: string;
  idImage: boolean;
  insuranceImage: boolean;
}

// GET API response for entire check in form
export interface CheckInFormOutputs extends CheckInFormInputs {
  id: number;
  created_at: string;
}

// GET API response for check in form board list
export interface CheckInFormBoardDisplay extends CheckInBase {
  id: number;
  viewed: boolean;
  created_at: string;
}

// Wrapper type for check in form board list
export interface CheckInFromBoardOutputs {
  checkIns: CheckInFormBoardDisplay[];
  totalCheckIns: number;
}

// Pagination parameters for GET API
export interface GetCheckInsParams {
  size?: number;
  page?: number;
}
