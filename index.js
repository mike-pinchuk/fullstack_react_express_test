import app from "./app.js";

const PORT = process.env.PORT || 8000;

const startServer = (app) => {
  app.listen(PORT, () => console.log("Application has started, port: " + PORT));
};

startServer(app);
