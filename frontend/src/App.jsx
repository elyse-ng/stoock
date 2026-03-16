import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; 
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Trending from "./pages/Trending";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Trending" element={<Trending />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
