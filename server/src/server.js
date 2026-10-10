import express from "express";
import mongoose from "mongoose";
import { rateLimit } from 'express-rate-limit'
import { routes } from "../src/routes/main_routes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());  

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)


const port = process.env.PORT || 9090;


mongoose.connect(process.env.Mongoodb_URL)
    .then(() => console.log('Data Base Connected...'))
    .catch((err) => console.log(err.message))

app.use('/api', routes);


app.listen(port, () => {
    console.log(` Server is running on port ${port}`);
});

