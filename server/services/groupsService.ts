import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * 
 * @returns An array containing all groups in the database.
 */
export async function getAllGroups() {
    return await prisma.groups.findMany();
}

/**
 * 
 * @param id ID of the group to get
 * @returns An object representing the record.
 */
export async function getGroup(id: number) {
    return await prisma.groups.findUnique({
        where: {
            id
        },
    });
}

/**
 * @param name: The name of the new group
 * @returns the newly created group
 */
export async function createGroup(name: string) {
    return await prisma.groups.create({
        data: {
            name
        }
    });
}

/**
 * Update the name of a group in the database.
 * @param id Integer representing the ID of the group to update
 * @param name string representing the new name of the group
 */
export async function updateGroupName(id: number, name: string) {
    await prisma.groups.update({
        where: {
            id
        },
        data: {
            name
        }
    });
}

/**
 * Delete a group from the database.
 * @param id Integer representing the ID of the record to delete
 */
export async function deleteGroup(id: number) {
    await prisma.groups.delete({
        where: {
            id
        }
    })
}