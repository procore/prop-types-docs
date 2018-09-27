const PropTypes = require('prop-types')

const deprecated = (message, checker) => (props, propName, componentName) => {
  if (props[propName] !== undefined) {
    console.warn(
      `Property "${propName}" of ${componentName} has been deprecated.`,
      message
    )
  }
  return checker(props, propName, componentName)
}

const enhanceTypeChecker = prop => {
  const checker = prop.required ? prop.type.req() : prop.type.fn()
  return prop.deprecated ? deprecated(prop.deprecated, checker) : checker
}

const getComponentPropTypes = props =>
  Object.keys(props).reduce(
    (acc, key) =>
      Object.assign({}, acc, { [key]: enhanceTypeChecker(props[key]) }),
    {}
  )

const getComponentDefaultProps = props =>
  Object.keys(props).reduce((acc, key) => {
    const defaultProp =
      props[key].type.name === 'shape'
        ? getComponentDefaultProps(props[key].props)
        : props[key].default
    return defaultProp === undefined
      ? acc
      : Object.assign({}, acc, { [key]: defaultProp })
  }, {})

const withPropDocs = ({
  name = '',
  description = '',
  props = {},
}) => Component => {
  Component.displayName = name
  Component.description = description
  Component.propInfo = props
  Component.propTypes = getComponentPropTypes(props)
  Component.defaultProps = getComponentDefaultProps(props)

  return Component
}

const array = {
  name: 'array',
  fn: () => PropTypes.array,
  req: () => PropTypes.array.isRequired,
}

const bool = {
  name: 'boolean',
  fn: () => PropTypes.bool,
  req: () => PropTypes.bool.isRequired,
}

const func = {
  name: 'function',
  fn: () => PropTypes.func,
  req: () => PropTypes.func.isRequired,
}

const number = {
  name: 'number',
  fn: () => PropTypes.number,
  req: () => PropTypes.number.isRequired,
}

const object = {
  name: 'object',
  fn: () => PropTypes.object,
  req: () => PropTypes.object.isRequired,
}

const string = {
  name: 'string',
  fn: () => PropTypes.string,
  req: () => PropTypes.string.isRequired,
}

const symbol = {
  name: 'symbol',
  fn: () => PropTypes.symbol,
  req: () => PropTypes.symbol.isRequired,
}

const node = {
  name: 'node',
  fn: () => PropTypes.node,
  req: fn => PropTypes.node.isRequired,
}

const element = {
  name: 'element',
  fn: () => PropTypes.element,
  req: fn => PropTypes.element.isRequired,
}

const oneOf = arr => ({
  arr,
  name: 'oneOf',
  fn: () => PropTypes.oneOf(arr),
  req: () => PropTypes.oneOf(arr).isRequired,
})

const oneOfType = types => ({
  types,
  name: 'oneOfType',
  fn: () => PropTypes.oneOfType(types.map(type => type.fn())),
  req: () => PropTypes.oneOfType(types.map(type => type.fn())).isRequired,
})

const instanceOf = type => ({
  name: 'instanceOf',
  fn: () => PropTypes.instanceOf(type),
  req: () => PropTypes.instanceOf(type).isRequired,
  type,
})

const arrayOf = type => ({
  type,
  name: 'arrayOf',
  fn: () => PropTypes.arrayOf(type.fn()),
  req: () => PropTypes.arrayOf(type.fn()).isRequired,
})

const objectOf = type => ({
  type,
  name: 'objectOf',
  fn: () => PropTypes.objectOf(type.fn()),
  req: () => PropTypes.objectOf(type.fn()).isRequired,
})

const shape = props => ({
  props,
  type: {
    name: 'shape',
    fn: () => PropTypes.shape(getComponentPropTypes(props)),
    req: () => PropTypes.shape(getComponentPropTypes(props)).isRequired,
    default: {},
  },
})

module.exports = {
  array,
  bool,
  func,
  number,
  object,
  string,
  symbol,
  node,
  element,
  oneOf,
  oneOfType,
  instanceOf,
  arrayOf,
  objectOf,
  shape,
  getComponentPropTypes,
  getComponentDefaultProps,
  withPropDocs,
}
