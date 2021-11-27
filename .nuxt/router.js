import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c20d16b6 = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _0c7648c0 = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _a9c6bba2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _40463fba = () => interopDefault(import('..\\pages\\_category.vue' /* webpackChunkName: "pages/_category" */))
const _2174840f = () => interopDefault(import('..\\pages\\_subCategories\\_subCategory.vue' /* webpackChunkName: "pages/_subCategories/_subCategory" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/privacy",
    component: _c20d16b6,
    name: "privacy"
  }, {
    path: "/success",
    component: _0c7648c0,
    name: "success"
  }, {
    path: "/",
    component: _a9c6bba2,
    name: "index"
  }, {
    path: "/:category",
    component: _40463fba,
    name: "category"
  }, {
    path: "/:subCategories/:subCategory?",
    component: _2174840f,
    name: "subCategories-subCategory"
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
