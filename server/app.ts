import recordsRouter from "./routes/recordsRouter.js";
import usersRouter from "./routes/usersRouter.js";

import express from "express";
const app = express();

app.use(express.json());

app.use("/records", recordsRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});