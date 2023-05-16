import { getElementByText } from '../support/helpers/utils';
import { Actions } from '../support/wrappers/actions';
import { ApiAssertions } from '../support/wrappers/api-assertions';
import { Assertions } from '../support/wrappers/assertions';

export default class CreateAssetPage {
  // ### PAGE ELEMENTS ###
  private static createAssetButton = 'button.btn-primary';
  private static assetNameInput = 'input[id=name]';
  private static assetTypeDropdown = 'div.form-dropdown.dropdown';
  private static assetTypeDropdownItem = 'div.form-dropdown-menu button.dropdown-item';

  // ### PAGE ACTIONS ###
  public static typeAssetName(assetName: string): void {
    Actions.typeInput(this.assetNameInput, assetName);
  }

  public static selectAssetType(optionIndex: number): void {
    Actions.selectOptionByIndex(this.assetTypeDropdown, this.assetTypeDropdownItem, optionIndex);
  }

  public static clickCreateAssetButton(): void {
    Actions.click(this.createAssetButton);
  }

  // ### PAGE ASSERTIONS ###
  public static verifyCreateAssetButtonIsDisabled(): void {
    Assertions.assertButtonIsDisabled(this.createAssetButton);
  }

  // ### INTERCEPTIONS ###

  public static interceptAssetCreation(): void {
    cy.intercept('service/asset/v1/assets').as('createAsset');

    // Perform the action that creates the asset

    cy.wait('@createAsset').then(interception => {
      ApiAssertions.assertStatusCode(interception.response.statusCode, 201);
    });
  }
}
