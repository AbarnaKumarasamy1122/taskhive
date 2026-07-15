import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

    const adminRole = await prisma.role.upsert({
        where: { name: "ADMIN" },
        update: {},
        create: {
            name: "ADMIN"
        }
    });

    const managerRole = await prisma.role.upsert({
        where: { name: "PROJECT_MANAGER" },
        update: {},
        create: {
            name: "PROJECT_MANAGER"
        }
    });

    const memberRole = await prisma.role.upsert({
        where: { name: "TEAM_MEMBER" },
        update: {},
        create: {
            name: "TEAM_MEMBER"
        }
    });

    const password = await bcrypt.hash("Admin123!",10);

    await prisma.user.upsert({

        where:{
            email:"admin@taskhive.com"
        },

        update:{},

        create:{
            name:"System Admin",
            email:"admin@taskhive.com",
            password,
            roleId:adminRole.id
        }

    });

    console.log("Database seeded successfully.");
}

main()
.finally(async()=>{
    await prisma.$disconnect();
});