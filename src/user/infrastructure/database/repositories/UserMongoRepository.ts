import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/contracts/UserRepository';
import { UserMongoMapper } from '../mappers/UserMongoMapper';
import { DatabaseConnection } from '../../../../cross-cutting/infrastructure/database/DatabaseConnection';

export class UserMongoRepository implements UserRepository {
  constructor(
    private readonly databaseConnection: DatabaseConnection,
  ) { }

  async save(user: User): Promise<boolean> {
    const userParsed = UserMongoMapper.execute(user);

    // implementación de la persistencia en mongo de acuerdo al esquema de la entidad

    return true;
  }
}
