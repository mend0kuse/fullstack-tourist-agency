import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	fullName: { type: String, required: true },
	password: { type: String, required: true },
	username: { type: String, required: true },
	passport: { type: String},
	age: { type: Number},
	city: { type: String},
	mail: { type: String},
	phone: { type: String},
	role: { type: String}
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema)
