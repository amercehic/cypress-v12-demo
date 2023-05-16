import { BasePage } from '../pages/base.page';
import CreateAssetPage from '../pages/create-asset.page';
import { PanelHeaderPage } from '../pages/panel-header.page';
import { interceptCreateAsset } from '../support/api/intercept';
import { deleteAsset } from '../support/api/requests/asset.requests';
import { ApiAssertions } from '../support/wrappers/api-assertions';

describe('asset management spec', () => {
  let assetId: any;

  beforeEach(() => {
    BasePage.open();
  });

  after(() => {
    deleteAsset(assetId);
  });

  it('navigates between Asset Management tabs', () => {
    PanelHeaderPage.clickOnTab('Asset pool');
    PanelHeaderPage.verifyTabIsActive('Asset pool', '/asset-pool');

    PanelHeaderPage.clickOnTab('Asset types');
    PanelHeaderPage.verifyTabIsActive('Asset types', '/asset-types');

    PanelHeaderPage.clickOnTab('Allocated assets');
    PanelHeaderPage.verifyTabIsActive('Allocated assets', '/allocated-assets');
  });

  it('creates a new asset type', () => {
    // navigate to Asset pool tab
    PanelHeaderPage.clickOnTab('Asset pool');
    // click on create new asset button and verifies that Create asset button is disabled
    PanelHeaderPage.clickCreateNewAssetButton();
    CreateAssetPage.verifyCreateAssetButtonIsDisabled();

    cy.fixture('asset-management/asset').then(assetManagementData => {
      CreateAssetPage.typeAssetName(assetManagementData.assetName);
      CreateAssetPage.selectAssetType(0);

      interceptCreateAsset();

      CreateAssetPage.clickCreateAssetButton();

      cy.wait('@createAsset').then(interception => {
        ApiAssertions.assertStatusCode(interception.response.statusCode, 201);

        const responseBody = interception.response.body;

        assetId = responseBody.data.id;
      });
    });
  });
});
