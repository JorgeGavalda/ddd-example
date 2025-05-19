import { singleton } from 'tsyringe';
import { UserRepository } from '../../domain/contracts/UserRepository';
import { User } from '../../domain/entities/User';
import { CreateUserUseCaseDto } from '../dtos/CreateUserUseCaseDto';

@singleton()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
  ) { }

  async execute(dto: CreateUserUseCaseDto): Promise<boolean> {
    const { name, email } = dto;

    const user = User.create({
      name,
      email,
    });

    if (!user.isEmailValid()) {
      return false;
    }

    const response = await this.userRepository.save(user);

    return response;
  }
}
