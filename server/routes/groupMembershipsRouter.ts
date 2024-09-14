import { Router, Request, Response } from "express";

const groupMembershipsRouter = Router();

groupMembershipsRouter.get("/", (req: Request, res: Response) => console.log("get all group memberships"));
groupMembershipsRouter.get("/:id", (req: Request, res: Response) => console.log("get a group membership by id"));
groupMembershipsRouter.post("/", (req: Request, res: Response) => console.log("make a new group membership"));
groupMembershipsRouter.delete("/:id", (req: Request, res: Response) => console.log("delete a group membership"));

export default groupMembershipsRouter;