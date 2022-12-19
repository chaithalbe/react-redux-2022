import React from "react";
import Button from "../components/Button";
import useCounter from "../hooks/useCounter";

export default function CounterPage({ initialCount }) {
	// MOVED TO useCounter HOOK
	// const [count, setCount] = useState(initialCount);

	// useEffect(() => {
	// 	console.log(count);
	// }, [count]);

	// const handleClick = () => {
	// 	setCount(count + 1);
	// };

	const { count, increment } = useCounter(initialCount);

	return (
		<div>
			<h1>Count is {count}</h1>
			<Button onClick={increment}>Increment</Button>
		</div>
	);
}
