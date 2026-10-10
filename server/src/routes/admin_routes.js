import express from "express";
import{create_users}from'../controller/user_contoller.js'

export const admin_routes = express.Router();


admin_routes.get('/create_users', create_users)


export default admin_routes