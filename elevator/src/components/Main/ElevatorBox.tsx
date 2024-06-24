import { useState } from "react";

interface PropsType {
	floor: number;
}

const activeStyle = "font-bold text-red-500 border-red-500";

function ElevatorBox({ floor }: PropsType) {
	const [active, setActive] = useState(false);

	const handleActive = () => setActive(true);

	return (
		<div
			className={`m-0.5 border-2  flex-center h-full ${
				active ? activeStyle : "border-black"
			}`}
		>
			{floor}
		</div>
	);
}

export default ElevatorBox;
