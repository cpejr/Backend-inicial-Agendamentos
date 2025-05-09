import { mongoose } from "mongoose";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const create = validateRequest({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email"),
    password: z.string({ required_error: "Password is required" }),
    type: z.number({ required_error: "Type is required" }),
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
    email: z.string().email("Invalid email").optional(),
    password: z.string().optional(),
    type: z.string().optional(),
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
