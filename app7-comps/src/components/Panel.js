import React from "react";
import classNames from "classnames";

export default function Panel({ children, className, ...rest }) {
	return (
		<div
			{...rest}
			className={classNames(
				"border rounded p-3 shadow bg-white w-full",
				className
			)}>
			{children}
		</div>
	);
}
