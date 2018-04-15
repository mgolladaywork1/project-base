import { Greeter } from "../src/Greeter";

describe("Greeter", () => {

    describe("greet", () => {

        it("returns Hello World", () => {

            // Arrange
            const x = new Greeter("World");

            // Act
            const result = x.greet();

            // Assert
            expect(result).toEqual("Hello World");
        });
    });
});
