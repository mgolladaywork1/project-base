export class Test321 {
  constructor(public message: string) {

  }
  public test001(): boolean {
    return true;
  }

  public test002(): boolean {
    const a: number = 1;
    const b: number = 1 + 1;
    return (a === b);
  }

  public test003(): number {
    return 1;
  }

  public test004(): object {
    return { a: 15, b: 25 };
  }
}
