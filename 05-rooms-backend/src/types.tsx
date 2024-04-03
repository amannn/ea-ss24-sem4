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
