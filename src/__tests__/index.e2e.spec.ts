/**
 * @file E2E Tests - api
 * @module esast-util-builder/tests/e2e/api
 */

import * as testSubject from '../index'

describe('e2e:esast-util-builder', () => {
  it('should expose public api', () => {
    expect(testSubject).to.have.keys(['u'])
  })
})
