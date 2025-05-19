export class RandomNumber {
  static generate(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
