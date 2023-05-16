export class BasePage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public static open(path: string = ''): void {
    const baseUrl = Cypress.config('baseUrl');
    const url = path ? `${baseUrl}/${path}` : baseUrl;

    cy.url().then(currentUrl => {
      if (currentUrl === url) {
        cy.reload();
      } else {
        cy.visit(url, {
          timeout: 60000,
          failOnStatusCode: false,
        });
      }
    });
  }
}
