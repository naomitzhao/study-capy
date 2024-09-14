import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
/**
 *
 * @returns An array containing all group memberships in the database.
 */
export async function getAllGroupMemberships() {
    return await prisma.groupMemberships.findMany();
}

/**
 *
 * @param id ID of the group membership to get.
 * @returns An object representing the group membership.
 */
export async function getGroupMembership(id: number) {
    return await prisma.groupMemberships.findUnique({
        where: {
            id
        },
    });
}

/**
 * @param user_id: ID of the user of membership
 * @param group_id: ID of the group of membership
 * @returns the newly created group
 */
export async function createGroupMembership(user_id: number, group_id: number) {
    return await prisma.groupMemberships.create({
        data: {
            user_id,
            group_id
        }
    });
}

/**
 * Delete a membership from the database.
 * @param id Integer representing the ID of the membership to delete
 */
export async function deleteGroupMembership(id: number) {
    await prisma.groupMemberships.delete({
        where: {
            id
        }
    })
}