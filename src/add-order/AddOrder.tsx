import React, { FunctionComponent, useEffect, useState } from 'react';
import { DataTable } from '../data-table/DataTable';
import { Item } from '../domain/item';
import './add-order.css';
import Button from '../button/Button';
import { Dictionary } from '../domain/dictionary';

interface OrderState {
	items: Item[];
	sellerName: string;
	buyerName: string;
	storeName: string;
}

export const AddOrder: FunctionComponent = () => {
	const [order, addOrder] = useState<OrderState>({
		items: [],
		sellerName: '',
		buyerName: '',
		storeName: ''
	});
	const [selectedItem, selectItem] = useState<Item>();
	const [allItems, updateAllItems] = useState<Dictionary<Item>>(
		getStoreItems()
	);

	useEffect(() => {
		const updatedItems: Dictionary<Item> = {};

		Object.keys(allItems).forEach((key: string) => {
			if (selectedItem && key === selectedItem.itemId.toString()) {
				updatedItems[key] = selectedItem;
			} else {
				updatedItems[key] = allItems[key];
			}
		});

		updateAllItems(updatedItems);
	}, [selectedItem]);

	return (
		<div className="items">
			<DataTable headers={Object.keys(getStoreItems()['2351']).concat(['Add'])}>
				{Object.keys(allItems).map(itemId => (
					<tr key={itemId}>
						<td>{itemId}</td>
						<td>{allItems[itemId].itemName}</td>
						<td>{allItems[itemId].category}</td>
						<td>{allItems[itemId].pricePerPiece}</td>
						<td>{allItems[itemId].qty}</td>
						<td>
							<Button
								label={'Add item'}
								clickFunction={() =>
									selectItem({
										...allItems[itemId],
										...{ qty: allItems[itemId].qty + 1 }
									})
								}
							/>
						</td>
					</tr>
				))}
			</DataTable>
		</div>
	);
};

const getStoreItems = (): Dictionary<Item> => {
	const items = [
		{
			itemId: 2351,
			itemName: 'Amazon 9W USB Charger 25% Off',
			category: 'Electronics',
			pricePerPiece: 14.99,
			qty: 0
		},
		{
			itemId: 5313,
			itemName: 'KONHILL Women’s Lightweight Walking Shoe',
			category: 'Clothing',
			pricePerPiece: 24.64,
			qty: 0
		},
		{
			itemId: 4422,
			itemName: 'Pluteck Non Ticking Analog Alarm Clock with Nightlight',
			category: 'Furniture',
			pricePerPiece: 5.99,
			qty: 0
		},
		{
			itemId: 8854,
			itemName: 'Premium Retainer Cleaner Tablets',
			category: 'Utilities',
			pricePerPiece: 14.62,
			qty: 0
		},
		{
			itemId: 1239,
			itemName: 'Juicer Juice Extractor, Aicook 3 Wide Mouth Stainless Steel',
			category: 'Electronics',
			pricePerPiece: 35.66,
			qty: 0
		},
		{
			itemId: 3812,
			itemName: 'Samsung Full HD TV 24 inch',
			category: 'Electronics',
			pricePerPiece: 243.33,
			qty: 0
		},
		{
			itemId: 1531,
			itemName: 'Kindle Paperwhite 7th edition',
			category: 'Electronics',
			pricePerPiece: 122.88,
			qty: 0
		},
		{
			itemId: 7312,
			itemName: 'Introduction to Python programming',
			category: 'Books',
			pricePerPiece: 55,
			qty: 0
		}
	];

	const itemsAsDictionary: Dictionary<Item> = {};

	items.forEach((item: Item) => {
		itemsAsDictionary[item.itemId] = item;
	});

	return itemsAsDictionary;
};
