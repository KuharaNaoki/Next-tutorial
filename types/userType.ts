export type UserArrayType = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: {
    name: string;
  };
}[];

export type PathType = {
  params: {
    id: string;
  };
}[];
