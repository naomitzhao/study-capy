import { Router, Request, Response } from "express";
import { createGroupController, deleteGroupController, getAllGroupsController, getGroupController, updateGroupController } from "../controllers/groupsController.js";

const groupsRouter = Router();

groupsRouter.get("/", (req: Request, res: Response) => getAllGroupsController(req, res));
groupsRouter.get("/:id", (req: Request, res: Response) => getGroupController(req, res));
groupsRouter.post("/", (req: Request, res: Response) => createGroupController(req, res));
groupsRouter.put("/:id", (req: Request, res:Response) => updateGroupController(req, res));
groupsRouter.delete("/:id", (req: Request, res: Response) => deleteGroupController(req, res));

export default groupsRouter;