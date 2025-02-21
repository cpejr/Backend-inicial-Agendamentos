const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "Invalid id"),
    }),
});

const update = validateRequest({
    body: z.object({
        name: z.string().optional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "Invalid id"),
    }),
});

module.exports = {
    create,
    destroy,
    update,
};
