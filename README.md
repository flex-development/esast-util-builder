# esast-util-builder

[![github release](https://img.shields.io/github/v/release/flex-development/esast-util-builder.svg?include_prereleases&sort=semver)](https://github.com/flex-development/esast-util-builder/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/esast-util-builder.svg)](https://npmjs.com/package/@flex-development/esast-util-builder)
[![codecov](https://codecov.io/gh/flex-development/esast-util-builder/graph/badge.svg?token=mt91xOxzNo)](https://codecov.io/gh/flex-development/esast-util-builder)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/esast-util-builder.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[esast][esast] utility to build trees

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`u(type[, builder])`](#utype-builder)
  - [`AnyNode`](#anynode)
  - [`Builder<[T]>`](#buildert)
  - [`Match<N, Check>`](#matchn-check)
  - [`Type<[T]>`](#typet)
- [Types](#types)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This is a tiny but useful utility for building [esast][esast] nodes.

## When should I use this?

Use this package when you need to create [esast][esast] nodes.

If you need to build nodes for other ASTs, use [`unist-util-builder`][unist-util-builder] instead.

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][yarn]:

```sh
yarn add @flex-development/esast-util-builder
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { u } from 'https://esm.sh/@flex-development/esast-util-builder'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { u } from 'https://esm.sh/@flex-development/esast-util-builder'
</script>
```

## Use

**TODO**: use

## API

This package exports the identifier [`u`](#utype-builder). There is no default export.

### `u(type[, builder])`

Build an [esast][esast] node using a child node array, properties object, or value.

If `builder` is omitted, a void node (a node with only a `type` field) will be created.

> 👉 Undefined literals must be created using a properties object, rather than a value. Passing `undefined` will create
> a void node.

#### Type Parameters

- `T` (`Type<AnyNode>`) - esast node type

##### Parameters

- `type` (`T`) - esast node type
- `builder` ([`Builder<T>`](#buildert), optional) - node children, properties, or value

##### Returns

`Match<AnyNode, T>` new esast node.

### `AnyNode`

Union of nodes that can occur in esast (TypeScript type).

> 👉 This type is exported from [`@flex-development/esast`][esast].\
> See [`AnyNode`][anynode] for more details.

### `Builder<[T]>`

Construct a union of esast node builders (TypeScript type).

**See also**: [`ub.AnyBuilder`][anybuilder], [`ub.Builder`][buildert]

<!-- dprint-ignore-start -->
```ts
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
```
<!-- dprint-ignore-end -->

### `Match<N, Check>`

Check if node `N` passes a test. (TypeScript type).

> 👉 This type is exported from [`@flex-development/unist-util-types`][unist-util-types].\
> See [`Match<N, Check>`][matchn-check] for more details.

### `Type<[T]>`

Extract [*type*][type] from node `T` (TypeScript type).

> 👉 This type is exported from [`@flex-development/unist-util-types`][unist-util-types].\
> See [`Type<[T]>`][typet] for more details.

## Types

This package is fully typed with [TypeScript][typescript].

## Related

- [`esast`][esast] &mdash; ecmascript abstract syntax tree format

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[anybuilder]: https://github.com/flex-development/unist-util-builder#anybuilder
[anynode]: https://github.com/flex-development/esast/blob/main/src/types/any-node.ts
[buildert]: https://github.com/flex-development/unist-util-builder#buildert
[esast]: https://github.com/flex-development/esast
[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[esmsh]: https://esm.sh/
[matchn-check]: https://github.com/flex-development/unist-util-types#typet
[type]: https://github.com/syntax-tree/unist#type
[typescript]: https://www.typescriptlang.org
[typet]: https://github.com/flex-development/unist-util-types#typet
[unist-util-builder]: https://github.com/flex-development/unist-util-builder
[unist-util-types]: https://github.com/flex-development/unist-util-types
[yarn]: https://yarnpkg.com
