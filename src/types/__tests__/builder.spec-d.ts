/**
 * @file Type Tests - Builder
 * @module esast-util-builder/tests/types/unit-d/Builder
 */

import type * as esast from '@flex-development/esast'
import type * as build from '@flex-development/unist-util-builder'
import type { Match, Type } from '@flex-development/unist-util-types'
import type TestSubject from '../builder'

describe('unit-d:types/Builder', () => {
  it('should equal never if T does not extend Type<AnyNode>', () => {
    expectTypeOf<TestSubject<Type>>().toBeNever()
  })

  describe('T extends Type<AnyNode>', () => {
    it('should equal build.Builder<Match<AnyNode, T>>', () => {
      // Arrange
      type T = Type<esast.Comment>
      type Expect = build.Builder<Match<esast.AnyNode, T>>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
