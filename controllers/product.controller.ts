import { Request, Response } from "express";
import { productValidation } from "../validations/product.validations";
import { ProductRepository } from "../repositories/product.repository";

export class ProductoController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await productValidation.validate(req.body);
      const controller = new ProductRepository();
      const product = await controller.create(data);
      return res.status(200).send(product);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async get(req: Request, res: Response): Promise<Response> {
    try {
      const controller = new ProductRepository();
      const products = await controller.get();
      return res.status(200).send(products);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const controller = new ProductRepository();
      const product = await controller.getById(Number(req.params.id));
      return res.status(200).send(product);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const controller = new ProductRepository();
      const product = await controller.update(Number(req.params.id), req.body);
      return res.status(200).send(product);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async remove(req: Request, res: Response): Promise<Response> {
    try {
      const controller = new ProductRepository();
      const product = controller.remove(Number(req.params.id));
      return res.status(200).send(product);
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}