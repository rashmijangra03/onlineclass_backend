import express from "express";
// import { create_user } from '../controller/user_contoller.js';
import { user_autheticate,user_authetication } from "../middleware/auth.js";
import { create_users,resend_otp,verify_otp,login,update_profile } from "../controller/user_contoller.js";
export const user_routes = express.Router();

// public API on use Auth
user_routes.post('/create_users', create_users);
user_routes.post('/resend_otp',resend_otp);
user_routes.post('/verify_otp',verify_otp);
user_routes.post('/login',login);


// / private API on use Auth
user_routes.post('/update_profile',user_autheticate,user_authetication, update_profile);
