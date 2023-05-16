export class Assertions {
  /**
   * Check if an element has a specific class
   * @param {string} selector DOM element selector
   * @param {string} className The class name to check for
   */
  public static elementShouldHaveClass(element: any, className: string): void {
    element.should('have.class', className);
  }

  /**
   * Check if the current URL contains the specified text
   * @param {string} urlText The text to check for in the URL
   */
  public static urlShouldContain(urlText: string): void {
    cy.url().should('include', urlText);
  }

  /**
   * Assert that a button is disabled
   * @param {string} selector Button selector
   */
  public static assertButtonIsDisabled(selector: string): void {
    cy.get(selector).should('be.disabled');
  }
}
