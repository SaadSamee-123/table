import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </>
  );
}

export default App;
