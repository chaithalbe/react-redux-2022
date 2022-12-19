import React from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/useSort";
import Table from "./Table";

export default function SortableTable(props) {
	const { config, data } = props;
	const { sortBy, sortOrder, sortedData, setSortColumn } = useSort({
		data,
		config,
	});

	const updatedConfig = config.map((configObj) => {
		if (!configObj.sortValue) {
			return configObj;
		}

		return {
			...configObj,
			header: () => (
				<th
					className='cursor-pointer hover:bg-gray-100'
					onClick={() => setSortColumn(configObj.label)}>
					<div className='flex items-center'>
						{getIcons(configObj.label, sortBy, sortOrder)}
						{configObj.label}
					</div>
				</th>
			),
		};
	});

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
