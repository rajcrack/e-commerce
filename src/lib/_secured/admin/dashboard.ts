import prisma from "@/lib/prisma";

export const FunctionUserList = async () => {
    try {
        const activeUser = await prisma.user.count({
            where: {
                isActive: true
            }
        });
        const inActiveUser = await prisma.user.count({
            where: {
                isActive: false
            }
        });

        return { activeUser, inActiveUser };
    } catch (error) {
        throw error;
    }
}