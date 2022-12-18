import React from "react";
import className from "classnames";

export default function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	...rest
}) {
	return (
		<button
			{...rest}
			className={className(
				rest.className,
				"flex items-center gap-1 border px-3 py-1.5",
				{
					"bg-blue-500 border-blue-500 text-white": primary,
					"bg-gray-900 border-gray-900 text-white": secondary,
					"bg-green-500 border-green-500 text-white": success,
					"bg-yellow-400 border-yellow-400 text-white": warning,
					"bg-red-500 border-red-500 text-white": danger,
					"rounded-full": rounded,
					"bg-white": outline,
					"text-blue-500": outline && primary,
					"text-gray-900": outline && secondary,
					"text-green-500": outline && success,
					"text-yellow-400": outline && warning,
					"text-red-500": outline && danger,
				}
			)}>
			{children}
		</button>
	);
}

Button.propTypes = {
	checkVariants: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);

		if (count > 1) {
			return new Error(
				"Only one of primary, secondary, success, warning and danger can be true."
			);
		}
	},
};
