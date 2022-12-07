import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, HEAD, POST, OPTIONS",
  preflightContinue: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

export default app;
