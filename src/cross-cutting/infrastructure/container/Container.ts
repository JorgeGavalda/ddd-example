import { container, instanceCachingFactory } from 'tsyringe';
import { DependencyIdentifier } from '../../domain/dependencyIdentifier/DependencyIdentifier';
import { UserContainer } from '../../../user/infrastructure/container/Container';
import { DatabaseConnection } from '../database/DatabaseConnection';

const initializeContainers = async () => {
  await registerDatabase();
  await registerRepositories();
}

const shutdownContainers = async () => {
  // cerrar la conexión a la base de datos

  await container.dispose();
}

const registerDatabase = async () => {
  // conexión a la base de datos

  const mongoConnection = new DatabaseConnection();
  await mongoConnection.start();

  container.register(DependencyIdentifier.DatabaseConnection, {
    useFactory: instanceCachingFactory(() => mongoConnection),
  });
}

const registerRepositories = () => {
  UserContainer.register();
}

export { initializeContainers, shutdownContainers };
