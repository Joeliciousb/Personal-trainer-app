export type linksType = {
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
  _links: linksType;
};

export type trainingsGetType = {
  date: string;
  duration: number;
  activity: string;
  _links: linksType;
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

export type trainingsType = {
  date: Date;
  duration: number;
  activity: string;
  customer: customerType;
};

export type getTrainingsWithCustomerInfoType = {
  id: number;
  date: string;
  duration: number;
  activity: string;
  customer: customerType;
};
