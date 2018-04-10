import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
 
    describe("greet", () => {
 
        it("returns Hello World", () => {
 
            // Arrange
            let x = new Greeter("World");
 
            // Act
            let result = x.greet();
 
            // Assert
            expect(result).toEqual("Hello World");
        });
    });
});