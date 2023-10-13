import { Post, PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';
import { CreatePostDto } from '@/dtos/post.dto';

@Service()
export class PostService {
  private prisma = new PrismaClient();
  public post = this.prisma.post;

  public async createPost(postData: CreatePostDto, currentUserId: number): Promise<Post> {
    try {
      return await this.post.create({
        data: {
          ...postData,
          authorId: currentUserId,
        },
      });
    } catch (error) {
      throw new HttpException(500, 'Error creating post');
    }
  }

  public async getAllPosts(): Promise<Post[]> {
    try {
      return this.post.findMany({
        where: {
          published: true,
        },
        include: {
          author: true,
        },
      });
    } catch (error) {
      throw new HttpException(500, 'Error fetching posts');
    }
  }

  public async getPostsByUser(authorId: number): Promise<Post[]> {
    try {
      return await this.post.findMany({
        where: { authorId },
      });
    } catch (error) {
      throw new HttpException(500, 'Error fetching posts by user');
    }
  }

  public async updatePost(id: number, postData: CreatePostDto): Promise<Post> {
    try {
      return await this.post.update({
        where: { id },
        data: postData,
      });
    } catch (error) {
      throw new HttpException(500, 'Error updating post');
    }
  }

  public async deletePost(id: number): Promise<void> {
    try {
      await this.post.delete({
        where: { id },
      });
    } catch (error) {
      throw new HttpException(500, 'Error deleting post');
    }
  }
}
