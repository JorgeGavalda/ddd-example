import { singleton } from 'tsyringe';
import { CreateUserUseCase } from '../../../application/use-cases/CreateUserUseCase';
// si usas express por ejemplo
import { Request, Response } from 'express';
import { CreateUserRequest } from '../requests/CreateUserRequest';

@singleton()
export class CreateUserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
  ) { }

  async execute(req: Request, res: Response): Promise<void> {
    const { name, email } = CreateUserRequest.parse(req);

    try {
      const response = await this.createUserUseCase.execute({ name, email });

      if (!response) {
        res.status(400).json({ message: 'Error al crear el usuario' });
        return;
      }

      res.status(200).json({ message: 'Usuario creado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario' });
    }
  }
}
