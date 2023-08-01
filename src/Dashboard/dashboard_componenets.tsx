import React, { useState } from "react";
import { Button, TextField } from "dasboard_components";
import ProductCard from "../product_components/ProductCard";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
    const [productId, setProductId] = useState<number | null>(null);
    const [products, setProducts] = useState<any[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleShowCurrent = () => {
        if (productId !== null) {
            const currentProduct = products.find((product) => product.id === productId);
            if (currentProduct) {
                console.log("Current Product:", currentProduct);
            } else {
                console.log("Product not found with ID:", productId);
            }
        }
    };

    return (
        <div>
            <h1>FakeStore Product List</h1>
            <TextField
                label="Enter Product ID"
                variant="outlined"
                value={productId || ""}
                onChange={(e) => setProductId(parseInt(e.target.value))}
            />
            <Button onClick={() => fetchProducts()} variant="contained" sx={{ margin: "10px" }}>
                Fetch Products
            </Button>
                {products.map((product) => (
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            onButtonClick={() => setProductId(product.id)}
                        />

                ))}

            <Button onClick={() => handleShowCurrent()}>Show Current Product</Button>
        </div>
    );
};

