import React, {Component} from "react";
import "./data-table.css"

interface DataTableProps {
    headers: string[];
    data: object[];
}

export default class DataTable extends Component<DataTableProps> {

    constructor(props: DataTableProps) {
        super(props);
    }

    render() {
        return (
            <div className="table-container">
                <table className="data-table">
                    <tr>
                        {this.props.headers.map((header) => (
                            <th>{header}</th>
                        ))}
                    </tr>
                    {this.props.data.map((item: any) => (
                        <tr>
                            {Object.keys(item).map((key: string) => (
                                <td>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}