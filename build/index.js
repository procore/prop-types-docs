'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PropTypes = require('prop-types');

var getComponentPropTypes = function getComponentPropTypes(props) {
  return Object.keys(props).reduce(function (acc, key) {
    return Object.assign({}, acc, _defineProperty({}, key, props[key].required ? props[key].type.req() : props[key].type.fn()));
  }, {});
};

var getComponentDefaultProps = function getComponentDefaultProps(props) {
  return Object.keys(props).reduce(function (acc, key) {
    return Object.assign({}, acc, _defineProperty({}, key, props[key].default));
  }, {});
};

var withPropDocs = function withPropDocs(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? '' : _ref$name,
      _ref$description = _ref.description,
      description = _ref$description === undefined ? '' : _ref$description,
      _ref$props = _ref.props,
      props = _ref$props === undefined ? {} : _ref$props;
  return function (Component) {
    Component.displayName = name;
    Component.description = description;
    Component.propInfo = props;
    Component.propTypes = getComponentPropTypes(props);
    Component.defaultProps = getComponentDefaultProps(props);

    return Component;
  };
};

var array = {
  name: 'array',
  fn: function fn() {
    return PropTypes.array;
  },
  req: function req() {
    return PropTypes.array.isRequired;
  }
};

var bool = {
  name: 'boolean',
  fn: function fn() {
    return PropTypes.bool;
  },
  req: function req() {
    return PropTypes.bool.isRequired;
  }
};

var func = {
  name: 'function',
  fn: function fn() {
    return PropTypes.func;
  },
  req: function req() {
    return PropTypes.bool.isRequired;
  }
};

var number = {
  name: 'number',
  fn: function fn() {
    return PropTypes.number;
  },
  req: function req() {
    return PropTypes.number.isRequired;
  }
};

var object = {
  name: 'object',
  fn: function fn() {
    return PropTypes.object;
  },
  req: function req() {
    return PropTypes.object.isRequired;
  }
};

var string = {
  name: 'string',
  fn: function fn() {
    return PropTypes.string;
  },
  req: function req() {
    return PropTypes.string.isRequired;
  }
};

var symbol = {
  name: 'symbol',
  fn: function fn() {
    return PropTypes.symbol;
  },
  req: function req() {
    return PropTypes.symbol.isRequired;
  }
};

var node = {
  name: 'node',
  fn: function fn() {
    return PropTypes.node;
  },
  req: function req(fn) {
    return PropTypes.node.isRequired;
  }
};

var element = {
  name: 'element',
  fn: function fn() {
    return PropTypes.element;
  },
  req: function req(fn) {
    return PropTypes.element.isRequired;
  }
};

var oneOf = function oneOf(arr) {
  return {
    arr: arr,
    name: 'oneOf',
    fn: function fn() {
      return PropTypes.oneOf(arr);
    },
    req: function req() {
      return PropTypes.oneOf(arr).isRequired;
    }
  };
};

var oneOfType = function oneOfType(types) {
  return {
    types: types,
    name: 'oneOfType',
    fn: function fn() {
      return PropTypes.oneOfType(types.map(function (type) {
        return type.fn();
      }));
    },
    req: function req() {
      return PropTypes.oneOfType(types.map(function (type) {
        return type.fn();
      })).isRequired;
    }
  };
};

var instanceOf = function instanceOf(type) {
  return {
    name: 'instanceOf',
    fn: function fn() {
      return PropTypes.instanceOf(type);
    },
    req: function req() {
      return PropTypes.instanceOf(type).isRequired;
    },
    type: type
  };
};

var arrayOf = function arrayOf(type) {
  return {
    type: type,
    name: 'arrayOf',
    fn: function fn() {
      return PropTypes.arrayOf(type.fn());
    },
    req: function req() {
      return PropTypes.arrayOf(type.fn()).isRequired;
    }
  };
};

var objectOf = function objectOf(type) {
  return {
    type: type,
    name: 'objectOf',
    fn: function fn() {
      return PropTypes.objectOf(type.fn());
    },
    req: function req() {
      return PropTypes.objectOf(type.fn()).isRequired;
    }
  };
};

var shape = function shape(props) {
  return {
    props: props,
    type: {
      name: 'shape',
      fn: function fn() {
        return PropTypes.shape(getComponentPropTypes(props));
      },
      req: function req() {
        return PropTypes.shape(getComponentPropTypes(props)).isRequired;
      }
    }
  };
};

module.exports = {
  array: array,
  bool: bool,
  func: func,
  number: number,
  object: object,
  string: string,
  symbol: symbol,
  node: node,
  element: element,
  oneOf: oneOf,
  oneOfType: oneOfType,
  instanceOf: instanceOf,
  arrayOf: arrayOf,
  objectOf: objectOf,
  shape: shape,
  getComponentPropTypes: getComponentPropTypes,
  getComponentDefaultProps: getComponentDefaultProps,
  withPropDocs: withPropDocs
};