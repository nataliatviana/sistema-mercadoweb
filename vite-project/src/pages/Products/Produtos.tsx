import LeftBar from "../../components/LeftBar";
import { products } from "../../types/product.type";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Eye } from "lucide-react";

export default function Produtos() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <LeftBar />
      <main className="flex-1 p-8 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Produtos</h1>
          <button
            onClick={() => navigate("/produtos/novo")}
            className="btn btn-primary"
          >
            Adicionar produto
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço (R$)</th>
                <th>Estoque</th>
                <th>Categoria</th>
                <th>Ativo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price.toFixed(2)}</td>
                  <td>{p.stock}</td>
                  <td>{p.category}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={p.isActive}
                      readOnly
                      className="toggle"
                    />
                  </td>
                  <td className="flex gap-3">
                    <button
                      onClick={() => navigate(`/produtos/edit/${p.id}`)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                    <button
                      onClick={() => navigate(`/produtos/view/${p.id}`)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
