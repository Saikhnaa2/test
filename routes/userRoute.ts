import { Router } from "express";
import { getUsers, addUser, getUser, deleteLunch } from "../controller/user";

export const userRouter = Router();
userRouter.route("/").get(getUsers).post(addUser);
userRouter.route("/:id").get(getUser).delete(deleteLunch);