const config = format => ({
  external: ['prop-types'],
  input: 'src/index.js',
  output: {
    file: `build/index.${format}.js`,
    format,
  },
})

export default [config('cjs'), config('es')]
