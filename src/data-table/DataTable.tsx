import React, {Component} from "react";
import "./data-table.css"
import Button from "../button/Button";

interface DataTableProps {
    headers: string[];
    data: object[];
    showAddButtonAndQty?: boolean;
    addItemFunction?: any;
}

export default class DataTable extends Component<DataTableProps> {

    constructor(props: DataTableProps) {
        super(props);
    }

    render() {
        return (
            <div className="table-container">
                <table className="data-table">
                    <tbody>
                    <tr>
                        {this.props.headers.map((header: string, index: number) => (
                            <th key={index}>{header}</th>
                        ))}
                        {this.props.showAddButtonAndQty ? <th>Add</th> : null}
                    </tr>
                    {this.props.data.map((item: any, index: number) => (
                        <tr key={index}>
                            {Object.keys(item).map((key: string, index: number) => (
                                <td key={index}>{item[key]}</td>
                            ))}

                            {this.props.showAddButtonAndQty ?
                                <td><Button label={"Add item"} clickFunction={this.props.addItemFunction.bind(this, item)}/></td> : null}

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}