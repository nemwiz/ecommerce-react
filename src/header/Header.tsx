import React, { FunctionComponent } from 'react';
import Button from '../button/Button';
import './header.css';

const Header: FunctionComponent = () => {
	return (
		<header>
			<div>E commerce app</div>
			<div className={'menu'}>
				<Button label={'All orders'} route={'/orders'} />
				<Button label={'Add new order'} route={'/order-new'} />
				<Button label={'Invoices'} route={'/invoices'} />
			</div>
		</header>
	);
};

export default Header;
