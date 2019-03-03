import { FunctionComponent, Fragment } from 'react';
import React from 'react';

interface TableHeaderProps {
	headers: string[];
}

const TableHeader: FunctionComponent<TableHeaderProps> = (props: TableHeaderProps) => {
	return (
		<Fragment>
			<tr>
				{props.headers.map((header: string, index: number) => (
					<th key={index}>{header}</th>
				))}
			</tr>
		</Fragment>
	);
};

export default TableHeader;
