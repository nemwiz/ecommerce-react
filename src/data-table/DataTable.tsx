import React, { FunctionComponent } from 'react';
import './data-table.css';
import { TableHeader } from './TableHeader';

interface DataTableProps {
	headers: string[];
}

export const DataTable: FunctionComponent<DataTableProps> = props => {
	return (
		<div className="table-container">
			<table className="data-table">
				<tbody>
					<TableHeader headers={props.headers} />
					{props.children}
				</tbody>
			</table>
		</div>
	);
};
