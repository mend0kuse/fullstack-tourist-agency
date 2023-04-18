import { Order } from '../models/Order.js'
import { Tour } from '../models/Tour.js'
import { User } from '../models/User.js'

class OrderController {
	async getAll(req, res) {
		try {
			const orders = await Order.find()
				.populate({ path: 'virtualTour' })
				.populate({ path: 'virtualUser' })

			return res.status(200).json(orders);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async createOrder(req, res) {
		try {
			const user = await User.findById({ _id: req.body.userId })
			const tour = await Tour.findById({ _id: req.body.tourId })

			const order = await Order.create({ userId: user, tourId: tour, price: req.body.price });

			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async getByUserId(req, res) {
		try {
			const orders = await Order.find({ userId: req.params.id })
				.populate({ path: 'virtualTour' })
				.populate({ path: 'virtualUser' });

			return res.status(200).json(orders);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async deleteOrder(req, res) {
		try {
			const order = await Order.findByIdAndDelete({ _id: req.params.id })

			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
}

export const ordersController =  new OrderController()
