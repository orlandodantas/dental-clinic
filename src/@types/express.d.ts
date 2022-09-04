declare namespace Express {
  export interface Request {
    pagination: Pagination;
    login: Login;
  }
}

type Pagination = {
  skip: number;
  limit: number;
};

type Login = {
  name: string;
  email: string;
  role: Role;
};
