import { Router, Request, Response } from "express";
import { createGroupMembershipController, deleteGroupMembershipController, getAllGroupMembershipsController, getGroupMembershipController } from "../controllers/groupMembershipsController.js";

const groupMembershipsRouter = Router();

groupMembershipsRouter.get("/", (req: Request, res: Response) => getAllGroupMembershipsController(req, res));
groupMembershipsRouter.get("/:id", (req: Request, res: Response) => getGroupMembershipController(req, res));
groupMembershipsRouter.post("/", (req: Request, res: Response) => createGroupMembershipController(req, res));
groupMembershipsRouter.delete("/:id", (req: Request, res: Response) => deleteGroupMembershipController(req, res));

export default groupMembershipsRouter;