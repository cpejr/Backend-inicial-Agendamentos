const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        user_id: z.custom(
            mongoose.isValidObjectId, 
            "Invalid id"
        ),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(
            mongoose.isValidObjectId, 
            "Invalid session id"
        ),
    }),
});

module.exports = {
    create,
    destroy,
};
