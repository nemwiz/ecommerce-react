import {Component} from "react";
import React from "react";
import {Order} from "../domain/order";
import OrdersService from "../services/orders.service";
import DataTable from "../data-table/DataTable";

interface OrdersState {
    orders: Order[];
}

export default class Orders extends Component<object, OrdersState> {

    constructor(props: any) {
        super(props);
        this.state = {
            orders: []
        };
    }

    render() {
        if (this.state.orders.length === 0) {
            return <div>Loading...</div>
        } else {
            return (
                <DataTable headers={Object.keys(this.state.orders[0])} data={this.state.orders}/>
            )
        }
    }

    componentDidMount(): void {
        OrdersService.getOrders().then((orders: Order[]) => {
                this.setState({
                    orders: orders
                });
            }
        )

    }
}