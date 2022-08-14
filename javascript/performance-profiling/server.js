// @ts-ignore
const fastify = require('fastify')({ logger: true });
const crypto = require('crypto');

let users = [];

fastify.get('/', async (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify.get('/newUser', async (request, reply) => {
  let username = request.query.username || '';
  const password = request.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || users[username]) {
    return reply.statusCode = 400;
  }

  const salt = crypto.randomBytes(128).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  users[username] = { salt, hash };

  reply.statusCode = 200;
});

fastify.get('/auth', async (request, reply) => {
  let username = request.query.username || '';
  const password = request.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || !users[username]) {
    return reply.statusCode = 400;
  }

  const { salt, hash } = users[username];
  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    reply.statusCode = 200;
  } else {
    reply.statusCode =401;
  }
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({
      port: 3000
    });
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();