export class ApiAssertions {
  /**
   * Assert that a status code is equal to expected status code
   * @param {number} statusCode The status code to check
   * @param {number} statusCode Expected status code to check
   */
  public static assertStatusCode(statusCode: number, expectedStatusCode: number): void {
    expect(statusCode).to.equal(expectedStatusCode);
  }
}
