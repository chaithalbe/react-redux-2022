import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload } from "react-icons/go";

export default function ButtonPage() {
	return (
		<div>
			<div>
				<Button primary className='mb-1'>
					<GoBell />
					Primary
				</Button>
			</div>
			<div>
				<Button secondary className='mb-1'>
					<GoCloudDownload />
					Secondary
				</Button>
			</div>
			<div>
				<Button warning className='mb-1'>
					Warning
				</Button>
			</div>
			<div>
				<Button success className='mb-1'>
					Success
				</Button>
			</div>
			<div>
				<Button danger className='mb-1'>
					Danger
				</Button>
			</div>
			<div>
				<Button rounded className='mb-1'>
					Rounded
				</Button>
			</div>
			<div>
				<Button outline className='mb-1'>
					Outline
				</Button>
			</div>
			<div>
				<Button className='mb-1'>
					<GoBell /> With Icon
				</Button>
			</div>
			<div>
				<Button className='mb-1'>
					With Icon <GoCloudDownload />
				</Button>
			</div>
		</div>
	);
}
