/* eslint-disable @typescript-eslint/no-require-imports */
const resolvePlugin = (moduleName, stubName) => {
  try {
    return require(moduleName)
  } catch {
    const plugin = () => ({
      postcssPlugin: stubName,
      Once() {},
    })
    plugin.postcss = true
    return plugin
  }
}

const tailwindcss = resolvePlugin('tailwindcss', 'tailwindcss-stub')
const autoprefixer = resolvePlugin('autoprefixer', 'autoprefixer-stub')

module.exports = {
  plugins: [tailwindcss, autoprefixer],
}
