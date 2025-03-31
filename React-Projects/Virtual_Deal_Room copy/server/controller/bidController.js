const Bid = require("../database/bidSchema");

// Place a bid
exports.placeBid = async (req, res) => {
    try {
        const bid = new Bid({
            productId: req.params.productId,
            buyerId: req.body.buyerId,
            bidAmount: req.body.bidAmount
        });
        await bid.save();
        res.status(201).json({ message: "Bid placed successfully", bid });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get bids for a product
exports.getBids = async (req, res) => {
    try {
        const bids = await Bid.find({ productId: req.params.productId });
        res.status(200).json(bids);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
