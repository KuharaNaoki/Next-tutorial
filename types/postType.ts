export type PostArrayType = {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}[];

export type PostType = {
  title: string;
  date: string;
  contentHtml: string;
};

export type PathType = {
  params: {
    id: string;
  };
};
