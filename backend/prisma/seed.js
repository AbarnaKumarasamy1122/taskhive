"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
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
    const password = await bcrypt_1.default.hash("Admin123!", 10);
    await prisma.user.upsert({
        where: {
            email: "admin@taskhive.com"
        },
        update: {},
        create: {
            name: "System Admin",
            email: "admin@taskhive.com",
            password,
            roleId: adminRole.id
        }
    });
    console.log("Database seeded successfully.");
}
main()
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map