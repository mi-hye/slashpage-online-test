import FloorButton from "./FloorButton";

const TOTAL_FLOOR = 15;

function Floor() {
	return (
		<header className="my-5 w-[90%] h-13 flex">
			<span className="w-10 mx-5 flex-center font-semibold">
				호출
			</span>
			<div className="w-full h-full flex justify-evenly border border-r-0">
				{Array.from({ length: TOTAL_FLOOR }, (_, i) => (
					<FloorButton key={i + 1} floor={i + 1} />
				))}
			</div>
		</header>
	);
}

export default Floor;
