import { useState } from "react";

interface PropsType {
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

	if (!unActiveElevators.length) return null;
	//배열에 아무런 값도 없을때 모든 엘베 움직임
	if (unActiveElevators.length === 1)
		//한개면 해당 배열 출력
		return unActiveElevators[0];

	//두개 이상이면 타겟이랑 비교
	return diffFloor(manager, targetFloor, unActiveElevators);
}

function useElevatorManager({ targetFloor }: PropsType) {
	const [manager, setManager] = useState({
		firstElevator: 1,
		secondElevator: 1,
		thirdElevator: 1,
	});
	const [currentActive, setCurrentActive] = useState({});
	const [isAllActive, setIsAllActive] = useState(false);

	const target = findTargetElevator(
		manager,
		currentActive,
		targetFloor
	);
	if (target)
		//타겟 존재 =해당 엘베 가동
		setCurrentActive((prev) => ({ ...prev, target }));
	else setIsAllActive(true);

	return { manager, setManager, isAllActive };
}

export default useElevatorManager;
