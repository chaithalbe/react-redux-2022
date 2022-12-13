import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(term);
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<div className='search-bar'>
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term</label>
				<input type='text' value={term} onChange={handleChange} />
			</form>
		</div>
	);
}

export default SearchBar;
