import { useState } from "react";

interface PropsType {
	floor: number;
}

const activeStyle = "font-bold text-red-500";

function FloorButton({ floor }: PropsType) {
	const [active, setActive] = useState(false);

	const handleActive = () => setActive(true);
	return (
		<div
			className={`cursor-pointer h-full flex-center border-r w-full ${
				active ? activeStyle : ""
			}`}
			onClick={handleActive}
		>
			{floor}
		</div>
	);
}

export default FloorButton;
