import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Produtos from "./pages/Products/Produtos";
import Promocoes from "./pages/sales/Promocoes";
import Usuarios from "./pages/users/Usuarios";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/promocoes" element={<Promocoes />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  );
}
