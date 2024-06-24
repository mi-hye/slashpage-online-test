import { useState } from "react";

interface PropsType {
	floor: number;
	setTargetFloor: React.Dispatch<
		React.SetStateAction<number>
	>;
	isAllActive: boolean;
}

const activeStyle = "font-bold text-red-500";

function FloorButton({
	floor,
	setTargetFloor,
	isAllActive,
}: PropsType) {
	const [active, setActive] = useState(false);

	const handleActive = () => {
		setActive(true);
		setTargetFloor(floor);
	};

	return (
		<div
			className={`cursor-pointer h-full flex-center border-r w-full ${
				active ? activeStyle : ""
			} ${isAllActive ? "text-black" : ""}`}
			onClick={handleActive}
		>
			{floor}
		</div>
	);
}

export default FloorButton;
