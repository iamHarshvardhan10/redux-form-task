import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs'
import validator from "validator";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
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



export const login = async (req, res) => {
    try {
        // destructure from body
        const { email, password } = req.body;
        // get from database
        const user = await User.findOne({ email });
        // valid user
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        // password decrypt
        const userPass = await bcryptjs.compare(password, user.password);

        if (!userPass) {
            return res.status(404).json({
                success: false,
                message: "Invalid password"
            })
        }
        // token generate
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY,
            {
                expiresIn: "12h"

            })
        // return res
        return res.cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json({
                success: true,
                message: "User logged in successfully",
                data: user
            })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}