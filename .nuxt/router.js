import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7aee213a = () => interopDefault(import('..\\pages\\drainage.vue' /* webpackChunkName: "pages/drainage" */))
const _4cff6085 = () => interopDefault(import('..\\pages\\footways.vue' /* webpackChunkName: "pages/footways" */))
const _ae9093a0 = () => interopDefault(import('..\\pages\\roads.vue' /* webpackChunkName: "pages/roads" */))
const _b4f08bb4 = () => interopDefault(import('..\\pages\\street lighting.vue' /* webpackChunkName: "pages/street lighting" */))
const _a9c6bba2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/drainage",
    component: _7aee213a,
    name: "drainage"
  }, {
    path: "/footways",
    component: _4cff6085,
    name: "footways"
  }, {
    path: "/roads",
    component: _ae9093a0,
    name: "roads"
  }, {
    path: "/street%20lighting",
    component: _b4f08bb4,
    name: "street lighting"
  }, {
    path: "/",
    component: _a9c6bba2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
