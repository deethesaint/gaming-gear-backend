import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { DatabaseModule } from 'src/database/database.module';
import { postsProvider } from './post.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [PostService,...postsProvider],
})
export class PostModule {}
