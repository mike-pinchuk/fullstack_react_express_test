import Router from "./basic-router.js";
import { appRouter } from "../controllers/app.controller.js";

Router.use("/", appRouter);

export default Router;
