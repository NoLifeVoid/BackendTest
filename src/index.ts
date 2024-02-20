import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 50,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
const app: Application = express();

app.set("trust proxy", 1);
app.use(limiter);
app.use(cors());
app.use(helmet());

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "🌌 Hello World!" });
});


app.get("/products", (req: Request, res: Response) => {

    //logic to get products

    res.status(200).json({ message: "get on /products works." });
  });

  app.get("/product/:id", (req: Request, res: Response) => {

    //logic to get product

    res.status(200).json({ message: "get on /product/:id works. given param is: "+req.params.id });
});

app.post("/product", (req: Request, res: Response) => {

    //logic to post product

    res.status(200).json({ message: "post on /product works." });
});

app.put("/product/:id", (req: Request, res: Response) => {

    //logic to update product

    res.status(200).json({ message: "put on /product/:id works. given param is: "+req.params.id});
});

app.delete("/product/:id", (req: Request, res: Response) => {

    //logic to delete product  

    res.status(200).json({ message: "delete on /product/:id works. given param is: "+req.params.id });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
