import express, { Express } from "express";
import bodyParser from 'body-parser';
import { lunchRouter, userRouter } from "./routes";
const app: Express = express();

app.use(bodyParser.json());
app.use("/lunch", lunchRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});