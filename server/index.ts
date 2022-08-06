import express from 'express';
import {PrismaClient} from '@prisma/client';
import {faker} from '@faker-js/faker';

const PORT = 5000;

const app = express();
const prisma = new PrismaClient();


app.get('/', async (req, res) => {
    const result = await prisma.news.findMany({
        include: {
            comments: false,
        },
    });
    res.json(result);
});

app.get('/item/:id', async (req, res) => {
    const {id} = req.params;

    const result = await prisma.news.findUnique({
        where: {id: Number(id)},
        include: {
            comments: {
                include: {
                    comments: true,
                },
            },
        },
    });
    res.json(result);
});

const initNews = async () => {
    for (let i = 0; i < 4; i++) {
        await prisma.news.create({
            data: {
                user: faker.internet.email(),
                time: +faker.random.numeric(9),
                points: +faker.random.numeric(2),
                title: faker.lorem.lines(),
                url: faker.internet.url(),
                comments_count: 1,
                comments: {
                    create: {
                        user: faker.internet.email(),
                        time: +faker.random.numeric(9),
                        content: faker.lorem.lines(2),
                        comments_count: 1,
                        comments: {
                            create: {
                                user: faker.internet.email(),
                                time: +faker.random.numeric(9),
                                content: faker.lorem.lines(2),
                            },
                        },
                    },
                },
            },
        });
    }
};

const start = async () => {
    await initNews();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

start()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);

        await prisma.$disconnect();

        process.exit(1);
    });
