import { useEffect, useRef, useState } from "react";

interface ObjectType {
	[key: string]: number;
}

function diffFloor(
	manager: ObjectType,
	targetFloor: number,
	unActiveElevators: string[]
) {
	const result = unActiveElevators.map((elevator) =>
		Math.abs(manager[elevator] - targetFloor)
	);
	return unActiveElevators[
		result.indexOf(Math.min(...result))
	];
}

function findTargetElevator(
	manager: ObjectType,
	currentActive: ObjectType,
	targetFloor: number
) {
	const unActiveElevators = Object.keys(manager).reduce<
		string[]
	>((prev, elevator) => {
		if (!currentActive[elevator]) prev.push(elevator);
		return prev;
	}, []);

	if (!unActiveElevators.length) return "";
	if (unActiveElevators.length === 1)
		return unActiveElevators[0];

	return diffFloor(manager, targetFloor, unActiveElevators);
}

function useElevatorManager() {
	const target = useRef("");
	const [targetFloor, setTargetFloor] = useState(0);
	const [manager, setManager] = useState<ObjectType>({
		firstElevator: 1,
		secondElevator: 1,
		thirdElevator: 1,
	});
	const [currentActive, setCurrentActive] = useState({});
	const [isAllActive, setIsAllActive] = useState(false);

	useEffect(() => {
		if (!targetFloor) return;

		target.current = findTargetElevator(
			manager,
			currentActive,
			targetFloor
		);

		const targetStr = target.current;

		if (targetStr) {
			const currFloor = manager[targetStr];
			const delay =
				Math.abs(currFloor - targetFloor) * 1000;
			const interval = setInterval(() => {
				setManager((prev) => ({
					...prev,
					[targetStr]:
						currFloor < targetFloor
							? prev[targetStr] + 1
							: prev[targetStr] - 1,
				}));
			}, 1000);
			setTimeout(() => {
				clearInterval(interval);
				setCurrentActive((prev) => {
					const newState: { [key: string]: number } = {
						...prev,
					};
					delete newState[targetStr];
					return newState;
				});
			}, delay);

			setCurrentActive((prev) => ({
				...prev,
				[targetStr]: targetFloor,
			}));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [targetFloor]);

	useEffect(() => {
		const currNum = Object.keys(currentActive).length;
		if (currNum === 3) {
			setIsAllActive(true);
		} else setIsAllActive(false);
	}, [currentActive]);

	return {
		target,
		manager,
		currentActive,
		isAllActive,
		setTargetFloor,
	};
}

export default useElevatorManager;
