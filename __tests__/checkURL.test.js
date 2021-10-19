import checkURL from "../src/client/js/checkURL"


describe('Test, the function "checkURL" should exist' , () => {
    test('should return true',  () => {
        expect(checkURL).toBeDefined();
    });
});
describe('Test, the function "checkURL" should be a function' , () => {
    test('should be a function',  () => {
        expect(typeof checkURL).toBe("function");
    });
});

describe('Test, the function "checkURL" for valid url' , () => {
    let url = "https://www.mayoclinichealthsystem.org/hometown-health/featured-topic/covid-19-vaccine-myths-debunked";
    test('should return true', () => {
        const response = checkURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});