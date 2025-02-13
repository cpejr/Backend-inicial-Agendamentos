const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const {validateRequest} = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        nome: z.string({ required_error: "O nome é obrigatório"}),
        preco: z.string({ required_error: "O preço é obrigatório"}),
        creditos: z.string({ required_error: "O número de créditos é obrigatório"}),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é valido"),
    }),
});

const update = validateRequest({
    body: z.object({
        nome: z.string().optional(),
        preco: z.string().optional(),
        creditos: z.string().optional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é valido"),
    }),
});

module.exports = {
    create,
    destroy,
    update,
};