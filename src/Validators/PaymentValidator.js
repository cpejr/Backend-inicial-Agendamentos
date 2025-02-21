const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        user_id: z.custom(mongoose.isValidObjectId, "Invalid user id"),
        amount: z.string({ required_error: "Amount is required" }),
        date: z.string({ required_error: "Date is required" }),
        method: z.string({ required_error: "Method is required" }),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "Invalid id"),
    }),
});

const update = validateRequest({
    body: z.object({
        amount: z.string().optional(),
        method: z.string().optional(),
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
