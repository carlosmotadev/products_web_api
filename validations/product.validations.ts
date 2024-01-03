import * as yup from 'yup';

export const productValidation = yup.object({
    name: yup.string().required(),
    price: yup.number().required()
});