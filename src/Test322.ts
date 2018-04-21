interface IFoovalue1 {
    bar1: string;
}

interface ISquareConfig {
    color?: string;
    width?: number;
}

function createSmallSquare(config: ISquareConfig): { color: string; area: number } {
    const myFirstSquare = { color: "Blue", area: 25 };
    if (config.color) {
        myFirstSquare.color = config.color;
    }
    if (config.width) {
        myFirstSquare.area = config.width * config.width;
    }
    return myFirstSquare;
}

export class MySquare {
    private color: string;
    private width: number;
    private area: number;

    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }

    public calArea() {
        this.area = this.width * this.width;
    }
}
