import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs'
import validator from "validator";
// user info controllers 

export const signUp = async (req, res) => {
    try {
        // destructing data from req body
        const { firstName, lastName, email, password, image } = req.body;

        // validation 
        if (!firstName || !lastName || !email || !password) {
            return res.status(404).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        // validator
        if (!validator.isEmail(email)) {
            return res.status(404).json({
                success: false,
                message: "Invalid Email"
            })
        }

        const hashPassword = await bcryptjs.hash(password, 10)

        const newUser = await User.create({ firstName, lastName, email, password: hashPassword, image })

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: newUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}