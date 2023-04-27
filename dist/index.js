import express from "express";
import bodyParser from 'body-parser';
import lunchRouter from "./routes/lunchRoute";
const app = express();
app.use(bodyParser.json());
app.use("/api/v1/lunch", lunchRouter);
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
