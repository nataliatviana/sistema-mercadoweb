import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Produtos from "./pages/Products/Produtos";
import NewProduct from "./pages/Products/NewProduct";
import EditProduct from "./pages/Products/EditProduct";
import Promocoes from "./pages/sales/Promocoes";
import ViewProduct from "./pages/Products/View/ViewProduct";
import Usuarios from "./pages/users";
import NewUser from "./pages/users/new";
import EditUser from "./pages/users/edit";
import ViewUser from "./pages/users/view";

export default function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Produtos */}
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/novo" element={<NewProduct />} />
      <Route path="/produtos/edit/:id" element={<EditProduct />} />

      {/* Promoções */}
      <Route path="/promocoes" element={<Promocoes />} />
      <Route path="/produtos/view/:id" element={<ViewProduct />} />

      {/* Usuários */}
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/usuarios/novo" element={<NewUser />} />
      <Route path="/usuarios/edit/:id" element={<EditUser />} />
      <Route path="/usuarios/view/:id" element={<ViewUser />} />
    </Routes>
  );
}
