import 'reflect-metadata';
import 'dotenv/config';
import { Server } from './server/Server';
import { initializeContainers, shutdownContainers } from '../src/cross-cutting/infrastructure/container/Container';

(async () => {
  await initializeContainers();

  try {
    const server = new Server();

    await server.start();
  } catch (error) {
    console.error(error);
  }
})();

process.on('SIGINT', async () => {
  await shutdownContainers();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await shutdownContainers();
  process.exit(0);
});
