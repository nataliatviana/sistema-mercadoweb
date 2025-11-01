import { useParams } from "react-router-dom";
import ProductForm from "../FormProduct";
import { products, type Product } from "../../../types/product.type.ts";

export default function EditProduct() {
    const { id } = useParams();

    const product = products.find(p => p.id.toString() === id);

    const onSubmit = (data: Product) => {
        console.log(data);
    }

    return (
        <ProductForm 
            title="Editar produto"  
            onSubmit={(data: Product) => onSubmit(data)} 
            product={product}
        />
    )
}
