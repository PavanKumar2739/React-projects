const express = require("express");
const { placeBid, getBids } = require("../controller/bidController");
const router = express.Router();

router.post("/placeBid/:productId", placeBid);
router.get("/getBids/:productId", getBids);

module.exports = router;
