import { User } from '../../../domain/entities/User';
import { UserMongoType } from '../schema/UserMongoType';

export class UserMongoMapper {
  static execute(user: User): UserMongoType {
    return {
      _id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
