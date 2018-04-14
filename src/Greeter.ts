export class Greeter {
    constructor(public message: string) {

    }

    public greet(): string {
        return "Hello " + this.message;
    }
}
