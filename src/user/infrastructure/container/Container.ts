import { container, DependencyContainer, instanceCachingFactory } from 'tsyringe';
import { DependencyIdentifier } from '../../../cross-cutting/domain/dependencyIdentifier/DependencyIdentifier';
import { UserDependencyIdentifier } from '../../domain/dependencyIdentifier/DependencyIdentifier';
import { UserMongoRepository } from '../database/repositories/UserMongoRepository';
import { CreateUserUseCase } from '../../application/use-cases/CreateUserUseCase';

export const UserContainer = {
  register(): void {
    registerRepositories();
    registerUseCases();
  },
};

const registerRepositories = (): void => {
  container.register(UserDependencyIdentifier.UserRepository, {
    useFactory: instanceCachingFactory((container) => {
      return new UserMongoRepository(container.resolve(DependencyIdentifier.DatabaseConnection))
    }),
  })
};

const registerUseCases = (): void => {
  container.register<CreateUserUseCase>(CreateUserUseCase, {
    useFactory: (container: DependencyContainer): CreateUserUseCase => {
      const useCase = new CreateUserUseCase(
        container.resolve(UserDependencyIdentifier.UserRepository),
      );

      return useCase;
    }
  });
};
