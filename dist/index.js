"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = require("express-rate-limit");
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    limit: 50,
    standardHeaders: "draft-7",
    legacyHeaders: false,
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.set("trust proxy", 1);
app.use(limiter);
app.use((0, helmet_1.default)());
const port = 3000;
app.get("/", (req, res) => {
    res.status(200).json({ message: "🌌 Hello World!" });
});
app.get("/products", (req, res) => {
    //logic to get products
    res.status(200).json({ message: "get on /products works." });
});
app.get("/product/:id", (req, res) => {
    //logic to get product
    res.status(200).json({ message: "get on /product/:id works. given param is: " + req.params.id });
});
app.post("/product", (req, res) => {
    //logic to post product
    res.status(200).json({ message: "post on /product works." });
});
app.put("/product/:id", (req, res) => {
    //logic to update product
    res.status(200).json({ message: "put on /product/:id works. given param is: " + req.params.id });
});
app.delete("/product/:id", (req, res) => {
    //logic to delete product  
    res.status(200).json({ message: "delete on /product/:id works. given param is: " + req.params.id });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
