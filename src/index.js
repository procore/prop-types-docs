const PropTypes = require('prop-types')

const getComponentPropTypes = props =>
  Object.keys(props).reduce(
    (acc, key) =>
      Object.assign({}, acc, {
        [key]: props[key].required
          ? props[key].type.req()
          : props[key].type.fn(),
      }),
    {},
  )


const getComponentDefaultProps = (props) => {
  return Object.keys(props).reduce((acc, key) => {
    let defaultProp = {};
    if (props[key].type.name === 'shape') {
      const shapeDefaults = getComponentDefaultProps(props[key].props);
      defaultProp = Object.keys(shapeDefaults).length > 0 ? shapeDefaults : undefined;
    } else {
      defaultProp = props[key].default;
    }
    return defaultProp === undefined
      ? acc
      : Object.assign({}, acc, { [key]: defaultProp })
  }, {})
}

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

const shape = (props) => {
  return ({
    props,
    type: {
      name: 'shape',
      fn: () => PropTypes.shape(getComponentPropTypes(props)),
      req: () => PropTypes.shape(getComponentPropTypes(props)).isRequired
    }
  });
}

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
