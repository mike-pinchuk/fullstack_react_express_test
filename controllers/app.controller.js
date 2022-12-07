import { Router } from "express";
import { appService } from "../services/app.service.js";

const appRouter = Router();

appRouter.get('/favicon.ico', (_req, res) => {
  res.sendStatus(204);
});

appRouter.get("/api", async (_req, res) => {
  return res.send(appService.getStartPage());
});

appRouter.post("/api", async (req, _res) => {
  const selectedData = req.body
  await appService.filteredItems(selectedData);
})

export { appRouter };
