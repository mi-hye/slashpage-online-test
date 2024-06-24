import ElevatorBox from "./ElevatorBox";

const TOTAL_FLOOR = 15;

function Elevator() {
	return (
		<div className="h-full w-14 border border-black flex flex-col justify-evenly">
			{Array.from({ length: TOTAL_FLOOR }, (_, i) => (
				<ElevatorBox key={i + 1} floor={i + 1} />
			))}
		</div>
	);
}

export default Elevator;
