import { Request, Response } from 'express';
import { createGroup, deleteGroup, getAllGroups, getGroup, updateGroupName } from '../services/groupsService.js';

/**
 * 
 * @param req Express Request
 * @param res Express Response
 */
export const getAllGroupsController = async (req: Request, res: Response) => {
    try {
        const records = await getAllGroups();
        res.status(200).json({
            success: true,
            data: records,
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message",
            });
        }
    }
};

/**
 * 
 * @param req Express Request
 * @param res Express Response
 */
export const getGroupController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const record = await getGroup(id);
        res.status(200).send({
            success: true,
            data: record,
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message",
            });
        }
    }
};

/**
 * 
 * @param req Express Request
 * @param res Express Response
 */
export const createGroupController = async (req: Request, res: Response) => {
    try {
        const name: string = req.body.name;
        const record = await createGroup(name);
        res.status(200).json({
            success: true,
            data: record,
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message",
            });
        }
    }
};

/**
 * 
 * @param req Express Request
 * @param res Express Response
 */
export const updateGroupController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        let update_count = 0;
        if (req.body.hasOwnProperty("name")) {
            const name: string = req.body.name;
            updateGroupName(id, name);
            update_count ++;
        }
        if (update_count == 0) {
            throw Error('No updatable attributes passed in. Valid fields: "name"');
        }
        res.status(200).json({
            success: true,
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message",
            });
        }
    }
};

/**
 * 
 * @param req Express Request
 * @param res Express Response
 */
export const deleteGroupController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        await deleteGroup(id);
        res.status(200).json({
            success: true,
            data: id,
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message"
            });
        }
    }
};