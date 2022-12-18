import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload } from "react-icons/go";

export default function ButtonPage() {
	return (
		<div>
			<div>
				<Button primary rounded className={"mb-2"}>
					<GoBell />
					Primary
				</Button>
			</div>
			<div>
				<Button secondary outline>
					<GoCloudDownload />
					Secondary
				</Button>
			</div>
			<div>
				<Button warning>Warning</Button>
			</div>
			<div>
				<Button success>Success</Button>
			</div>
			<div>
				<Button danger>Danger</Button>
			</div>
		</div>
	);
}
