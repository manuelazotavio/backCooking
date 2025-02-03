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
import helmet from 'helmet';



const app = express();

app.use(logger);
app.use(express.json());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://cfmnpntlrukzfdcndlwm.supabase.co", "https://recipesblob.oetker.com.br", "https://cloudfront-us-east-1.images.arcpublishing.com", "https://moinhoglobo.com.br",],
      scriptSrc: ["'self'"],
      // Adicione outras diretivas conforme necessário
    },
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3002",
      "http://localhost:3001",
      "http://localhost:8081",
      "http://localhost:8082",
    ],
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Content-Security-Policy",
      "Authorization",
    ],
  })
);


app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/receita", receitaRouter);
app.use("/favorito", favRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
