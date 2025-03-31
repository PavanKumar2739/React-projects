const express = require("express");
const { addProduct, getProducts, updateProduct, deleteProduct } = require("../controller/productController");
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/getProducts", getProducts);
router.put("/updateProduct/:productId", updateProduct);
router.delete("/deleteProduct/:productId", deleteProduct);

module.exports = router;
