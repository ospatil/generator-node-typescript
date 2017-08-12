export class <%= className %> {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  public greet(): string {
    return `Bonjour, ${this.greeting}!`;
  }
}
