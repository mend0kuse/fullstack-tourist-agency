import axios from 'axios'
import { Order } from '../types/Order'

export interface OrderPostProps {
	userId?: string;
	tourId?: string;
	price?: string;
	seats: number
}

class OrderApi {
	async createOrder(props: OrderPostProps) {
		const { data } = await axios.post<Order>('http://localhost:5000/orders', {
			...props
		})

		return data
	}
	async getOrders() {
		const { data } = await axios.get<Order[]>('http://localhost:5000/orders')
		return data
	}

	async getOrdersByUserId(userId?: string) {
		const { data } = await axios.get<Order[]>('http://localhost:5000/orders/user/' + userId)
		return data
	}
}

export const orderApi = new OrderApi()