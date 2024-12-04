import express from "express";
import { PORT, HOST } from "../src/config.js";
import userRouter from "./routers/userRouter.js";
import receitaRouter from "./routers/receitaRouter.js";
import authRouter from "./routers/authRouter.js";
import logger from "./middlewares/logger.js";
import favRouter from "./routers/favRouter.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from 'path';

const app = express();

app.use(logger);
app.use(express.json());


app.use(cookieParser());
app.use(cors());


app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/receita", receitaRouter);
app.use("/favorito", favRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
