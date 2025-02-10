const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const {validateRequest} = require("zod-express-middleware");

const creat = validateRequest({
    body: z.object({
        usuario_id: z.custom(mongoose.isValidObjectId, "O id de usuario não é válido"),
        valor: z.string({ required_error: "O valor é obrigatório"}),
        data: z.string({ required_error: "A data é obrigatório"}),
        metodo: z.string({ required_error: "O metodo é obrigatório"}),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é valido"),
    }),
});

const update = validateRequest({
    body: z.object({
        valor: z.string().optional(),
        metodo: z.string().optional(),
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