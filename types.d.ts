declare namespace Express {
  export interface Request {
    user?: {
      id: number;
      email: string;
      password: string;
      role: 'USER' | 'ADMIN' | 'MODERATOR';
    };
  }
}
