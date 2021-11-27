export { default as Details } from '../..\\components\\details.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as Map } from '../..\\components\\map.vue'
export { default as StaticMap } from '../..\\components\\staticMap.vue'
export { default as TileButton } from '../..\\components\\tileButton.vue'
export { default as TileMenu } from '../..\\components\\tileMenu.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
