# doc-prop-types [![CircleCI](https://circleci.com/gh/farism/doc-prop-types.svg?style=svg)](https://circleci.com/gh/farism/doc-prop-types)

## Document your prop types

```js
import PropTypes, { withDocProps } from 'doc-prop-types'

const Component = ({ name, age, contacts }) => {
  <div>
    name: {name}
    age: {age}

    contacts:
    {contacts.map(() => ...)}
  </div>
}

export default withDocProps({
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
