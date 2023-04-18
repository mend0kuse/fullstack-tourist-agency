import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const OrderSchema = new mongoose.Schema({
	tourId: {
		type: Schema.Types.ObjectId,
		ref: 'Tour'
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
	,
	price: { type: Number, required: true },
}, { timestamps: true });

OrderSchema.virtual('virtualTour', {
	ref: 'Tour',
	localField: 'tourId',
	foreignField: '_id',
});

OrderSchema.virtual('virtualUser', {
	ref: 'User',
	localField: 'userId',
	foreignField: '_id',
});

OrderSchema.set('toObject', { virtuals: true });
OrderSchema.set('toJSON', { virtuals: true });

export const Order = mongoose.model('Order', OrderSchema)
