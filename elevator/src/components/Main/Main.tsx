import Elevator from "./Elevator";

const ELEVATOR_NUM = 3;
function Main() {
	return (
		<main className="w-[30%] h-[80%] ml-5 flex justify-between">
			{Array.from({ length: ELEVATOR_NUM }, (_, i) => (
				<Elevator key={i + 1} />
			))}
		</main>
	);
}

export default Main;
