import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * 
 * @returns An array containing all records in the database.
 */
export async function getAllRecords() {
    return await prisma.records.findMany();
}

/**
 * 
 * @param id Record ID of the record to get
 * @returns An object representing the record.
 */
export async function getRecord(id: number) {
    return await prisma.records.findUnique({
        where: {
            id
        },
    });
}

/**
 * 
 * @param start_time Date object indicating the start time of the record.
 * @param end_time Date object indicating the end time of the record.
 * @param author The ID of the user that owns the record.
 * @returns The newly created record.
 */
export async function createRecord(start_time: Date, end_time: Date, user_id: number) {
    return await prisma.records.create({
        data: {
            start_time,
            end_time,
            user_id
        }
    });
}

/**
 * Update the start time of a record in the database.
 * @param id Integer representing the ID of the record to update
 * @param start_time Date object representing the new time to set the start time to
 */
export async function updateRecordStart(id: number, start_time: Date) {
    await prisma.records.update({
        where: {
            id
        },
        data: {
            start_time
        }
    });
}

/**
 * Update the end time of a record in the database.
 * @param id Integer representing the ID of the record to update
 * @param end_time Date object representing the new time to set the end time to
 */
export async function updateRecordEnd(id: number, end_time: Date) {
    await prisma.records.update({
        where: {
            id
        },
        data: {
            end_time
        }
    });
}

/**
 * Delete a single record from the database.
 * @param id Integer representing the ID of the record to delete
 */
export async function deleteRecord(id: number) {
    await prisma.records.delete({
        where: {
            id
        }
    })
}