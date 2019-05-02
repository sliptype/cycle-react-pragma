# cycle-react-pragma
A jsx pragma for @cycle/react

## Motivation

Although JSX only has secondary support in [Cycle.js](https://github.com/cyclejs), it is highly familiar to users of [React](https://github.com/facebook/react).

Recently, it was made possible to [render React components in Cycle and vice versa](https://staltz.com/use-react-in-cyclejs-and-vice-versa.html).

This pragma allows you to use React-style JSX when rendering React components in Cycle.js

## Installation

```bash
yarn add cycle-react-pragma
```

### Typescript

Add the following to your `tsconfig.json`:

```js
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "CycleReactPragma.createElement",
  },
  "files": ["node_modules/cycle-react-pragma/custom-typings.d.ts"],
  "include": ["src/**/*"]
}
```

Import `cycle-react-pragma` in the modules using jsx:

```js
import CycleReactPragma from 'cycle-react-pragma';
```

### Babel


### Usage

```js
function view(state$: Stream<State>): Stream<ReactElement> {
    return state$.map(({ count }) => (
        <div>
            <h2>Counter: {count}</h2>
            <button sel="add">Add</button>
            <button sel="subtract">Subtract</button>
        </div>
    ));
}
```

🚧
