import React, { FunctionComponent } from 'react';
import './button.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
	label: string;
	route?: string;
	clickFunction?: () => void;
}

const Button: FunctionComponent<ButtonProps> = props => {
	if (props.route) {
		return (
			<Link to={props.route}>
				<button className="button-purple">{props.label}</button>
			</Link>
		);
	} else {
		return (
			<button className="button-purple" onClick={props.clickFunction}>
				{props.label}
			</button>
		);
	}
};

export default Button;
