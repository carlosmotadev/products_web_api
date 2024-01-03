import { Application } from "express";
import { ProductoController } from "../controllers/product.controller";

const productRoutes = (app: Application) => {
  const controller = new ProductoController();

  app.post("/product", controller.create);
  app.get("/product", controller.get);
  app.get("/product/:id", controller.getById);
  app.put("/product/:id", controller.update);
  app.delete("/product/:id", controller.remove);
};

export default productRoutes;