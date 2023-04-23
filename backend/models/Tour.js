import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema({
	title: { type: String, required: true },
	duration: { type: String, required: true },
	desc: [{ type: String, required: true }],
	places: [{ type: String, required: true }],
	price: { type: Number, required: true },
	busySeats: { type: Number, required: true },
	allSeats: { type: Number, required: true },
	team: [{ type: String, required: true }],
	mainImg: { type: String, required: true },
	sliderImgs: [{ type: String, required: true }],
}, { timestamps: true });

export const Tour = mongoose.model('Tour', TourSchema)
