import React, {Component} from 'react';
import Button from "../button/Button";
import './header.css'


export default class Header extends Component {
    render() {
        return <header>
            <div>E commerce app</div>
            <div className={'menu'}>
                <Button label={'All orders'} route={'/orders'}/>
                <Button label={'Add new order'} route={'order-new'}/>
                <Button label={'Invoices'} route={'invoices'}/>
            </div>
        </header>
    }
}