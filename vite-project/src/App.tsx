import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Produtos from "./pages/Products/Produtos";
import Promocoes from "./pages/sales/Promocoes";
import Usuarios from "./pages/users";
import NewUser from "./pages/users/new";
import EditUser from "./pages/users/edit";
import ViewUser from "./pages/users/view";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/promocoes" element={<Promocoes />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/usuarios/novo" element={<NewUser/>}/>
      <Route path="/usuarios/edit/:id" element={<EditUser/>} />
      <Route path="/usuarios/view/:id" element={<ViewUser/>}/>
    </Routes>
  );
}