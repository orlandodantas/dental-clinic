declare namespace Express {
  export interface Request {
    pagination: Pagination;
  }
}

type Pagination = {
  skip: number;
  limit: number;
};
