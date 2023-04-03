import express from "express";
import { userSignup , userLogin} from "../controller/UserController.js";
import { getProducts } from "../controller/Product-controller.js";

const router = express.Router();
 
router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/product',getProducts);

export default router;