import ElevatorBox from "./ElevatorBox";

interface PropsType {
	movingFloor: number | null;
}
const TOTAL_FLOOR = 15;

function Elevator({ movingFloor }: PropsType) {
	return (
		<div className="h-full w-14 border border-black flex flex-col-reverse justify-evenly">
			{Array.from({ length: TOTAL_FLOOR }, (_, i) => (
				<ElevatorBox
					key={i + 1}
					floor={i + 1}
					currentFloor={movingFloor ? movingFloor : 1}
				/>
			))}
		</div>
	);
}

export default Elevator;
