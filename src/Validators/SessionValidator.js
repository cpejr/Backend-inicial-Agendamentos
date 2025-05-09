import { mongoose } from "mongoose";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const create = validateRequest({
  body: z.object({
    user_id: z.custom(mongoose.isValidObjectId, "Invalid id"),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "Invalid session id"),
  }),
});

export default {
  create,
  destroy,
};
