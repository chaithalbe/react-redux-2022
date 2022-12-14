import { useContext, useState } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
	const { deleteBookById } = useContext(BooksContext);
	const [showEdit, setShowEdit] = useState(false);

	const handleDeleteClick = () => {
		deleteBookById(book.id);
	};

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = () => {
		setShowEdit(false);
	};

	let content = showEdit ? (
		<BookEdit book={book} onSubmit={handleSubmit} />
	) : (
		<h3>{book.title}</h3>
	);

	return (
		<div className='book-show'>
			<img
				alt='books'
				src={`https://picsum.photos/seed/${book.id}/300/200`}
			/>
			<div>{content}</div>
			<div className='actions'>
				<button className='edit' onClick={handleEditClick}>
					Edit
				</button>
				<button className='delete' onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default BookShow;
