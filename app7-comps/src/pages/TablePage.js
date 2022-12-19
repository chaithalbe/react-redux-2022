import React from "react";
import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

const data = [
	{ name: "Orange", color: "bg-orange-500", score: 5 },
	{ name: "Apple", color: "bg-red-500", score: 3 },
	{ name: "Banana", color: "bg-yellow-500", score: 1 },
	{ name: "Lime", color: "bg-green-500", score: 4 },
	{ name: "Cherry", color: "bg-red-700", score: 2 },
];

const config = [
	{
		label: "Fruits",
		render: (fruit) => fruit.name,
		sortValue: (fruit) => fruit.name,
	},
	{
		label: "Color",
		render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
	},
	{
		label: "Score",
		render: (fruit) => fruit.score,
		sortValue: (fruit) => fruit.score, // check sorting.js to understand what this is
	},
	{
		label: "Score Squared",
		render: (fruit) => fruit.score ** 2,
		sortValue: (fruit) => fruit.score ** 2, // check sorting.js to understand what this is
	},
];

const keyFn = (fruit) => {
	return fruit.name;
};

export default function TablePage() {
	return (
		<div>
			<h1 className='border-b text-xl'>Table</h1>
			<br />
			<Table data={data} config={config} keyFn={keyFn} />
			<br />
			<h1 className='border-b text-xl'>Sortable Table</h1>
			<br />
			<SortableTable data={data} config={config} keyFn={keyFn} />
		</div>
	);
}
