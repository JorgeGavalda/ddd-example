import { Router } from 'express';
import { singleton } from 'tsyringe';
import { CreateUserController } from '../../src/user/infrastructure/http/controllers/CreateUserController';

@singleton()
export class UserRoutes {
  public router: Router;

  constructor(
    private readonly createUserController: CreateUserController,
  ) {
    this.router = Router();
    this.setup();
  }

  private setup(): void {
    this.router.post('/', this.createUserController.execute.bind(this.createUserController));
  }

  getRouter(): Router {
    return this.router;
  }
}
