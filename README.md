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

### Babel

Add the following to your webpack config:

```js
module: {
  rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        plugins: [
          ['transform-react-jsx', { pragma: 'CycleReactPragma.createElement' }],
        ]
      }
    }
  ]
},
```

If you used `create-cycle-app` you may have to eject to modify the config.

### Automatically providing CycleReactPragma

You can avoid having to import `cycle-react-pragma` in every jsx file by allowing webpack to provide it:

```js
plugins: [
  new webpack.ProvidePlugin({
    CycleReactPragma: ['cycle-react-pragma', 'default']
  })
],
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

If webpack is providing `CycleReactPragma` you will need to add typings to `custom-typings.d.ts`:

```js
declare var CycleReactPragma: any;
```


## Usage

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

## Notes

Please ensure you are depending on compatible versions of `@cycle/react` and `@cycle/react-dom`. They should both be at least version `2.1.x`.

```
yarn list @cycle/react
```

should return a single result.
