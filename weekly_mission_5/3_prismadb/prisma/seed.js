const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: 'Woopa' },
            update: {},
            create: {
                name: 'Woopa',
                username: 'ajolonauta',
                mission: 'Node'
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: 'Woopa1' },
            update: {},
            create: {
                name: 'Woopa1',
                username: 'ajolonauta1',
                mission: 'Node'
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: 'Woopa 2' },
            update: {},
            create: {
                name: 'Woopa 2',
                username: 'ajolonauta2',
                mission: 'Java'
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: 'Woopa 3' },
            update: {},
            create: {
                name: 'Woopa 3',
                username: 'ajolonauta3',
                mission: 'Node'
            },
        });

        const woopa4 = await prisma.explorer.upsert({
            where: { name: 'Woopa 4' },
            update: {},
            create: {
                name: 'Woopa 4',
                username: 'ajolonauta4',
                mission: 'Java'
            },
        });

        const woopa5 = await prisma.explorer.upsert({
            where: { name: 'Woopa 5' },
            update: {},
            create: {
                name: 'Woopa 5',
                username: 'ajolonauta5',
                mission: 'Java'
            },
        });

        const newTable = await prisma.newTable.upsert({
            where: { name: 'name' },
            update: {},
            create: {
                name: 'name',
                lang: 'esp',
                missionCommander: 'commander 1',
            }
        });

        const newTable1 = await prisma.newTable.upsert({
            where: { name: 'name 1' },
            update: {},
            create: {
                name: 'name 1',
                lang: 'esp',
                missionCommander: 'commander 1',
            }
        });

        const newTable2 = await prisma.newTable.upsert({
            where: { name: 'name 2' },
            update: {},
            create: {
                name: 'name 2',
                lang: 'eng',
                missionCommander: 'commander 2',
            }
        });

        const newTable3 = await prisma.newTable.upsert({
            where: { name: 'name 3' },
            update: {},
            create: {
                name: 'name 3',
                lang: 'jp',
                missionCommander: 'commander 1',
            }
        });

        console.log('Create 3 explorers');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();