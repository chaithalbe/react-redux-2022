import React, { useState } from "react";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

export default function SortableTable(props) {
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);
	const { config, data } = props;

	const handleClick = (label) => {
		if (sortBy && label !== sortBy) {
			setSortOrder("asc");
			setSortBy(label);
			return;
		}

		if (sortOrder === null) {
			setSortOrder("asc");
			setSortBy(label);
		} else if (sortOrder === "asc") {
			setSortOrder("desc");
			setSortBy(label);
		} else if (sortOrder === "desc") {
			setSortOrder(null);
			setSortBy(null);
		}
	};

	const updatedConfig = config.map((configObj) => {
		if (!configObj.sortValue) {
			return configObj;
		}

		return {
			...configObj,
			header: () => (
				<th
					className='cursor-pointer hover:bg-gray-100'
					onClick={() => handleClick(configObj.label)}>
					<div className='flex items-center'>
						{getIcons(configObj.label, sortBy, sortOrder)}
						{configObj.label}
					</div>
				</th>
			),
		};
	});

	// Only sort data if sortOrder && sortBy are not null
	// Make a copy of the 'data' prop
	// Find the correct sortValue function and use it for sorting
	let sortedData = data;
	if (sortOrder && sortBy) {
		const { sortValue } = config.find(
			(configObj) => configObj.label === sortBy
		);
		sortedData = [...data].sort((a, b) => {
			const valueA = sortValue(a);
			const valueB = sortValue(b);
			const reverseOrder = sortOrder === "asc" ? 1 : -1;

			if (typeof valueA === "string") {
				return valueA.localeCompare(valueB) * reverseOrder;
			} else {
				return (valueA - valueB) * reverseOrder;
			}
		});
	}

	return (
		<div>
			<Table {...props} config={updatedConfig} data={sortedData} />
		</div>
	);
}

function getIcons(label, sortBy, sortOrder) {
	if (label !== sortBy) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	}

	if (sortOrder === null) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	} else if (sortOrder === "asc") {
		return (
			<div>
				<GoArrowSmallUp />
			</div>
		);
	} else if (sortOrder === "desc") {
		return (
			<div>
				<GoArrowSmallDown />
			</div>
		);
	}
}
