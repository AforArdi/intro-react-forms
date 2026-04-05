import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const handleProducts = (newProduct) => {
        const wannaAddProduct = [...products, newProduct];
        setProducts(wannaAddProduct);
    }

    return (
        <div>
            <ProductForm handleProducts={handleProducts}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
}

export default ProductManagement;