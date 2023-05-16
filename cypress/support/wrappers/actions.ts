import { getElement } from '../helpers/utils';

export class Actions {
  /**
   * Click on element
   * @param {string} selector DOM element selector
   * @return Cypress.Chainable object
   */
  public static click(selector: string): Cypress.Chainable {
    return getElement(selector).click();
  }

  /**
   * Click on element containing specific text
   * @param {string} selector DOM element selector
   * @param {string} text Text content to search within the element
   * @return Cypress.Chainable object
   */
  public static clickByText(selector: string, text: string): Cypress.Chainable {
    return getElement(selector).contains(text).click();
  }

  /**
   * Type text into an input field
   * @param {string} selector Input field selector
   * @param {string} text Text to type into the input field
   */
  public static typeInput(selector: string, text: string): void {
    getElement(selector).type(text);
  }

  //   /** THIS IS NOT WORKING BECAUSE YOU ARE NOT USING <select>
  //    * Select an option from a dropdown by text
  //    * @param {string} selector Dropdown selector
  //    * @param {string} optionText Text of the option to select
  //    */
  //   selectDropdownOptionByText(selector: string, optionText: string): void {
  //     getElement(selector)
  //       .select(optionText)
  //       .invoke('val')
  //       .should('eq', optionText.toLowerCase().replace(/\s/g, ''));
  //   }

  /**
   * Select an item from a dropdown by text
   * @param {string} dropdownSelector Dropdown container selector
   * @param {string} itemSelectorSelector Selector for the item within the dropdown
   * @param {string} itemText Text of the item to select
   */
  public static selectItemFromDropdownByText(
    dropdownSelector: string,
    itemSelector: string,
    itemText: string,
  ): void {
    getElement(dropdownSelector).click();

    getElement(dropdownSelector).contains(itemSelector, itemText).click();
  }

  /**
   * Selects an option from a dropdown by its index
   * @param {string} dropdownSelector Dropdown container selector
   * @param {string} itemSelectorSelector Selector for the item within the dropdown
   * @param {number} optionIndex Index of the option to select
   */
  public static selectOptionByIndex(
    dropdownSelector: string,
    itemSelector: string,
    optionIndex: number,
  ): void {
    getElement(dropdownSelector)
      .click()
      .find('button.dropdown-item')
      .eq(optionIndex)
      .then($option => {
        const optionValue = $option.text().trim();
        this.clickByText(itemSelector, optionValue);
      });
  }
}
