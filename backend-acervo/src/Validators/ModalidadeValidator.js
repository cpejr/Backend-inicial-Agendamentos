const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const {validateRequest} = require("zod-express-middleware");

const creat = validateRequest({
    body: z.object({
        nome: z.string({ required_error: "O nome é obrigatório"}),
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
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é valido"),
    }),
});

module.exports = {
    creat,
    destroy,
    update,
};