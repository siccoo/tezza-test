import { Routes, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </div>
  );
}

export default App;
