import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
	const items = [
		{
			id: "id1",
			label: "label 1",
			content: "content 1",
		},
		{
			id: "id2",
			label: "label 2",
			content: "content 2",
		},
		{
			id: "id3",
			label: "label 3",
			content: "content 3",
		},
	];

	return (
		<div>
			<Accordion items={items} />
		</div>
	);
}

export default AccordionPage;
