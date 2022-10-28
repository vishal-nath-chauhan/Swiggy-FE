import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Component1 from "./components/Component1";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Component1 />} />
		</Routes>
	);
}

export default App;
