import mongoose from "mongoose";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const create = validateRequest({
  body: z.object({
    teacher_id: z
      .string()
      .refine(mongoose.isValidObjectId, "Invalid teacher id"),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.string().refine(mongoose.isValidObjectId, "Invalid id"),
  }),
});

const update = validateRequest({
  body: z.object({
    teacher_id: z
      .string()
      .refine(mongoose.isValidObjectId, "Invalid teacher id")
      .optional(),
  }),
  params: z.object({
    id: z.string().refine(mongoose.isValidObjectId, "Invalid id"),
  }),
});

export default {
  create,
  destroy,
  update,
};
