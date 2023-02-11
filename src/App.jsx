import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
