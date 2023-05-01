export type userType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
};

export type pathType = {
  params: {
    id: string;
  };
};
