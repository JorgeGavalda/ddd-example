import { RandomNumber } from '../services/RandomNumber';

export class Identifier {
  constructor(
    public readonly value: string,
  ) {}

  static create(): Identifier {
    const value = RandomNumber.generate();

    return new Identifier(value.toString());
  }

  static build(value: string): Identifier {
    return new Identifier(value);
  }

  toPrimitives(): string {
    return this.value;
  }
}
