import Main from "./components/Main/Main";
import Floor from "./components/header/FloorBar";

function App() {
	return (
		<div className="w-screen h-screen flex flex-col justify-center min-w-[768px] min-h-[700px]">
			<Floor />
			<Main />
		</div>
	);
}

export default App;
