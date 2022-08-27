import express from 'express';
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const PORT = 5000;

const app = express();
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
  const result = await prisma.news.findMany();
  res.json(result);
});

app.get('/item/:id', async (req, res) => {
  const { id } = req.params;

  const result = await prisma.news.findUnique({
    where: { id: Number(id) },
    include: {
      comments: {
        include: {
          comments: {
            include: {
              comments: {
                include: {
                  comments: true,
                },
              },
            },
          },
        },
      },
    },
  });
  res.json(result);
});

prisma.$use(async (params, next) => {
  if (params.action == 'create') {
    if (Object.keys(params.args.data.comments).length !== 0) {
      const addCountComment = (obj: any) => {
        Object.keys(obj).forEach((key) => {
          if (key === 'comments' && Object.keys(obj[key]).length > 0) {
            obj.comments_count = Object.keys(obj[key]).length;
          }
          if (typeof obj[key] === 'object') {
            addCountComment(obj[key]);
            return;
          }
        });
      };
      addCountComment(params.args.data);
    }
    if (params.model == 'Comments') {
      const parentId = params.args.data.parentId ?? params.args.data.newsId;
      const query = {
        where: {
          id: parentId,
        },
        data: {
          comments_count: {
            increment: 1,
          },
        },
      };
      if (params.args.data.parentId != null) {
        await prisma.comments.update(query);
      } else if (params.args.data.newsId != null) {
        await prisma.news.update(query);
      }
    }
  }
  return next(params);
});

const start = async () => {
  const iterations = 1;

  const initNews = Promise.all(
    new Array(iterations).fill(prisma.news).map(
      async () =>
        await prisma.news.create({
          data: {
            user: faker.internet.email(),
            time: +faker.random.numeric(9),
            points: +faker.random.numeric(2),
            title: faker.lorem.lines(),
            url: faker.internet.url(),
            comments: {
              create: {
                user: faker.internet.email(),
                time: +faker.random.numeric(9),
                content: faker.lorem.lines(2),
                comments: {
                  create: {
                    user: faker.internet.email(),
                    time: +faker.random.numeric(9),
                    content: faker.lorem.lines(2),
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
            },
          },
        }),
    ),
  );

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
