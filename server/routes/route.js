import express from "express";
import { userSignup , userLogin} from "../controller/UserController.js";
import { getProducts , getProductDetails } from "../controller/Product-controller.js";


const router = express.Router();
 
router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/products',getProducts);
router.get("/product/:id",getProductDetails);

export default router;