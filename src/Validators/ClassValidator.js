const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),
        time: z.string({ required_error: "Time is required" }),
        duration: z.number({ required_error: "Duration is required" }),
        capacity: z.number({ required_error: "Capacity is required" }),
        date: z.coerce.date({ invalid_type_error: "Date must be a valid date in YYYY-MM-DD format" }),
        teacher_id: z.custom(mongoose.isValidObjectId, "Invalid teacher id"),
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
        time: z.string().optional(),
        duration: z.number().optional(),
        capacity: z.number().optional(),
        date: z.date().optional(),
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
