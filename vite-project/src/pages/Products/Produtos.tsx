import LeftBar from "../../components/LeftBar";
import { products, type Product } from "../../types/product.type";
import { useNavigate } from "react-router-dom";

import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import "./Produtos.css";
import { useState } from "react";
import Modal from "../../components/Modal";

export default function Produtos() {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [product, setProduct] = useState<Product>();

  function openModal(product: Product) {
    setProduct(product);
    setIsOpenModal(true);
  }

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
          <Modal title="Deseja realmente excluir esse produto?" onClose={() => setIsOpenModal(false)}>
            <div className="flex flex-col gap-5">
              <div>
                <p>Nome do produto : {product?.name}</p>
                <p>Preço: {product?.price}</p>
              </div>
              <div className="flex justify-around">
                <button className="btn btn-info">Sim</button>
                <button onClick={() => setIsOpenModal(false)} className="btn btn-error">Não</button>
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
                  <td className="flex gap-3 justify-center">
                    <MdDelete onClick={() => openModal(p)} cursor={"pointer"} size={25} />
                    <MdModeEditOutline cursor={"pointer"} onClick={() => navigate(`/produtos/edit/${p.id}`)} size={25} />
                    <GrFormView cursor={"pointer"} onClick={() => navigate(`/produtos/view/${p.id}`)} size={25} />
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
