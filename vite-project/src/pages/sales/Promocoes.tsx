import LeftBar from "../../components/LeftBar";
import { useState, useEffect } from "react";
import { Tag, XCircle } from "lucide-react";
import "./Promocoes.css";

// Interface do produto do backend
interface IProduct {
  _id: string;
  name: string;
  price: number;
  promoPrice: number;   // 0 se não estiver em promoção
  type: string;
  description: string;
  expirationDate: string;
}

export default function Promocoes() {
  const [produtos, setProdutos] = useState<IProduct[]>([]);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [descontos, setDescontos] = useState<Record<string, number>>({});

  const token = localStorage.getItem("token"); // JWT, se estiver usando

  // Carregar produtos do backend
  const loadProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProdutos(data);
    } catch (error: any) {
      setMensagem(error.message);
      setTimeout(() => setMensagem(null), 2500);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const aplicarPromocao = async (id: string) => {
    const discount = descontos[id];
    if (!discount || discount <= 0) return;

    try {
      const res = await fetch(`http://localhost:3000/sales/${id}/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ discount }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setProdutos((prev) =>
        prev.map((p) => (p._id === id ? { ...p, promoPrice: data.promoPrice } : p))
      );

      setMensagem(`Promoção de ${discount}% aplicada!`);
      setTimeout(() => setMensagem(null), 2500);
    } catch (error: any) {
      setMensagem(error.message);
      setTimeout(() => setMensagem(null), 2500);
    }
  };

  const removerPromocao = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/sales/${id}/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setProdutos((prev) =>
        prev.map((p) => (p._id === id ? { ...p, promoPrice: 0 } : p))
      );

      setMensagem("Promoção removida!");
      setTimeout(() => setMensagem(null), 2500);
    } catch (error: any) {
      setMensagem(error.message);
      setTimeout(() => setMensagem(null), 2500);
    }
  };

  return (
    <div className="flex min-h-screen">
      <LeftBar />

      <main className="flex-1 p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center title">Promoções</h1>

        {mensagem && (
          <div className="alert alert-success mb-4 text-center font-medium">
            {mensagem}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço Atual (R$)</th>
                <th>Preço Promoção (R$)</th>
                <th>Desconto (%)</th>
                <th>Em Promoção</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>{p.price.toFixed(2)}</td>
                  <td>{p.promoPrice > 0 ? p.promoPrice.toFixed(2) : "-"}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={descontos[p._id] || ""}
                      onChange={(e) =>
                        setDescontos({
                          ...descontos,
                          [p._id]: Number(e.target.value),
                        })
                      }
                      placeholder="0"
                      className="input input-bordered w-24"
                    />
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        p.promoPrice > 0 ? "badge-success" : "badge-ghost"
                      }`}
                    >
                      {p.promoPrice > 0 ? "Sim" : "Não"}
                    </span>
                  </td>
                  <td className="flex gap-2 justify-center">
                    <button
                      className="btn btn-sm btn-primary flex items-center gap-1"
                      onClick={() => aplicarPromocao(p._id)}
                    >
                      <Tag size={16} />
                      Aplicar
                    </button>
                    <button
                      className="btn btn-sm btn-error flex items-center gap-1"
                      onClick={() => removerPromocao(p._id)}
                    >
                      <XCircle size={16} />
                      Remover
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
