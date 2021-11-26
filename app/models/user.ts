import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    username: String,
    password: {
        type: String,
        select: false
    }
}, { timestamps: true })

const User =  mongoose.model('User', schema, 'users');

export default User;