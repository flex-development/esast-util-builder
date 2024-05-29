/**
 * @file Type Tests - Builder
 * @module esast-util-builder/tests/types/unit-d/Builder
 */

import type * as esast from '@flex-development/esast'
import type * as build from '@flex-development/unist-util-builder'
import type { Match, Type } from '@flex-development/unist-util-types'
import type * as mdast from 'mdast'
import type * as unist from 'unist'
import type TestSubject from '../builder'

describe('unit-d:types/Builder', () => {
  it('should equal never if T does not extend Type<AnyNode>', () => {
    expectTypeOf<TestSubject<Type>>().toBeNever()
  })

  describe('T extends Type<AnyNode>', () => {
    describe('node', () => {
      it('should construct node builders union', () => {
        // Arrange
        type T = Type<mdast.Code>
        type Expect = build.Builder<Match<esast.AnyNode, T>>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('parent', () => {
      it('should construct node builders union', () => {
        // Arrange
        type T = Type<esast.CallExpression>
        type Expect =
          | (
            | esast.Comment
            | esast.Expression
            | esast.SpreadElement
            | esast.Super
          )[]
          | (esast.Expression | esast.SpreadElement | esast.Super)[]
          | {
            children: (
              | esast.Comment
              | esast.Expression
              | esast.SpreadElement
              | esast.Super
            )[]
            new: boolean
            data?: esast.CallExpressionData | undefined
            optional: boolean
            position?: unist.Position | undefined
          }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })
  })
})
