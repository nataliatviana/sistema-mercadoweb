import LeftBar from "../../components/LeftBar";
import { useState } from "react";
import { products, type Product } from "../../types/product.type";
import { Tag, XCircle } from "lucide-react";
import "./Promocoes.css"

export default function Promocoes() {
  const [produtos, setProdutos] = useState<Product[]>(products);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [descontos, setDescontos] = useState<Record<number, number>>({});

  const aplicarPromocao = (id: number) => {
    const valorDesconto = descontos[id];
    if (!valorDesconto || valorDesconto <= 0) return;

    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, price: p.price - (p.price * valorDesconto) / 100, isPromo: true }
          : p
      )
    );

    setMensagem(`Promoção de ${valorDesconto}% aplicada!`);
    setTimeout(() => setMensagem(null), 2500);
  };

  const removerPromocao = (id: number) => {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, price: products.find((orig) => orig.id === id)?.price || p.price, isPromo: false }
          : p
      )
    );

    setMensagem("Promoção removida!");
    setTimeout(() => setMensagem(null), 2500);
  };

  return (
    <div className="flex min-h-screen">
      <LeftBar />

      <main className="flex-1 p-8 flex flex-col">
        <h1 className="text-2xl font-semibold mb-6">Promoções</h1>

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
                <th>Desconto (%)</th>
                <th>Em Promoção</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={descontos[p.id] || ""}
                      onChange={(e) =>
                        setDescontos({
                          ...descontos,
                          [p.id]: Number(e.target.value),
                        })
                      }
                      placeholder="0"
                      className="input input-bordered w-24"
                    />
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        p.isPromo ? "badge-success" : "badge-ghost"
                      }`}
                    >
                      {p.isPromo ? "Sim" : "Não"}
                    </span>
                  </td>
                  <td className="flex gap-2">
                    <button
                      className="btn btn-sm btn-primary flex items-center gap-1"
                      onClick={() => aplicarPromocao(p.id)}
                    >
                      <Tag size={16} />
                      Aplicar
                    </button>
                    <button
                      className="btn btn-sm btn-error flex items-center gap-1"
                      onClick={() => removerPromocao(p.id)}
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
