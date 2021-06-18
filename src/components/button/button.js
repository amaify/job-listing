import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, btnNumber, text, to, target, onClick }) => {
	return !link ? (
		<button className={`button button-` + btnNumber} onClick={onClick}>
			{text}
		</button>
	) : (
		<Link className={`button button-` + btnNumber} to={to} target={target}>
			{text}
		</Link>
	);
};

export default Button;
