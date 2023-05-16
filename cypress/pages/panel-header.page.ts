import { getElementByText } from '../support/helpers/utils';
import { Actions } from '../support/wrappers/actions';
import { Assertions } from '../support/wrappers/assertions';

export class PanelHeaderPage {
  // ### PAGE ELEMENTS ###
  private static panelTab = 'a.tab';
  private static createNewAssetButton =
    'button.btn.btn-primary[ng-reflect-router-link="/assets/new"]';

  // ### PAGE ACTIONS ###
  public static clickOnTab(tabName: string): void {
    Actions.clickByText(this.panelTab, tabName);
  }

  public static clickCreateNewAssetButton(): void {
    Actions.click(this.createNewAssetButton);
  }

  // ### PAGE ASSERTIONS ###
  /**
   * Check if the specified tab is active and its URL matches the expected URL
   * @param {string} tabName Text content of the tab to identify it
   * @param {string} expectedUrl The expected URL when the tab is active
   */
  public static verifyTabIsActive(tabName: string, expectedUrl: string): void {
    const tabElement = getElementByText(this.panelTab, tabName);

    Assertions.elementShouldHaveClass(tabElement, 'active');
    Assertions.urlShouldContain(expectedUrl);
  }
}
