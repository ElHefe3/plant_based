export interface User {
  id?: number;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN' | 'MODERATOR';
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}
