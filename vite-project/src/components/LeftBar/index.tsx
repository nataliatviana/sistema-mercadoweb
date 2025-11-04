import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // ✅ caminho ajustado
import "./index.css";

export default function LeftBar() {
  return (
    <div className="bg-[#152259] w-60 min-h-screen flex flex-col py-8 gap-20">
      {/* Logo */}
      <div className="flex flex-col items-center gap-3">
        <div className="bg-white p-2 rounded-full shadow-md">
          <img
            width={80}
            height={80}
            src={logo}
            alt="Logo"
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-white text-xl font-bold tracking-wide mt-2">
          Administrativo
        </h2>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-6 w-full px-6">
        <Link
          to="/"
          className="text-white text-lg font-semibold itensBar hover:text-gray-300 transition-colors"
        >
          Dashboard
        </Link>

        <Link
          to="/produtos"
          className="text-white text-lg font-semibold itensBar hover:text-gray-300 transition-colors"
        >
          Produtos
        </Link>

        <Link
          to="/promocoes"
          className="text-white text-lg font-semibold itensBar hover:text-gray-300 transition-colors"
        >
          Promoções
        </Link>

        <Link
          to="/usuarios"
          className="text-white text-lg font-semibold itensBar hover:text-gray-300 transition-colors"
        >
          Usuários
        </Link>
      </div>
    </div>
  );
}
