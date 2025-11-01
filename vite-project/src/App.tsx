import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Produtos from "./pages/Products/Produtos"; // tela de listagem de produtos
import NewProduct from "./pages/Products/NewProduct"; // criar produto
import EditProduct from "./pages/Products/EditProduct"; // editar produto
import Promocoes from "./pages/sales/Promocoes";
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

      {/* Usuários */}
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/usuarios/novo" element={<NewUser />} />
      <Route path="/usuarios/edit/:id" element={<EditUser />} />
      <Route path="/usuarios/view/:id" element={<ViewUser />} />
    </Routes>
  );
}
