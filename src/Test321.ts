export class Test321 {
  constructor(public message: string) {

  }
  test001(): boolean {
      return true;
  }

  test002(): boolean {
    let a: number = 1;
    let b: number = 1 + 1;
    return ( a == b );
  }

  test003(): number {
    return 1;  
  }
}