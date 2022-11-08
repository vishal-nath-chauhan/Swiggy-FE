import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import DishDetails from "./components/Dishes/DishDetails"
import Test from "./components/Test/Test"
import {Photos} from "./components/Test/Photos"
import TestPost from "./components/Test/TestPost"
import Parent from "./components/Parent";
import Formdata from "./components/Test/Formdata";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Component2 />} />
			<Route path="/dishdetails" element={<DishDetails />} />
			<Route path="/test" element={<Test/>} />
			<Route path="/photos" element={<Photos/>} />
			<Route path="/photos/:albumId" element={<Photos/>} />
			<Route path="/testpost" element={<TestPost/>} />
		    <Route path="/formdata" element={<Formdata/>} />
		</Routes>
	);
}

export default App;
