import prisma from "../prisma";

export const UserRegister = async ({ name, email, phone, password }: { name: string, email: string, phone: string, password: string }) => {
    try {
        const user = await prisma.user.create(
            { data: { name, email, phone, password } }
        );
        return user;
    }
    catch (error) {
        throw error;
    }
}

export const UserLogin = async ({ data, password }: { data: string, password: string }) => {
    try {
        const user = await prisma.user.findFirst({
            select: {
                name: true,
                phone: true,
                email: true,
                id: true
            },
            where: {
                OR: [
                    { email: data },
                    { phone: data }
                ],
                password: password
            }
        });
        if (!user) {
            throw 'User Not Found';
        }
        return user;
    } catch (error) {
        throw error;
    }
}