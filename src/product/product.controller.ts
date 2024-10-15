import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { RequestError } from 'src/errors/RequestError.error';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return this.productService.create(createProductDto);
    }
    catch(err) {
      if (err instanceof RequestError) {
        return new HttpException(err.message, err.status);
      }
    }
  }

  @Get()
  async findAll(@Query('page') page: number) {
    try {
      const result = await this.productService.findAll(page);
      return {statusCode: HttpStatus.OK, data: result};
    }
    catch(err) {
      if (err instanceof RequestError) {
        throw new HttpException(err.message, err.status);
      }
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
