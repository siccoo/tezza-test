import { Routes, Route } from "react-router-dom";
import Workspace from "./pages/Workspace";
import Clients from "./pages/Clients";
import ClientsProfile from "./pages/ClientsProfile";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients-profile" element={<ClientsProfile />} />
      </Routes>
    </div>
  );
}

export default App;
