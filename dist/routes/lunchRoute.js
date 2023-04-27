import { Router } from "express";
import { getLunchs, deleteLunch, addLunch, getLunch } from "../controller/lunch";
const lunchRouter = Router();
lunchRouter.route("/").get(getLunchs).post(addLunch);
lunchRouter.route("/:id").get(getLunch).delete(deleteLunch);
export default lunchRouter;
