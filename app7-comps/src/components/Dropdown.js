import React, { useState, useEffect, useRef } from "react";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";

export default function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (!dropdownRef.current) return;

			if (!dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		// third arg of 'true' is to turn on event capture
		document.addEventListener("click", handler, true);

		return () => {
			document.removeEventListener("click", handler);
			dropdownRef.current = null;
		};
	}, []);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	const handleOptionClick = (option) => {
		setIsOpen(false);
		onChange(option);
	};

	const renderedOptions = options.map((option) => {
		return (
			<div
				className='hover:bg-sky-100 rounded cursor-pointer p-1'
				key={option.value}
				onClick={() => handleOptionClick(option)}>
				{option.label}
			</div>
		);
	});

	return (
		<div className='w-48 relative' ref={dropdownRef}>
			<Panel
				className='flex justify-between items-center cursor-pointer'
				onClick={handleClick}>
				{value?.label || "Select..."}
				<GoChevronDown className='text-lg' />
			</Panel>
			{isOpen && (
				<Panel className='absolute top-full'>{renderedOptions}</Panel>
			)}
		</div>
	);
}
