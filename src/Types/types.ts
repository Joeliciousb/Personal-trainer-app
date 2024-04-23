import { Dayjs } from "dayjs";

export type linkType = {
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

export type customerGetType = {
  firstname: string;
  lastname: string;
  streetaddress: string;
  postcode: string;
  city: string;
  email: string;
  phone: string;
  _links: linkType;
};

export type trainingGetType = {
  date: string;
  duration: number;
  activity: string;
  _links: linkType;
};

export type customerType = {
  firstname: string;
  lastname: string;
  streetaddress: string;
  postcode: string;
  city: string;
  email: string;
  phone: string;
};

export type trainingType = {
  date: Dayjs | null;
  duration: string;
  activity: string;
  customer: string;
};

export type trainingPostType = {
  date: string;
  duration: string;
  activity: string;
  customer: string;
};

export type getTrainingWithCustomerInfoType = {
  id: number;
  date: string;
  duration: number;
  activity: string;
  customer: customerType;
};
