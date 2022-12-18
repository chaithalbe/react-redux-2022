import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

export default function Link({ to, children, className, activeClassName }) {
	const { currentPath, navigate } = useNavigation();

	const handleClick = (event) => {
		// to open app in new tab using Cmd + click or Ctrl + click
		// metaKey === Cmd on Mac
		// ctrlKey === Ctrl on Windows
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		event.preventDefault(); // stops total page refresh by anchor element

		navigate(to);
	};

	return (
		<a
			className={classNames(
				"text-blue-500",
				className,
				currentPath === to && activeClassName
			)}
			href={to}
			onClick={handleClick}>
			{children}
		</a>
	);
}
