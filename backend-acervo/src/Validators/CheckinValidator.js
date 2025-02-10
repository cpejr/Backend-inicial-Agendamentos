const mongoose = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        agendamento_id: z.string().refine(mongoose.isValidObjectId, "O id de agendamento é inválido"),
        aula_id: z.string().refine(mongoose.isValidObjectId, "O id da aula é inválido"),
        data: z.coerce.date({ required_error: "A data é obrigatória" }),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.string().refine(mongoose.isValidObjectId, "O id não é válido"),
    }),
});

const update = validateRequest({
    body: z.object({
        usuario_id: z.string().refine(mongoose.isValidObjectId, "O id de usuário é inválido").optional(),
        aula_id: z.string().refine(mongoose.isValidObjectId, "O id da aula é inválido").optional(),
        data: z.coerce.date().optional(),
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
