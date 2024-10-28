import z from 'zod';
const validateRegistration = (req, res, next) => {
    const schema = z.object({
        name: z.string({ message: "name required!" }).min(3, { message: "name must be min 3 character long." }).max(20, { message: "name must be less then 20 character." }),
        userName: z.string({ message: "userName required!" }).min(3).max(24),
        phone: z.coerce.string().length(10, { message: "invalid phone" }),
        email: z.string({ message: "email required!" }).email({ message: "invaild email" }),
        ffUid: z.number({ message: "ffUid required!" }),
        password: z.string({ message: "password required!" }).min(8, { message: "password must be greater than 8 character" }).max(24, { message: "password must be smaller then 24 digits" })
    });
    const validReq = schema.safeParse(req.body);
    if (!validReq.error) {
        return next();
    }
    ;
    res.status(400).json({
        success: false,
        message: validReq.error?.issues[0].message
    });
};
const validateLogin = (req, res, next) => {
    const { phone, email } = req.body;
    if (!email && !phone) {
        return res.status(400).json({
            sucess: false,
            message: "phone or email required!"
        });
    }
    ;
    const schema = z.object({
        phone: z.coerce.string().length(10, { message: "Invlid phone" }).optional(),
        email: z.string().email({ message: "Invalid email" }).optional(),
        password: z.string()
    });
    const validReq = schema.safeParse(req.body);
    if (!validReq.error) {
        return next();
    }
    ;
    res.status(400).json({
        success: false,
        message: validReq.error?.issues[0].message
    });
};
export { validateRegistration, validateLogin };
//# sourceMappingURL=userValidator.js.map