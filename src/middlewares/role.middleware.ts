import { NextFunction, Response } from 'express';
import { HttpException } from '@/exceptions/httpException';
import { RequestWithUser } from '@interfaces/auth.interface';

export const RoleMiddleware = (requiredRole: string) => {
  return (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (userRole && userRole === requiredRole) {
      next();
    } else {
      next(new HttpException(403, 'Access denied'));
    }
  };
};
