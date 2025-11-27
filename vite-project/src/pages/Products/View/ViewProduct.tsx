import { useParams } from "react-router-dom";
import ProductForm from "../FormProduct";
import { useEffect } from "react";
import { useState } from "react";
import type { FormEvent } from "react";

export default function ViewProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProduct = async () => {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        setProduct(data);
        };

        if (id) fetchProduct();
    }, [id]);

    if (!product) return <div>Carregando...</div>;

    return <ProductForm title="Visualizar produto" product={product} />;
}