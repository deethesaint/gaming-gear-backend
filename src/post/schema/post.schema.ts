import * as mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String
});