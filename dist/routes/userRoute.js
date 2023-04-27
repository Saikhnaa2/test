import { Router } from "express";
import { getUsers, addUser, getUser, deleteLunch, priceCalc } from "../controller/user";
export const userRouter = Router();
userRouter.route("/").get(getUsers).post(addUser);
userRouter.route("/checkPrice").get(priceCalc);
userRouter.route("/:id").get(getUser).delete(deleteLunch);
