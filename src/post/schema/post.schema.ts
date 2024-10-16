import * as mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true}
});