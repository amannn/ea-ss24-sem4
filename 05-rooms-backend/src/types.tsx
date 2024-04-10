export type Id = number;

export type PageInfo = {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
};

export type Rel = {
  rel: string;
  href: string;
  templated?: boolean;
};

export type Collection<Node = unknown> = {
  page: PageInfo;
  nodes: Array<Node>;
};

export type User = {
  id: Id;
  firstName: string;
  lastName: string;
  portraitUrl: string;
};

export type Me = User & {
  starredRoomIds: Array<Id>;
};

export type Room = {
  id: Id;
  owner: User;
  createdAt: string;
  title: string;
  description: string;
  heroUrl: string;
  pricePerNight: {
    amount: number;
    currency: string;
  };
  isStarred: boolean;
};

export type RoomInput = Omit<Room, 'id' | 'owner' | 'createdAt' | 'isStarred'>;
