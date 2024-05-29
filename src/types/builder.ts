/**
 * @file Type Aliases - Builder
 * @module esast-util-builder/types/Builder
 */

import type { AnyNode } from '@flex-development/esast'
import type * as ub from '@flex-development/unist-util-builder'
import type { Match, Type } from '@flex-development/unist-util-types'

/**
 * Construct a union of esast node builders.
 *
 * @see {@linkcode AnyNode}
 * @see {@linkcode Match}
 * @see {@linkcode Type}
 * @see {@linkcode ub.Builder}
 *
 * @template {Type} [T=Type<AnyNode>] - esast node type
 */
type Builder<T extends Type = Type<AnyNode>> = T extends Type<AnyNode>
  ? ub.Builder<Match<AnyNode, T>>
  : never

export type { Builder as default }
