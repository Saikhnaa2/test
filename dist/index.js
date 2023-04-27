import express from "express";
import bodyParser from 'body-parser';
import { lunchRouter, userRouter } from "./routes";
const app = express();
app.use(bodyParser.json());
app.use("/lunch", lunchRouter);
app.use("/user", userRouter);
app.listen(8000, () => {
    console.log('App listening on port 8000');
});
