import { useEffect, useState } from "react";

interface PropsType {
	floor: number;
	currentFloor: number;
}

const activeStyle = "font-bold text-red-500 border-red-500";

function ElevatorBox({ floor, currentFloor }: PropsType) {
	const [active, setActive] = useState(false);
	
	useEffect(() => {
		if (currentFloor === floor) {
			setActive(true);
			setTimeout(() => setActive(false), 1000);
		}
	}, [currentFloor, floor]);

	return (
		<>
			{currentFloor === floor ? (
				<div
					className={`m-0.5 border-2  flex-center h-full ${
						active ? activeStyle : "border-black"
					}`}
				>
					{floor}
				</div>
			) : (
				<div className="m-0.5 h-full"></div>
			)}
		</>
	);
}

export default ElevatorBox;
