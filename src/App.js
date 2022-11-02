import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Component1 from "./components/Component1";
import DishDetails from "./components/Dishes/DishDetails"
import Test from "./components/Test/Test"
import {Photos} from "./components/Test/Photos"
import TestPost from "./components/Test/TestPost"
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Component1 />} />
			<Route path="/dishdetails" element={<DishDetails />} />
			<Route path="/test" element={<Test/>} />
			<Route path="/photos" element={<Photos/>} />
			<Route path="/testpost" element={<TestPost/>} />
		</Routes>
	);
}

export default App;
