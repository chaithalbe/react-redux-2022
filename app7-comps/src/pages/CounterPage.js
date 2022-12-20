import produce from "immer";
import React, { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const UPDATE_VALUETOADD = "UPDATE_VALUETOADD";
const ADD_TO_COUNT = "ADD_TO_COUNT";

const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			state.count = state.count + 1;
			return;
		case DECREMENT_COUNT:
			state.count = state.count - 1;
			return;
		case UPDATE_VALUETOADD:
			state.valueToAdd = action.payload;
			return;
		case ADD_TO_COUNT:
			state.count = state.count + state.valueToAdd;
			state.valueToAdd = 0;
			return;
		default:
			return;
	}
};

export default function CounterPage({ initialCount }) {
	// MOVED TO useCounter HOOK
	// const [count, setCount] = useState(initialCount);

	// useEffect(() => {
	// 	console.log(count);
	// }, [count]);

	// const handleClick = () => {
	// 	setCount(count + 1);
	// };

	// const { count, increment } = useCounter(initialCount);

	const [state, dispatch] = useReducer(produce(reducer), {
		count: initialCount,
		valueToAdd: 0,
	});

	const increment = () => {
		dispatch({ type: INCREMENT_COUNT });
	};

	const decrement = () => {
		dispatch({ type: DECREMENT_COUNT });
	};

	const handleChange = (e) => {
		const value = parseInt(e.target.value) || 0;
		dispatch({ type: UPDATE_VALUETOADD, payload: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ADD_TO_COUNT });
	};

	return (
		<Panel>
			<h1 className='text-lg'>Count is {state.count}</h1>
			<div className='flex flex-row'>
				<Button onClick={increment}>Increment</Button>
				<Button onClick={decrement}>Decrement</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					value={state.valueToAdd}
					onChange={handleChange}
					type='number'
					className='p-1 m-3 bg-gray-50 border border-gray-300'
				/>
				<Button>Add it!</Button>
			</form>
		</Panel>
	);
}
