import LeftBar from "../../components/LeftBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import "./Produtos.css";
import Modal from "../../components/Modal";

export default function Produtos() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<any>(null);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id: string) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setIsOpenModal(false);
      fetchProducts();
    } else {
      alert("Erro ao deletar produto");
    }
  };

  return (
    <div className="flex min-h-screen">
      <LeftBar />
      <main className="flex-1 p-8 flex flex-col gap-5">
        <div className="flex items-center justify-around mt-10 header-title">
          <h1 className="text-2xl font-semibold text-center">Produtos</h1>
          <button
            onClick={() => navigate("/produtos/novo")}
            className="btn btn-primary"
          >
            Adicionar produto
          </button>
        </div>

        {isOpenModal && (
          <Modal
            title="Deseja realmente excluir esse produto?"
            onClose={() => setIsOpenModal(false)}
          >
            <div className="flex flex-col gap-5">
              <div>
                <p>Nome: {productToDelete?.name}</p>
                <p>Preço: {productToDelete?.price}</p>
              </div>
              <div className="flex justify-around">
                <button
                  className="btn btn-info"
                  onClick={() => deleteProduct(productToDelete._id)}
                >
                  Sim
                </button>
                <button
                  onClick={() => setIsOpenModal(false)}
                  className="btn btn-error"
                >
                  Não
                </button>
              </div>
            </div>
          </Modal>
        )}

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço (R$)</th>
                <th>Preço Promoção</th>
                <th>Categoria</th>
                <th>Ativo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>{p.price.toFixed(2)}</td>
                  <td>{p.promoPrice.toFixed(2)}</td>
                  <td>{p.type}</td>
                  <td>
                    <input type="checkbox" checked={p.isActive} readOnly className="toggle" />
                  </td>
                  <td className="flex gap-3 justify-center">
                    <MdDelete
                      onClick={() => {
                        setProductToDelete(p);
                        setIsOpenModal(true);
                      }}
                      cursor={"pointer"}
                      size={25}
                    />
                    <MdModeEditOutline
                      cursor={"pointer"}
                      onClick={() => navigate(`/produtos/edit/${p._id}`)}
                      size={25}
                    />
                    <GrFormView
                      cursor={"pointer"}
                      onClick={() => navigate(`/produtos/view/${p._id}`)}
                      size={25}
                    />
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
