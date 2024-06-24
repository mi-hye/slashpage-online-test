import { useContext } from "react";
import FloorButton from "./FloorButton";
import { ElevatorContext } from "../../provider/ElevatorManagerProvider";

const TOTAL_FLOOR = 15;

function Floor() {
	const { isAllActive, setTargetFloor, currentActive } =
		useContext(ElevatorContext);
	return (
		<header className="my-5 w-[90%] h-13 flex">
			<span className="w-10 mx-5 flex-center font-semibold">
				호출
			</span>
			<div
				className={`w-full h-full flex justify-evenly border border-r-0 ${
					isAllActive
						? "bg-gray-200 text-black pointer-events-none"
						: ""
				} `}
			>
				{Array.from({ length: TOTAL_FLOOR }, (_, i) => (
					<FloorButton
						key={i + 1}
						floor={i + 1}
						setTargetFloor={setTargetFloor}
						isAllActive={isAllActive}
						currentActive={currentActive}
					/>
				))}
			</div>
		</header>
	);
}

export default Floor;
