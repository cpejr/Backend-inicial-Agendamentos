import mongoose from "mongoose";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const create = validateRequest({
  body: z.object({
    scheduling_id: z
      .string()
      .refine(mongoose.isValidObjectId, "Invalid scheduling id"),
    class_id: z.string().refine(mongoose.isValidObjectId, "Invalid class id"),
    date: z.coerce.date({ required_error: "Date is required" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.string().refine(mongoose.isValidObjectId, "Invalid id"),
  }),
});

const update = validateRequest({
  body: z.object({
    user_id: z
      .string()
      .refine(mongoose.isValidObjectId, "Invalid user id")
      .optional(),
    class_id: z
      .string()
      .refine(mongoose.isValidObjectId, "Invalid class id")
      .optional(),
    date: z.coerce.date().optional(),
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
