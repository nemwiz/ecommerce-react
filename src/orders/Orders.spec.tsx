import React from 'react';
import { act, render, RenderResult, waitForElement } from 'react-testing-library';
import { Orders } from './Orders';
import { OrdersService } from '../services/orders.service';

jest.mock('../services/orders.service');

it('renders orders component', async () => {
	const dummyOrder = {
		orderNumber: 1234,
		buyerName: 'John Doe',
		sellerName: 'Tester Joe',
		storeName: 'testing store',
		totalAmount: 999,
		orderStatus: 'open'
	};

	let ordersComponent: RenderResult;
	const ordersServiceMock = (OrdersService as jest.Mocked<typeof OrdersService>).prototype;

	act(() => {
		ordersServiceMock.getOrders = jest.fn().mockResolvedValue([dummyOrder]);
		ordersComponent = render(<Orders />);
	});

	const orderNumberElement = await waitForElement(() => {
		return ordersComponent.getByText(dummyOrder.orderNumber.toString());
	});

	const buyerNameElement = await waitForElement(() => {
		return ordersComponent.getByText(dummyOrder.buyerName);
	});

	const sellerNameElement = await waitForElement(() => {
		return ordersComponent.getByText(dummyOrder.sellerName);
	});

	const storeNameElement = await waitForElement(() => {
		return ordersComponent.getByText(dummyOrder.storeName);
	});

	const totalAmountElement = await waitForElement(() => {
		return ordersComponent.getByText(dummyOrder.totalAmount.toString());
	});
	const orderStatusElement = await waitForElement(() => {
		return ordersComponent.getByText(dummyOrder.orderStatus);
	});

	expect(ordersServiceMock.getOrders).toHaveBeenCalledTimes(1);
	expect(orderNumberElement).toBeInTheDocument();
	expect(buyerNameElement).toBeInTheDocument();
	expect(sellerNameElement).toBeInTheDocument();
	expect(storeNameElement).toBeInTheDocument();
	expect(totalAmountElement).toBeInTheDocument();
	expect(orderStatusElement).toBeInTheDocument();
});
