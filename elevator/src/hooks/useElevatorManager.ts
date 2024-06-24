import { useEffect, useRef, useState } from "react";

interface PropsType {
	//DELETE
	targetFloor: number;
}
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
	//배열에 아무런 값도 없을때 모든 엘베 움직임
	if (unActiveElevators.length === 1)
		//한개면 해당 배열 출력
		return unActiveElevators[0];

	//두개 이상이면 타겟이랑 비교
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
			//타겟 존재 =해당 엘베 가동
			setIsAllActive(false);

			const currFloor = manager[targetStr];
			const delay =
				Math.abs(currFloor - targetFloor) * 1000;
			const interval = setInterval(() => {
				setManager((prev) => ({
					...prev,
					[targetStr]: prev[targetStr] + 1,
				}));
			}, 1000);
			setTimeout(() => {
				clearInterval(interval);
			}, delay);

			setCurrentActive((prev) => ({
				...prev,
				[targetStr]: targetStr,
			}));
		} else setIsAllActive(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [targetFloor]);

	return { manager, isAllActive, setTargetFloor };
}

export default useElevatorManager;
