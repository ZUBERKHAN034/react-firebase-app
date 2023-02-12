import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication";
import Navbar from "./components/Navbar";
import Crud from "./components/Crud";
import Storage from "./components/Storage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
