import React, {Component} from 'react';
import './button.css'
import {Link} from "react-router-dom";

interface IButton {
    label: string;
    route?: string;
    clickFunction?: () => void;
}

export default class Button extends Component<IButton> {

    constructor(props: IButton) {
        super(props);
    }

    render() {
        if (this.props.route) {
            return (
                <Link to={this.props.route}>
                    <button className="button-purple">{this.props.label}</button>
                </Link>
            )
        } else {
            return <button className="button-purple" onClick={this.props.clickFunction}>{this.props.label}</button>
        }
    }
}
