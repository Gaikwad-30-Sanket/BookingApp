import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("auth endpoint")
})

export default router; 