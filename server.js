import express from "express";
import mainRouter from "./routes/mainRoutes.js";

const app = express();

app.use("/api", mainRouter);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
