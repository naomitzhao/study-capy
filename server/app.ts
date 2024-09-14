import groupMembershipsRouter from "./routes/groupMembershipsRouter.js";
import groupsRouter from "./routes/groupsRouter.js";
import recordsRouter from "./routes/recordsRouter.js";
import usersRouter from "./routes/usersRouter.js";

import express, { Application } from "express";
const app: Application = express();

app.use(express.json());

app.use("/records", recordsRouter);
app.use("/users", usersRouter);
app.use("/groups", groupsRouter);
app.use("/groupMemberships", groupMembershipsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});