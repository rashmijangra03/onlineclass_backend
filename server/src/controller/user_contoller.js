import { errorhandling } from '../error/all_error.js'
import jwt from "jsonwebtoken"
import {user_model} from "../models/user_model.js"

export const create_users = async (req, res) => {
    try {
        const data=req.body;
        const {firstName,lastName,gender,email,password}=data;
        const response = await user_model.create(data);
        

        res.send({data:response})

    }
    catch (err) { errorhandling(err, res) }

}

export const verify_otp = async (req, res) => {
    try {
        req.send({ a: "abc" })

    }
    catch (err) { errorhandling(err, res) }

}


export const resend_otp = async (req, res) => {
    try {
        req.send({ a: "abc" })

    }
    catch (err) { errorhandling(err, res) }

}

export const login = async (req, res) => {
    try {
        req.send({ a: "abc" })

    }
    catch (err) { errorhandling(err, res) }

}
export const update_profile = async (req, res) => {
    try {
        req.send({ a: "abc" })

    }
    catch (err) { errorhandling(err, res) }

}    
