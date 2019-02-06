import React, {Component} from 'react';
import './button.css'
import {Link} from "react-router-dom";

interface IButton {
    label: string;
    route: string;
}

export default class Button extends Component<IButton> {

    constructor(props: IButton) {
        super(props);
    }

    render() {
        return <Link to={this.props.route}>
            <button className="button-purple">{this.props.label}</button>
        </Link>
    }
}
