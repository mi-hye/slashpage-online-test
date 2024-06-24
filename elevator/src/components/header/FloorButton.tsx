import { useState, useEffect } from "react";

interface PropsType {
	floor: number;
	setTargetFloor: React.Dispatch<
		React.SetStateAction<number>
	>;
	isAllActive: boolean;
	currentActive: { [key: string]: number };
}

const activeStyle = "font-bold text-red-500";

function FloorButton({
	floor,
	setTargetFloor,
	isAllActive,
	currentActive,
}: PropsType) {
	const [active, setActive] = useState(false);

	const handleActive = () => {
		setActive(true);
		setTargetFloor(floor);
	};

	useEffect(() => {
		const activeFloor = Object.values(currentActive);
		if (!activeFloor.includes(floor)) setActive(false);
	}, [currentActive, floor]);

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
