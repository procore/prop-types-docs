const PropTypes = require('prop-types')
const checkPropTypes = require('check-prop-types')

const {
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
  getShapePropTypes,
  getComponentPropTypes,
  getComponentDefaultProps,
  withPropDocs,
} = require('../src')

const LABEL = 'prop'

describe('withPropDocs', () => {
  describe('checks required', () => {
    const Cmp = ({ children }) => children

    const withRequired = (key, type) => Component =>
      withPropDocs({
        name: 'Cmp',
        props: { [key]: { type, required: true } },
      })(Component)

    it('checks arrays', () => {
      withRequired('array', array)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `array` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })

    it('checks bools', () => {
      withRequired('bool', bool)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `bool` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })

    it('checks funcs', () => {
      withRequired('func', func)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `func` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })

    it('checks numbers', () => {
      withRequired('number', number)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `number` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })

    it('checks objects', () => {
      withRequired('object', object)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `object` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })

    it('checks strings', () => {
      withRequired('string', string)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `string` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })

    it('checks symbols', () => {
      withRequired('symbol', symbol)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `symbol` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })

    it('checks nodes', () => {
      withRequired('node', node)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `node` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })

    it('checks elements', () => {
      withRequired('element', element)(Cmp)

      const actual = checkPropTypes(Cmp.propTypes, {}, LABEL, Cmp.name)

      expect(actual).toEqual(
        'Failed prop type: The prop `element` is marked as required in `Cmp`, but its value is `undefined`.'
      )
    })
  })

  describe('checks data type', () => {
    class TestInstance {}

    const Cmp = ({ children }) => children

    withPropDocs({
      name: 'Cmp',
      props: {
        array: { type: array },
        bool: { type: bool },
        func: { type: func },
        number: { type: number },
        object: { type: object },
        string: { type: string },
        symbol: { type: symbol },
        node: { type: node },
        element: { type: element },
        oneOf: { type: oneOf(['string', 0]) },
        oneOfType: { type: oneOfType([string]) },
        instanceOf: { type: instanceOf(TestInstance) },
        arrayOf: { type: arrayOf(string) },
        objectOf: { type: objectOf(string) },
      },
    })(Cmp)

    const props = Cmp.propTypes
    const name = Cmp.name

    it('check arrays', () => {
      const actual = checkPropTypes(props, { array: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `array` of type `string` supplied to `Cmp`, expected `array`.'
      )
    })

    it('checks booleans', () => {
      const actual = checkPropTypes(props, { bool: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `bool` of type `string` supplied to `Cmp`, expected `boolean`.'
      )
    })

    it('checks functions', () => {
      const actual = checkPropTypes(props, { func: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `func` of type `string` supplied to `Cmp`, expected `function`.'
      )
    })

    it('checks number', () => {
      const actual = checkPropTypes(props, { number: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `number` of type `string` supplied to `Cmp`, expected `number`.'
      )
    })

    it('checks object', () => {
      const actual = checkPropTypes(props, { object: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `object` of type `string` supplied to `Cmp`, expected `object`.'
      )
    })

    it('checks string', () => {
      const actual = checkPropTypes(props, { string: 123 }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `string` of type `number` supplied to `Cmp`, expected `string`.'
      )
    })

    it('checks symbol', () => {
      const actual = checkPropTypes(props, { symbol: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `symbol` of type `string` supplied to `Cmp`, expected `symbol`.'
      )
    })

    // it('checks node', () => {
    //   it('checks data type', () => {
    //     const actual = checkPropTypes(props, { node: '' }, LABEL, name)
    //     const expected = invalidType(name, 'node', 'node', 'string')
    //
    //     expect(actual).toEqual(expected)
    //   })
    // })

    it('checks element', () => {
      const actual = checkPropTypes(props, { element: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `element` of type `string` supplied to `Cmp`, expected a single ReactElement.'
      )
    })

    it('checks oneOf', () => {
      const actual = checkPropTypes(props, { oneOf: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `oneOf` of value `` supplied to `Cmp`, expected one of ["string",0].'
      )
    })

    it('checks oneOfType', () => {
      const actual = checkPropTypes(props, { oneOfType: 123 }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `oneOfType` supplied to `Cmp`.'
      )
    })

    it('checks arrayOf', () => {
      const actual = checkPropTypes(props, { arrayOf: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `arrayOf` of type `string` supplied to `Cmp`, expected an array.'
      )
    })

    it('checks instanceOf', () => {
      const actual = checkPropTypes(props, { instanceOf: '' }, LABEL, name)

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `instanceOf` of type `String` supplied to `Cmp`, expected instance of `TestInstance`.'
      )
    })
  })

  describe('checks shape', () => {
    const Cmp = ({ children }) => children

    withPropDocs({
      name: 'Cmp',
      props: {
        shape: shape({
          string: {
            type: string,
          },
          shape: shape({
            string: {
              type: string,
            },
          }),
        }),
      },
    })(Cmp)

    const props = Cmp.propTypes
    const defaults = Cmp.defaultProps
    const name = Cmp.name

    it('checks data type', () => {
      const actual = checkPropTypes(
        props,
        {
          shape:
            'Failed prop type: Invalid prop `shape.string` of type `number` supplied to `Cmp`, expected `string`.',
        },
        LABEL,
        name
      )

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `shape` of type `string` supplied to `Cmp`, expected `object`.'
      )
    })

    it('checks keys', () => {
      const actual = checkPropTypes(
        props,
        { shape: { string: 123 } },
        LABEL,
        name
      )

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `shape.string` of type `number` supplied to `Cmp`, expected `string`.'
      )
    })

    it('checks nested shape', () => {
      const actual = checkPropTypes(
        props,
        {
          shape: {
            shape: {
              string: 123,
            },
          },
        },
        LABEL,
        name
      )

      expect(actual).toEqual(
        'Failed prop type: Invalid prop `shape.shape.string` of type `number` supplied to `Cmp`, expected `string`.'
      )
    })
  })

  describe('getComponentDefaultProps', () => {
    it('sets defaultProps on the component', () => {
      const Cmp = ({ children }) => children

      withPropDocs({
        name: 'Cmp',
        props: {
          shape: shape({
            string: {
              type: string,
              default: 'str',
            },
            shape: shape({
              string: {
                type: string,
                default: 'string',
              },
            }),
          }),
          foo: {
            type: string,
            default: 'bar',
          },
        },
      })(Cmp)

      expect(Cmp.defaultProps).toEqual({
        shape: {
          string: 'foo',
          shape: {
            string: 'bar',
          },
        },
        foo: 'bar',
      })
    })
  })
})
