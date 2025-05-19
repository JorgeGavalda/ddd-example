import { Identifier } from '../../../cross-cutting/domain/value-objects/Identifier';

export type UserPrimitives = {
  id: string;
  name: string;
  email: string;
}

export class User {
  constructor(
    private readonly _id: Identifier,
    readonly name: string,
    readonly email: string,
  ) { }

  get id(): string {
    return this._id.toPrimitives();
  }

  static create(primitives: Omit<UserPrimitives, 'id'>): User {
    const id = Identifier.create();

    return new User(
      id,
      primitives.name,
      primitives.email,
    );
  }

  static build(primitives: UserPrimitives): User {
    return new User(
      Identifier.build(primitives.id),
      primitives.name,
      primitives.email,
    );
  }

  toPrimitives(): UserPrimitives {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }

  isEmailValid(): boolean {
    return this.email.includes('@');
  }
}
