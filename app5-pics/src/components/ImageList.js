import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
	const renderImages = images.map((image) => (
		<ImageShow image={image} key={image.id} />
	));
	return <div className='image-list'>{renderImages}</div>;
}

export default ImageList;
