import { Router } from 'express';
import { PostController } from '@controllers/post.controller';
import { CreatePostDto } from '@dtos/post.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class PostRoute implements Routes {
  public path = '/posts';
  public router = Router();
  public postController = new PostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Assuming only authenticated users can create a post
    this.router.post(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreatePostDto), this.postController.createPost);

    // Add other routes for posts as needed, e.g., get all posts, get a post by ID, etc.
  }
}
