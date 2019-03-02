import React, { FunctionComponent, useEffect, useState } from 'react';
import { Order } from '../domain/order';
import OrdersService from '../services/orders.service';
import { DataTable } from '../data-table/DataTable';

export const Orders: FunctionComponent = () => {
	const [orders, setOrders] = useState<Order[]>([]);

	useEffect(() => {
		OrdersService.getOrders().then((orders: Order[]) => {
			setOrders(orders);
		});
	}, []);

	if (orders.length === 0) {
		return <div>Loading...</div>;
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
