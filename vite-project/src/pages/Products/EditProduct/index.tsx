import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductForm from "../FormProduct";

export default function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProduct = async () => {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        setProduct(data);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p>Carregando...</p>;

    return <ProductForm title="Editar Produto" product={product} />;
}
