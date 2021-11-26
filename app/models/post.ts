import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: String,
    body: String,
    author: String
}, { timestamps: true })

const Post =  mongoose.model('Post', schema, 'posts');

export default Post;