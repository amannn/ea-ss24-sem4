export type Id = number;

export type User = {
  id: Id;
  firstName: string;
  lastName: string;
  portraitUrl: string;
};

export type Room = {
  id: Id;
  createdAt: string;
  title: string;
  description: string;
  heroUrl: string;
  owner: User;
  pricePerNight: {
    amount: number;
    currency: string;
  };
};

export type PageInfo = {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
};

export type Collection<Node> = {
  page: PageInfo;
  nodes: Array<Node>;
};
