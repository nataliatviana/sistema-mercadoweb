import type { Product } from "../../../types/product.type";
import ProductForm from "../FormProduct";

export default function NewProduct() {
    const onSubmit = (data: Product) => {
        console.log(data);
    }

    return (
        <ProductForm title="Novo produto" onSubmit={(data: Product) => onSubmit(data)} />
    )
}
