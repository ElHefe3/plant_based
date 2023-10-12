import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  // If you want to allow setting the authorId through the DTO
  // @IsNumber()
  // @IsOptional()
  // authorId?: number;
}
