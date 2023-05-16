// Retrieve the baseUrl from Cypress configuration
const baseUrl = Cypress.config().baseUrl;

export const apiUris = {
  asset: 'service/asset/v1/assets',
};

export function deleteAsset(assetId: string): Cypress.Chainable {
  const url = `${baseUrl}${apiUris.asset}/${assetId}`;
  return cy.request('DELETE', url);
}
