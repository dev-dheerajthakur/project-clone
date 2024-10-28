import mongoose, { SchemaTypes } from 'mongoose';
import z from 'zod';
export const createFriendRequest_V = async (req, res, next) => {
    const { authorization } = req.headers;
    const { to } = req.body;
    if (authorization === to) {
        return res.status(404).json({
            success: false,
            error: "illigal operation !"
        });
    }
    const schema = z.object({
        authorization: z.string({ message: "not authorized!" }),
        to: z.string({ message: "invalid user" })
    });
    const validSchma = schema.safeParse({
        authorization, to
    });
    if (validSchma.success) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: "invlaid input !"
        });
    }
};
export const acceptFriendReqest_V = async (req, res, next) => {
    const { from, to } = req.body;
    if (from === to) {
        return res.status(404).json({
            success: false,
            error: "illigal operation !"
        });
    }
    const schema = z.object({
        from: z.instanceof(mongoose.Schema.ObjectId, { message: "invalid user" }),
        to: z.instanceof(mongoose.Schema.ObjectId, { message: "invalid user" })
    });
    const validSchma = schema.safeParse({
        from: new SchemaTypes.ObjectId(from),
        to: new SchemaTypes.ObjectId(to)
    });
    if (validSchma.success) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: "invlaid input !"
        });
    }
};
//# sourceMappingURL=notification.validator.js.map