import productRoutes from "./product.route";
import { Application } from "express";

const routes = (app: Application) => {
  productRoutes(app);
};

export default routes;