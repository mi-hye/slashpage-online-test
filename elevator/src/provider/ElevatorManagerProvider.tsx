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
	target: React.MutableRefObject<string> | null;
	manager: { [key: string]: number };
	currentActive: { [key: string]: number };
	isAllActive: boolean;
	setTargetFloor: Dispatch<SetStateAction<number>>;
}

const defaultContext: ElevatorContextType = {
	target: null,
	manager: {},
	currentActive: {},
	isAllActive: false,
	setTargetFloor: () => {},
};
const ElevatorContext =
	createContext<ElevatorContextType>(defaultContext);

function ElevatorManagerProvider({ children }: Props) {
	const elevatorManager = useElevatorManager();

	return (
		<ElevatorContext.Provider value={elevatorManager}>
			{children}
		</ElevatorContext.Provider>
	);
}

export { ElevatorContext, ElevatorManagerProvider };
