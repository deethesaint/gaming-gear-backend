import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';
import { BasePagination } from 'src/base/pagination.base';

@Injectable()
export class PostService {

  constructor(@Inject('POST_MODEL') private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return newPost.save();
  }

  async findAll(
    page: number = 1
  ) {
    const count = await this.postModel.countDocuments({}).exec();
    const totalPages = Math.floor((count - 1) / 1) + 1;
    const data = await this.postModel.find().skip(1 * (page - 1)).limit(1).exec();

    const paginatedData = new BasePagination<Model<Post>>(data, page as number, totalPages);

    return paginatedData;
  }

  async findQuery(): Promise<Post[]> {
    return this.postModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
