interface InterceptOptions {
  method: string;
  url: string | RegExp;
  alias: string;
  mockingSample?: object;
}

/**
 * Use intercept to intercept any API request and provide an alias for it.
 * If a mocking sample is provided, it will mock the response using this sample.
 * @param {InterceptOptions} options Options for intercepting the request
 */
export function intercept(options: InterceptOptions): void {
  const { method, url, alias, mockingSample } = options;

  if (mockingSample) {
    cy.intercept(method as any, url as any, req => {
      req.reply(mockingSample);
    }).as(alias);
  } else {
    cy.intercept(method as any, url as any).as(alias);
  }
}

export const interceptCreateAsset = (mockingSample?: object): void => {
  const options: InterceptOptions = {
    method: 'POST',
    url: '**/assets',
    alias: 'createAsset',
    mockingSample: mockingSample || undefined,
  };

  intercept(options);
};
