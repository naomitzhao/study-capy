import { Request, Response } from 'express';
import { createRecord, deleteRecord, getAllRecords, getRecord, updateRecordEnd, updateRecordStart } from '../services/recordsService.js';

/**
 * 
 * @param req Express Request
 * @param res Express Response
 */
export const getAllRecordsController = async (req: Request, res: Response) => {
    try {
        const records = await getAllRecords();
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
export const getRecordController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const record = await getRecord(id);
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
export const createRecordController = async (req: Request, res: Response) => {
    try {
        const start_time: Date = req.body.start_time;
        const end_time: Date = req.body.end_time;
        const author: number = req.body.author;
        const record = await createRecord(start_time, end_time, author);
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
export const updateRecordController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        let update_count = 0;
        if (req.body.hasOwnProperty("start_time")) {
            updateRecordStart(id, req.body.start_time);
            update_count ++;
        }
        if (req.body.hasOwnProperty("end_time")) {
            updateRecordEnd(id, req.body.end_time);
            update_count ++;
        } 
        if (update_count == 0) {
            throw Error('No updatable attributes passed in. Valid fields: "start_time", "end_time"')
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
export const deleteRecordController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        await deleteRecord(id);
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