/**
 * @file Functional Tests - u
 * @module esast-util-builder/tests/functional/u
 */

import type { Builder } from '#src/types'
import type * as esast from '@flex-development/esast'
import { u as build } from '@flex-development/unist-util-builder'
import type { Type } from '@flex-development/unist-util-types'
import testSubject from '../u'

vi.mock('@flex-development/unist-util-builder')

describe('functional:u', () => {
  it('should build node', () => {
    // Arrange
    const type: Type<esast.Root> = 'root'
    const builder: Builder<typeof type> = []

    // Act
    testSubject(type, builder)

    // Expect
    expect(build).toHaveBeenCalledOnce()
    expect(build).toHaveBeenCalledWith(type, builder)
  })
})
