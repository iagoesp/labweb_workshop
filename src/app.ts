import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();

app.get("/", (_req, res) => {
  return res.status(200).send({ welcome: "seja bem-vinde " });
});

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
