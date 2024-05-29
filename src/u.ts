/**
 * @file u
 * @module esast-util-builder/u
 */

import type { AnyNode } from '@flex-development/esast'
import { u as build } from '@flex-development/unist-util-builder'
import type { Match, Type } from '@flex-development/unist-util-types'
import type { Builder } from './types'

/**
 * Build an [esast][esast] node using a child node array, properties object, or
 * value.
 *
 * If `builder` is omitted, a void node (a node with only a `type` field) will
 * be created.
 *
 * > 👉 Undefined literals must be created using a properties object, rather
 * > than a value. Passing `undefined` will create a void node.
 *
 * [esast]: https://github.com/flex-development/esast
 *
 * @see {@linkcode AnyNode}
 * @see {@linkcode Builder}
 * @see {@linkcode Match}
 * @see {@linkcode Type}
 *
 * @template {Type<AnyNode>} [T=Type<AnyNode>] - esast node type
 *
 * @param {T} type - esast node type
 * @param {Builder<T>?} [builder] - Node children, properties, or value
 * @return {Match<AnyNode, T>} esast node
 */
function u<T extends Type<AnyNode> = Type<AnyNode>>(
  type: T,
  builder?: Builder<T>
): Match<AnyNode, T> {
  return build(type as unknown as Type<Match<AnyNode, T>>, builder)
}

export default u
