const { z } = require("zod");
const {validateRequest} = require("zod-express-middleware");

const login = validateRequest({
    body: z.object({
        email: z
            .string({ required_error: "Email is required"})
            .email("Invalid email"),
        senha: z.string({ required_error: "Password is required"}),
    }),
});

module.exports = {
    login,
}