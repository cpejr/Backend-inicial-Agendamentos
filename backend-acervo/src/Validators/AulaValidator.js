const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const {validateRequest} = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        nome: z.string({ required_error: "O nome é obrigatório"}),
        horario: z.string({ required_error: "O horario é obrigatório"}),
        duracao: z.number({ required_error: "A duração é obrigatório"}),
        capacidade: z.number({ required_error: "A capacidade é obrigatório"}),
        data: z.coerce.date({ invalid_type_error: "A data deve ser uma data válida no formato YYYY-MM-DD" }),
        professor_id: z.custom(mongoose.isValidObjectId, "O id do professor não é válido"),
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
        horario: z.string().optional(),
        duracao: z.number().optional(),
        capacidade: z.number().optional(),
        data: z.date().optional(),
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