import { Link } from "react-router-dom";
import "./index.css";

export default function LeftBar() {
  return (
    <div className="bg-[#152259] w-60 min-h-screen flex flex-col py-8 gap-20">
      <div className="flex flex-col items-center gap-3 logo">
        <img width={65} height={65} src="../src/assets/logo.png" alt="Logo" />
        <h2 className="text-white text-lg font-semibold">Administrativo</h2>
      </div>

      <div className="flex flex-col gap-6 w-full px-6">
        <Link to="/" className="text-white size-14 font-semibold itensBar hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/produtos" className="text-white size-14 font-semibold itensBar hover:text-gray-300">
          Produtos
        </Link>
        <Link to="/usuarios" className="text-white size-14 font-semibold itensBar hover:text-gray-300">
          Usuários
        </Link>
      </div>
    </div>
  );
}
