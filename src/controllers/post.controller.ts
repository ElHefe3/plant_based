import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Post } from '@/interfaces/post.interface';
import { PostService } from '@/services/post.service';

export class PostController {
  public postService = Container.get(PostService);

  public getPosts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const getAllPosts: Post[] = await this.postService.getAllPosts();

      res.status(200).json({ data: getAllPosts, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const postData: Post = req.body;
      const newPost = await this.postService.createPost(postData, req.user.id);

      res.status(201).json({ data: newPost, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}
