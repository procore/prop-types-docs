# prop-types-docs [![CircleCI](https://circleci.com/gh/farism/prop-types-docs.svg?style=svg)](https://circleci.com/gh/farism/prop-types-docs)

## Document your prop types

```js
import PropTypes, { withPropDocs } from 'prop-types-docs'

const Component = ({ name, age, contacts }) => {
  <div>
    name: {name}
    age: {age}

    contacts:
    {contacts.map(() => ...)}
  </div>
}

export default withPropDocs({
  name: { type: PropTypes.string, required: true },
  age: { type: PropTypes.number, required: true },
  contacts: { type: PropTypes.array, default: [] },
})(Component)
```

## Is the equivalent of

```js
import PropTypes from 'prop-types'

Component.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  contacts: PropTypes.array
}

Component.defaultProps = {
  contacts: []
}
```
