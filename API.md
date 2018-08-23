```js
import PropTypes, { withPropDocs } from 'prop-types-docs'
```

### `withPropDocs`

```js
withPropDocs({
  name: 'MyComponent', // the display name
  props: {
    contacts: {
      type: PropTypes.array,
      required: false,
      default: [],
    },
  },
})
```

### `PropTypes.array`

```js
withPropDocs({
  props: {
    contacts: {
      type: PropTypes.array,
      required: false,
      default: [],
    },
  },
})
```

### `PropTypes.bool`

```js
withPropDocs({
  props: {
    isActive: {
      type: PropTypes.bool,
      required: false,
      default: false,
    },
  },
})
```

### `PropTypes.func`

```js
withPropDocs({
  props: {
    onChange: {
      type: PropTypes.func,
      required: false,
      default: () => {},
    },
  },
})
```

### `PropTypes.number`

```js
withPropDocs({
  props: {
    age: {
      type: PropTypes.number,
      required: false,
      default: 0,
    },
  },
})
```

### `PropTypes.object`

```js
withPropDocs({
  props: {
    person: {
      type: PropTypes.object,
      required: false,
      default: {},
    },
  },
})
```

### `PropTypes.string`

```js
withPropDocs({
  props: {
    username: {
      type: PropTypes.string,
      required: false,
      default: '',
    },
  },
})
```

### `PropTypes.symbol`

### `PropTypes.node`

```js
withPropDocs({
  props: {
    children: {
      type: PropTypes.node,
    },
  },
})
```

### `PropTypes.element`

```js
withPropDocs({
  props: {
    children: {
      type: PropTypes.element,
    },
  },
})
```

### `PropTypes.oneOf`

```js
withPropDocs({
  props: {
    colors: {
      type: PropTypes.oneOf(['red', 'green', 'blue']),
      required: false,
      default: '',
    },
  },
})
```

### `PropTypes.oneOfType`

```js
withPropDocs({
  props: {
    username: {
      type: PropTypes.oneOfType([PropTypes.string]),
      required: false,
      default: '',
    },
  },
})
```

### `PropTypes.instanceOf`

### `PropTypes.arrayOf`

```js
withPropDocs({
  props: {
    username: {
      type: PropTypes.arrayOf([PropTypes.string]),
      required: false,
      default: [],
    },
  },
})
```

### `PropTypes.objectOf`

```js
withPropDocs({
  props: {
    username: {
      type: PropTypes.objectOf([PropTypes.string]),
      required: false,
      default: {},
    },
  },
})
```

### `PropTypes.shape`

```js
withPropDocs({
  props: {
    person: PropTypes.shape({
      firstName: {
        type: PropTypes.string,
        required: true,
      },
      lastName: {
        type: PropTypes.string,
        required: true,
      },
      pet: PropTypes.shape({
        age: {
          type: PropTypes.number,
        },
      }),
    }),
  },
})
```
