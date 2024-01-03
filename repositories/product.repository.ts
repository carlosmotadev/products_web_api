import { prisma } from "../services/prisma";

type Product = {
    name: string;
    price: number;
};

type ReturnProduct = {
    code: number;
    message: string;
    id: number;
}

type ReturnProductOrMessage = {
    code: number;
    message: string;
}

export class ProductRepository {
    async create(data: Product): Promise<ReturnProduct> {
        const product = await prisma.product.create({
            data
        })
        return { code: 200, message:'Produto criado com sucesso', id: product.id};
    }

    async get(): Promise<Product[]> {
        const products = await prisma.product.findMany({})
        return products
    }

    async getById (id: number): Promise<Product | ReturnProductOrMessage> {
        const product = await prisma.product.findUnique({
            where: {
                id
            }
        })

        if (!product) throw { code: 404, message: 'Produto não encontrado' }
        return product
    }

    async update(id: number, data: Product): Promise<ReturnProductOrMessage | Product> {
        const product = await prisma.product.update({
            data,
            where: {
                id
            }
        })

        if (!product) throw { code: 404, message: 'Produto não encontrado'};

        return product
    }

    async remove(id: number): Promise<ReturnProductOrMessage> {
        const product = await prisma.product.findUnique({
            where: {
                id
            }
        })

        if (!product) throw { code: 404, message: 'Produto não encontrado'}

        await prisma.product.delete({
            where: {
                id
            }
        })

        return { code: 200, message: 'Produto removido com sucesso'}
    }
}
