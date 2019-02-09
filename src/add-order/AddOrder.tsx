import React, {Component} from 'react';
import DataTable from "../data-table/DataTable";
import {Item} from "../domain/item";
import "./add-order.css"

interface AddOrderState {
    items: Item[];
    sellerName: string;
    buyerName: string;
    storeName: string;
}

export default class AddOrder extends Component<object, AddOrderState> {

    constructor(props: object) {
        super(props);
        this.state = {
            items: [],
            sellerName: '',
            buyerName: '',
            storeName: ''
        };
    }

    itemsToSend: Map<number, Item> = new Map();

    render() {
        return (
            <div>

                <div className="items">
                    <div className="items-list">
                        {this.state.items.map((item: Item) =>
                            (<div key={item.itemId}>Name: {item.itemName} --- Qty: {item.qty}</div>)
                        )}
                    </div>

                    <DataTable headers={Object.keys(this.getStoreItems()[0])}
                               data={this.getStoreItems()} showAddButtonAndQty={true} addItemFunction={this.addItem}/>
                </div>
            </div>
        )

    }

    addItem = (newItem: Item) => {
        if (this.itemsToSend.has(newItem.itemId)) {
            this.itemsToSend.get(newItem.itemId).qty = this.itemsToSend.get(newItem.itemId).qty + 1;
        } else {
            newItem.qty = 1;
            this.itemsToSend.set(newItem.itemId, newItem)
        }

        this.transformMapIntoItemsArray();
    };

    transformMapIntoItemsArray() {
        const items: Item[] = [];
        this.itemsToSend.forEach(item => {
            items.push(item);
        });
        this.setState({items: items});
    }

    getStoreItems(): Item[] {
        return [
            {itemId: 2351, itemName: 'Amazon 9W USB Charger 25% Off', category: 'Electronics', pricePerPiece: 14.99},
            {
                itemId: 5313,
                itemName: 'KONHILL Women’s Lightweight Walking Shoe',
                category: 'Clothing',
                pricePerPiece: 24.64
            },
            {
                itemId: 4422,
                itemName: 'Pluteck Non Ticking Analog Alarm Clock with Nightlight',
                category: 'Furniture',
                pricePerPiece: 5.99
            },
            {itemId: 8854, itemName: 'Premium Retainer Cleaner Tablets', category: 'Utilities', pricePerPiece: 14.62},
            {
                itemId: 1239,
                itemName: 'Juicer Juice Extractor, Aicook 3 Wide Mouth Stainless Steel',
                category: 'Electronics',
                pricePerPiece: 35.66
            },
            {itemId: 3812, itemName: 'Samsung Full HD TV 24 inch', category: 'Electronics', pricePerPiece: 243.33},
            {itemId: 1531, itemName: 'Kindle Paperwhite 7th edition', category: 'Electronics', pricePerPiece: 122.88},
            {itemId: 7312, itemName: 'Introduction to Python programming', category: 'Books', pricePerPiece: 55},
        ];
    }
}
