import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { ServiceRequest } from "../../app/apis/serviceReq";

const AddProductModal = ({ open, onClose, onProductAdded }) => {
    const [newProduct, setNewProduct] = useState({ name: "", description: "", price: 0, count:0 });

    // Handle Input Change
    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    // Add Product to DB
    const handleCreateProduct = async () => {
        try {
            const response = await ServiceRequest.callPostApi('/addProduct',newProduct);
            if (!response.ok) throw new Error("Failed to add product");

            onProductAdded(); // Refresh product list
            onClose(); // Close modal
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "white",
                boxShadow: 24,
                p: 4,
                width: 400,
                borderRadius: 2
            }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Add New Product</Typography>

                <TextField 
                    fullWidth 
                    label="Product Name" 
                    name="name" 
                    value={newProduct.name} 
                    onChange={handleChange} 
                    sx={{ mb: 2 }}
                />
                <TextField 
                    fullWidth 
                    label="Description" 
                    name="description" 
                    value={newProduct.description} 
                    onChange={handleChange} 
                    sx={{ mb: 2 }}
                />
                <TextField 
                    fullWidth 
                    label="Price" 
                    name="price" 
                    value={newProduct.price} 
                    onChange={handleChange} 
                    type="number" 
                    sx={{ mb: 2 }}
                />
                <TextField 
                    fullWidth 
                    label="Available Count" 
                    name="count" 
                    value={newProduct.count} 
                    onChange={handleChange} 
                    type="number" 
                    sx={{ mb: 2 }}
                />

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button onClick={onClose} color="error">Close</Button>
                    <Button variant="contained" color="primary" onClick={handleCreateProduct}>
                        Add to DB
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddProductModal;
