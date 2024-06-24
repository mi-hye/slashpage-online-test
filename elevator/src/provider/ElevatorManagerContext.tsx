import {
	createContext,
	Dispatch,
	SetStateAction,
} from "react";
import useElevatorManager from "../hooks/useElevatorManager";

interface Props {
	children: React.ReactNode;
}
interface ElevatorContextType {
	manager: { [key: string]: number };
	isAllActive: boolean;
	setTargetFloor: Dispatch<SetStateAction<number>>;
}

const ElevatorContext =
	createContext<ElevatorContextType | null>(null);

function ElevatorManagerContext({ children }: Props) {
	const elevatorManager = useElevatorManager();

	return (
		<ElevatorContext.Provider value={elevatorManager}>
			{children}
		</ElevatorContext.Provider>
	);
}

export default ElevatorManagerContext;
