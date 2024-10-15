import * as mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema({
    path: String
})

export const ProductSchema = new mongoose.Schema({
    sku: String,
    category_id: String,
    product_name: String,
    price: Number,
    discount: Number,
    thumbnail: String,
    images: [ImageSchema]
})