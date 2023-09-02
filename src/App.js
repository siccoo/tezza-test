import { Routes, Route } from "react-router-dom";
// import 'antd/dist/antd.min.css';
// import Login from "./components/Login";
import SidebarLayout from "./components/Sidebar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SidebarLayout />} />
      </Routes>
    </div>
  );
}

export default App;
