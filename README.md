# prop-types-docs [![CircleCI](https://circleci.com/gh/farism/prop-types-docs.svg?style=svg)](https://circleci.com/gh/farism/prop-types-docs)

### Document your prop types!

### [API Documentation](https://github.com/farism/prop-types-docs/blob/master/API.md)

### Installation

```sh
yarn add prop-types-docs
```

```sh
npm install prop-types-docs
```

### Given the following component:

```js
const MyComponent = ({ name, age, contacts }) => {
  <div>
    name: {name}
    age: {age}
    contacts: {contacts.map(() => ...)}
  </div>
}
```

### We can document our props:

```js
import PropTypes, { withPropDocs } from 'prop-types-docs'

export default withPropDocs({
  name: 'MyComponent', // optional
  props: {
    name: {
      type: PropTypes.string,
      required: true,
      description: "The user's name",
    },
    age: {
      type: PropTypes.number,
      required: true,
      description: "The user's age",
    },
    contacts: {
      type: PropTypes.array,
      default: [],
      description: 'A list of contacts',
    },
  },
})(MyComponent)
```

### Which is the equivalent of:

```js
import PropTypes from 'prop-types'

MyComponent.displayName = 'MyComponent'

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  contacts: PropTypes.array,
}

MyComponent.defaultProps = {
  contacts: [],
}
```

## Notes

1. `prop-types-docs` is not a higher order component. It simply assigns the `.propTypes` and `.defaultProps` on the provided component. This also allows it to be used anywhere in a compose chain.

2. In addition to setting the prop types, it also stores the `props` meta object on the `.propInfo` key on the provided component.

## Todo

Better support for complex proptypes, e.g. `arrayOf(shape())`.
