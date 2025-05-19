import { Request } from 'express';

type CreateUserRequestDto = {
  name: string;
  email: string;
}

export class CreateUserRequest {
  static parse(req: Request): CreateUserRequestDto {
    return {
      name: req.body.name,
      email: req.body.email,
    };
  }
}
