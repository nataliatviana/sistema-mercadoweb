import LeftBar from "../../../components/LeftBar";
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";

interface ProductFormProps {
    product?: any;
    title: string;
    }

    export default function ProductForm({ product, title }: ProductFormProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const isView = location.pathname.toLowerCase().includes("view");

    const [formData, setFormData] = useState({
        name: product?.name || "",
        price: product?.price || 0,
        promoPrice: product?.promoPrice || 0,
        type: product?.type || "",
        description: product?.description || "",
        expirationDate: product?.expirationDate
        ? product.expirationDate.slice(0, 10)
        : "",
        isActive: product?.isActive ?? true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const method = product?._id ? "PUT" : "POST";
        const url = product?._id
        ? `http://localhost:3000/products/${product._id}`
        : "http://localhost:3000/products";

        const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        });

        if (res.ok) {
        navigate("/produtos");
        } else {
        alert("Erro ao salvar produto");
        }
    };

    return (
        <div className="flex min-h-screen">
        <LeftBar />
        <main className="flex-1 p-8 flex flex-col items-center">
            <h1 className="text-2xl font-semibold title">{title}</h1>

            <form
            onSubmit={handleSubmit}
            className="form-funcionario rounded-2xl p-10 flex flex-col gap-6 w-full max-w-lg"
            >
            <div className="flex flex-col">
                <label htmlFor="name">Nome</label>
                <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Digite o nome do produto"
                className="input input-bordered"
                required
                disabled={isView}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="price">Preço</label>
                <input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                placeholder="Digite o preço"
                className="input input-bordered"
                required
                disabled={isView}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="promoPrice">Preço em promoção</label>
                <input
                id="promoPrice"
                name="promoPrice"
                value={formData.promoPrice}
                onChange={handleChange}
                type="number"
                placeholder="Preço promocional"
                className="input input-bordered"
                disabled={isView}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="type">Categoria</label>
                <input
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                type="text"
                placeholder="Categoria do produto"
                className="input input-bordered"
                disabled={isView}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="description">Descrição</label>
                <input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                type="text"
                placeholder="Descrição do produto"
                className="input input-bordered"
                disabled={isView}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="expirationDate">Data de validade</label>
                <input
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                type="date"
                className="input input-bordered"
                disabled={isView}
                />
            </div>

            <div className="flex items-center gap-3">
                <label htmlFor="isActive">Ativo</label>
                <input
                id="isActive"
                name="isActive"
                type="checkbox"
                checked={formData.isActive}
                onChange={handleChange}
                className="toggle"
                disabled={isView}
                />
            </div>

            <div className="flex justify-between mt-6">
                {!isView && (
                <button type="submit" className="btn btn-success">
                    Salvar
                </button>
                )}
                <button
                type="button"
                onClick={() => navigate("/produtos")}
                className="btn btn-error"
                >
                Voltar
                </button>
            </div>
            </form>
        </main>
        </div>
    );
}
