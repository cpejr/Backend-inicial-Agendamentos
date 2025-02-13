const mongoose = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        professor_id: z.string().refine(mongoose.isValidObjectId, "O id do professor é inválido"),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.string().refine(mongoose.isValidObjectId, "O id não é válido"),
    }),
});

const update = validateRequest({
    body: z.object({
        professor_id: z.string().refine(mongoose.isValidObjectId, "O id do professor é inválido").optional(),
    }),
    params: z.object({
        id: z.string().refine(mongoose.isValidObjectId, "O id não é válido"),
    }),
});

module.exports = {
    create,
    destroy,
    update,
};
