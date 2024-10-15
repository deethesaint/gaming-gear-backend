import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';
import { BasePagination } from 'src/base/pagination.base';
import { RequestError } from 'src/errors/RequestError.error';

@Injectable()
export class ProductService {

  constructor(@Inject('PRODUCT_MODEL') private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async findAll(
    page = 1
  ) {

    if (page < 1) throw new RequestError("Page index must greater than 0", 400);

    const count = await this.productModel.countDocuments({}).exec();
    const totalPages = Math.floor((count - 1) / 1) + 1;

    if (page > totalPages) throw new RequestError("Page index is exceed the total pages", 400);

    const data = await this.productModel.find().limit(1).skip((page - 1) * 1).exec();
    const paginatedData = new BasePagination<Model<Product>>(data, page, totalPages);

    return paginatedData;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
