import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Today from "./components/Home/Today";
import Archive from "./components/Home/Archive";
import All from "./components/Home/All";
import HomeToDo from "./components/Home/HomeToDo";
import Office from "./components/Home/Office";
import Personal from "./components/Home/Personal.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="today" element={<Today></Today>}></Route>
          <Route path="archive" element={<Archive></Archive>}></Route>
          <Route path="all" element={<All></All>}></Route>
          <Route path="home" element={<HomeToDo></HomeToDo>}></Route>
          <Route path="Office" element={<Office></Office>}></Route>
          <Route path="personal" element={<Personal></Personal>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
