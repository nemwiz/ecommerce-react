import { Order } from '../domain/order';

export class OrdersService {
	getOrders(): Promise<Order[]> {
		return fetch('http://localhost:5000/api/orders').then(response => response.json());
	}
}
