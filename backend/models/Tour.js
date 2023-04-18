import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema({
	duration: { type: String, required: true },
	desc: { type: String, required: true },
	places: { type: String, required: true },
	price: { type: Number, required: true },
	team: { type: String, required: true },
}, { timestamps: true });

export const Tour = mongoose.model('Tour', TourSchema)
