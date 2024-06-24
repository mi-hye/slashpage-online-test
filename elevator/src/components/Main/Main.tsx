import { useContext } from "react";
import Elevator from "./Elevator";
import { ElevatorContext } from "../../provider/ElevatorManagerProvider";

interface MapType {
	[key: string]: number;
}
interface ArrayMapType {
	[key: string]: string;
}

const ELEVATOR_NUM = 3;
const ELEVATOR_MAP: MapType = {
	firstElevator: 0,
	secondElevator: 1,
	thirdElevator: 2,
};
const ARRAY_MAP: ArrayMapType = {
	0: "firstElevator",
	1: "secondElevator",
	2: "thirdElevator",
};

function Main() {
	const { target, manager } = useContext(ElevatorContext);
	const targetStr = target
		? target.current
		: "firstElevator";
	const targetElevator = ELEVATOR_MAP[targetStr];

	return (
		<main className="w-[30%] h-[80%] ml-5 flex justify-between">
			{Array.from({ length: ELEVATOR_NUM }, (_, i) => (
				<Elevator
					key={i + 1}
					movingFloor={
						targetElevator === i
							? manager[targetStr]
							: manager[ARRAY_MAP[i]]
					}
				/>
			))}
		</main>
	);
}

export default Main;
