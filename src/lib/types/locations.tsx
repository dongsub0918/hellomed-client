export interface LocationTitle {
  code: string;
  title: string;
}

export interface LocationInfo extends LocationTitle {
  address: string;
  holiday_start: string;
  holiday_end: string;
  holiday_message: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
  lunch_break: string;
  open: boolean;
}
