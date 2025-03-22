import express from "express";
import {createuser,deleteuser,fetchusers, updateuser} from "../controllers/usercontrollers.js";


const router = express.Router();
router.post("/", createuser);
router.get("/", fetchusers);
router.delete("/:id",deleteuser);
router.put("/:id", updateuser);
export default router;

