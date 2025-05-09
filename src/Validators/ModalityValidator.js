import { mongoose } from "mongoose";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

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

export default {
  create,
  destroy,
  update,
};
