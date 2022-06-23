import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Today from "./components/Home/Today";
import Archive from "./components/Home/Archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="today" element={<Today></Today>}></Route>
          <Route path="archive" element={<Archive></Archive>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
