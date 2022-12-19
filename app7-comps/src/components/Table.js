import React from "react";

export default function Table({ data, config, keyFn }) {
	const renderedHeaders = config.map((column) => {
		if (column.header) {
			return (
				<React.Fragment key={column.label}>
					{column.header()}
				</React.Fragment>
			);
		}
		return <th key={column.label}>{column.label}</th>;
	});

	// Displays only fixed number of columns
	//
	// const renderedRows = data.map((row) => {
	// 	return (
	// 		<tr key={row.name} className='border-b'>
	// 			<td className='p-3'>{row.name}</td>
	// 			<td className='p-3'>
	// 				<div className={`p-3 m-2 ${row.color}`}></div>
	// 			</td>
	// 			<td className='p-3'>{row.score}</td>
	// 		</tr>
	// 	);
	// });

	const renderedRows = data.map((dataObj) => {
		const renderedCells = config.map((configObj) => {
			return (
				<td key={configObj.label} className='p-3'>
					{configObj.render(dataObj)}
				</td>
			);
		});

		return (
			<tr className='border-b' key={keyFn(dataObj)}>
				{/* <td className='p-3'>{config[0].render(dataObj)}</td>
				<td className='p-3'>{config[1].render(dataObj)}</td>
				<td className='p-3'>{config[2].render(dataObj)}</td> */}
				{renderedCells}
			</tr>
		);
	});

	return (
		<table className='table-auto border-spacing-2'>
			<thead>
				<tr className='border-b-2'>{renderedHeaders}</tr>
			</thead>
			<tbody>{renderedRows}</tbody>
		</table>
	);
}
