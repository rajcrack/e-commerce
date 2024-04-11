import prisma from "@/lib/prisma"

export const FunctionUserList = async (q: boolean) => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            password: true,
            isActive: true
        },
        where: {
            isActive: q
        }
    });
    return users;
}