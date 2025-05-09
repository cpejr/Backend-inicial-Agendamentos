import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const login = validateRequest({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email"),
    password: z.string({ required_error: "Password is required" }),
  }),
});

export default {
  login,
};
