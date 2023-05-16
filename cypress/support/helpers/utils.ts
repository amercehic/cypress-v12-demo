/**
 * Get a DOM element using selector
 * @param {string} selector DOM element selector
 * @return Cypress.Chainable object
 */
export function getElement(selector: string): Cypress.Chainable {
  return cy.get(selector);
}

/**
 * Get a DOM element using selector
 * @param {string} selector DOM element selector
 * @return Cypress.Chainable object
 */
export function getElementByText(selector: string, text: string): Cypress.Chainable {
  return cy.get(selector).contains(text);
}
