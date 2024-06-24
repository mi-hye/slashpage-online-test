import Main from "./components/Main/Main";
import Floor from "./components/header/FloorBar";
import { ElevatorManagerProvider } from "./provider/ElevatorManagerProvider";

function App() {
	return (
		<div className="w-screen h-screen flex flex-col justify-center min-w-[768px] min-h-[700px]">
			<ElevatorManagerProvider>
				<Floor />
				<Main />
			</ElevatorManagerProvider>
		</div>
	);
}

export default App;
