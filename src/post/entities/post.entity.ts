import { Document } from "mongoose";

export interface Post extends Document {
    readonly title: string,
    readonly author: string,
    readonly content: string
}
