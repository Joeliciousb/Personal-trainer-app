import { Dayjs } from "dayjs";

export type LinkType = {
  self: {
    href: string;
  };
  customer: {
    href: string;
  };
  trainings: {
    href: string;
  };
};

export type CustomerGetType = {
  firstname: string;
  lastname: string;
  streetaddress: string;
  postcode: string;
  city: string;
  email: string;
  phone: string;
  _links: LinkType;
};

export type TrainingGetType = {
  date: string;
  duration: number;
  activity: string;
  _links: LinkType;
};

export type CustomerType = {
  firstname: string;
  lastname: string;
  streetaddress: string;
  postcode: string;
  city: string;
  email: string;
  phone: string;
};

export type TrainingType = {
  date: Dayjs | null;
  duration: string;
  activity: string;
  customer: string;
};

export type TrainingPostType = {
  date: string;
  duration: string;
  activity: string;
  customer: string;
};

export type GetTrainingWithCustomerInfoType = {
  id: number;
  date: string;
  duration: number;
  activity: string;
  customer: CustomerType;
};
