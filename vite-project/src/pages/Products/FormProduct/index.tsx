import LeftBar from "../../../components/LeftBar";
import type { Product } from "../../../types/product.type";
import "./index.css";
import { useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ProductFormProps {
    product?: Product;
    onSubmit?: (data: Product) => void;
    title: string;
}

export default function ProductForm(props: ProductFormProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const isView = location.pathname.toLowerCase().includes("view");

    const [formData, setFormData] = useState({
        name: props.product?.name ?? "",
        price: props.product?.price ?? 0,
        stock: props.product?.stock ?? 0,
        category: props.product?.category ?? "",
        isActive: props.product?.isActive ?? true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.onSubmit)
            props.onSubmit({
                id: props.product?.id || 1,
                name: formData.name,
                price: Number(formData.price),
                stock: Number(formData.stock),
                category: formData.category,
                isActive: formData.isActive
            });
    };

    return (
        <div className="flex min-h-screen">
            <LeftBar />
            <main className="flex-1 p-8 flex flex-col items-center">
                <h1 className="text-2xl font-semibold title">{props.title}</h1>

                <form onSubmit={handleSubmit} className="form-funcionario rounded-2xl p-10 flex flex-col gap-6 w-full max-w-lg">
                    <div className="flex flex-col">
                        <label htmlFor="name">Nome</label>
                        <input id="name" name="name" value={formData.name} onChange={handleChange}
                            type="text" placeholder="Digite o nome do produto"
                            className="input input-bordered" required disabled={isView} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="price">Preço</label>
                        <input id="price" name="price" value={formData.price} onChange={handleChange}
                            type="number" placeholder="Digite o preço"
                            className="input input-bordered" required disabled={isView} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="stock">Estoque</label>
                        <input id="stock" name="stock" value={formData.stock} onChange={handleChange}
                            type="number" placeholder="Quantidade em estoque"
                            className="input input-bordered" disabled={isView} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="category">Categoria</label>
                        <input id="category" name="category" value={formData.category} onChange={handleChange}
                            type="text" placeholder="Categoria do produto"
                            className="input input-bordered" disabled={isView} />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="isActive">Ativo</label>
                        <input id="isActive" name="isActive" type="checkbox"
                            checked={formData.isActive} onChange={handleChange}
                            className="toggle" disabled={isView} />
                    </div>

                    <div className="flex justify-between mt-6">
                        {!isView && (
                            <button type="submit" className="btn btn-success">
                                Salvar
                            </button>
                        )}
                        <button type="button" onClick={() => navigate("/produtos")} className="btn btn-error">
                            Voltar
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
