import React, { FunctionComponent, useEffect, useState } from 'react';
import { Order } from '../domain/order';
import { OrdersService } from '../services/orders.service';
import DataTable from '../data-table/DataTable';

const Orders: FunctionComponent = () => {
	const [orders, setOrders] = useState<Order[]>([]);
	const ordersService = new OrdersService();

	useEffect(() => {
		ordersService.getOrders().then((orders: Order[]) => {
			setOrders(orders);
		});
	}, []);

	if (orders.length === 0) {
		return <div className={'loader'} />;
	} else {
		return (
			<DataTable headers={Object.keys(orders[0])}>
				{orders.map(order => (
					<tr key={order.orderNumber}>
						<td>{order.orderNumber}</td>
						<td>{order.buyerName}</td>
						<td>{order.sellerName}</td>
						<td>{order.storeName}</td>
						<td>{order.totalAmount}</td>
						<td>{order.orderStatus}</td>
					</tr>
				))}
			</DataTable>
		);
	}
};

export default Orders;
