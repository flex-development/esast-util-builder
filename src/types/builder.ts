/**
 * @file Type Aliases - Builder
 * @module esast-util-builder/types/Builder
 */

import type { AnyNode } from '@flex-development/esast'
import type * as ub from '@flex-development/unist-util-builder'
import type { Match, Type } from '@flex-development/unist-util-types'
import type { Node } from 'unist'

/**
 * Construct a union of esast node builders.
 *
 * @see {@linkcode AnyNode}
 * @see {@linkcode Match}
 * @see {@linkcode Node}
 * @see {@linkcode Type}
 * @see {@linkcode ub.AnyBuilder}
 * @see {@linkcode ub.Builder}
 * @see {@linkcode ub.BuilderValue}
 *
 * @template {Type} [T=Type<AnyNode>] - esast node type
 */
// dprint-ignore-start
type Builder<T extends Type = Type<AnyNode>> = T extends Type<AnyNode>
  ? ub.Builder<Match<AnyNode, T>> extends infer B extends ub.AnyBuilder
    ? B extends ub.BuilderValue
      ? B
      : B extends readonly Node[]
        ? B[number][]
        : {
            [K in keyof B]: K extends 'children'
              ? B[K] extends infer U extends readonly Node[]
                ? U[number][]
                : never
              : B[K]
          }
    : never
  : never
// dprint-ignore-end

export type { Builder as default }
