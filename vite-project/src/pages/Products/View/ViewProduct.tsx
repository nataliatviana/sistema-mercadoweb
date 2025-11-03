import { useParams } from "react-router-dom";
import ProductForm from "../FormProduct";
import { products } from "../../../types/product.type";

export default function ViewProduct() {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    return (
    <ProductForm
        title="Visualizar produto"
        product={product}
    />
    );
}
