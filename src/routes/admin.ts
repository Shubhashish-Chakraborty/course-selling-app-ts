import { Router } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";

import { AdminModel } from "../dbSchema"

const adminRouter = Router();



adminRouter.post("/signup" , async (req , res) => {
    // Input validation VIA ZOD

    const requiredBody = z.object({
        fullname: z.string().min(3).max(100),
        adminname: z.string().min(3).max(20),
        email: z.string().email(),
        password: z.string()
    })

    // parse

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.status(400).json({
            message: "Invalid Format",
            errors: parsedDataWithSuccess.error.issues
        })
        return
    }

    // UPTILL HERE INPUT VALIDATION DONE!!

    const { fullname , adminname , email , password } = parsedDataWithSuccess.data;

    let errorFound = false;
    try {
        const hasedPassword = await bcrypt.hash(password , 10);

        await AdminModel.create({
            fullname: fullname,
            adminname: adminname,
            email: email,
            password: hasedPassword
        })

    } catch (e) {
        res.status(400).json({
            message: `${adminname} Already Registered to our database!`
        })
        errorFound = true;
    }

    if (!errorFound) {
        res.json({
            message: `${adminname} Successfully SignedUP to the database, as ADMIN!`
        })
    }


})

export { adminRouter }  