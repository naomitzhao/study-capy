import { Request, Response } from 'express';
import { createGroupMembership, deleteGroupMembership, getAllGroupMemberships, getGroupMembership } from '../services/groupMembershipsService.js';

/**
 * 
 * @param req Express Request
 * @param res Express Response
 */
export const getAllGroupMembershipsController = async (req: Request, res: Response) => {
    try {
        const records = await getAllGroupMemberships();
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
export const getGroupMembershipController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const record = await getGroupMembership(id);
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
export const createGroupMembershipController = async (req: Request, res: Response) => {
    try {
        const user_id: number = req.body.user_id;
        const group_id: number = req.body.group_id;
        const record = await createGroupMembership(user_id, group_id);
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
export const deleteGroupMembershipController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        await deleteGroupMembership(id);
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