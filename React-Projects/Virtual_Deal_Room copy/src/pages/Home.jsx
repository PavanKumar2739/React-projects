import React, { useEffect, useState } from "react";
import { ServiceRequest } from "../app/apis/serviceReq";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import AppBarHeader from "../components/header/AppBar";
import AddProductModal from "../components/middleContent/sellerForm";

const Home = () => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem("username");
    const [products, setProducts] = useState([]);
    const [role, setRole] = useState(sessionStorage.getItem('usertype')); // Determine if user is seller or buyer
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetchProducts();
       
    }, []);

    const fetchProducts = async () => {
        try {
            const resp = await ServiceRequest.callGetApi("/getProducts");
            setProducts(resp);
        } catch (e) {
            console.log(e);
        }
    };

    // const userType =  React.useRef(sessionStorage.getItem('usertype'));

    const handleEditProduct = (productId) => {
       
    };

    const handleAddProduct = () => {
       
       setOpenModal(true);             
    };

    const handlePlaceBid = (productId) => {
        
    };

    const handleChatWithSeller = (sellerName) => {
        
    };

    return (
        <>
            <AppBarHeader />

            <AddProductModal 
                open={openModal} 
                onClose={() => setOpenModal(false)} 
                onProductAdded={fetchProducts} 
            />

            <Box sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    {role === "Seller" ? "Your Products" : "Available Products"}
                </Typography>

                {products.length === 0 ? (
                    <Typography variant="h6" color="textSecondary">
                        {role === "Seller" ? (
                            <Button variant="contained" color="primary" onClick={handleAddProduct}>
                                Add Product
                            </Button>
                        ) : (
                            "No products available."
                        )}
                    </Typography>
                ) : (
                    products.map((product) => (
                        <Card key={product.id} sx={{ mb: 2, p: 2 }}>
                            <CardContent>
                                <Typography variant="h5" fontWeight="bold">
                                    {product.name}
                                </Typography>
                                <Typography>{product.description}</Typography>
                                <Typography>Price: ${product.price}</Typography>
                                <Typography>Status: {product.status}</Typography>

                                {role === "seller" ? (
                                    <Button variant="contained" color="primary" onClick={() => handleEditProduct(product.id)}>
                                        Edit
                                    </Button>
                                ) : (
                                    <>
                                        <Button variant="contained" color="secondary" onClick={() => handlePlaceBid(product.id)}>
                                            Place Bid
                                        </Button>
                                        <Button variant="outlined" color="primary" sx={{ ml: 2 }} onClick={() => handleChatWithSeller(product.seller)}>
                                            Chat with Seller
                                        </Button>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    ))
                )}
            </Box>
        </>
    );
};

export default Home;
