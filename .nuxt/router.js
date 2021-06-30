import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13f4226c = () => interopDefault(import('../pages/chi-tiet.vue' /* webpackChunkName: "pages/chi-tiet" */))
const _d057dcf4 = () => interopDefault(import('../pages/hom-aid.vue' /* webpackChunkName: "pages/hom-aid" */))
const _650ac66c = () => interopDefault(import('../pages/hom-aid/cau-hoi-thuong-gap.vue' /* webpackChunkName: "pages/hom-aid/cau-hoi-thuong-gap" */))
const _3851c349 = () => interopDefault(import('../pages/hom-aid/co-hoi-nghe-nghiep.vue' /* webpackChunkName: "pages/hom-aid/co-hoi-nghe-nghiep" */))
const _5462e026 = () => interopDefault(import('../pages/hom-aid/gioi-thieu.vue' /* webpackChunkName: "pages/hom-aid/gioi-thieu" */))
const _14ae333b = () => interopDefault(import('../pages/hom-aid/lien-he.vue' /* webpackChunkName: "pages/hom-aid/lien-he" */))
const _5c4ef903 = () => interopDefault(import('../pages/hom-aid/tin-tuc-va-thi-truong.vue' /* webpackChunkName: "pages/hom-aid/tin-tuc-va-thi-truong" */))
const _f5ec8ff0 = () => interopDefault(import('../pages/thue-nha-thau.vue' /* webpackChunkName: "pages/thue-nha-thau" */))
const _f12953f6 = () => interopDefault(import('../pages/tim-du-an.vue' /* webpackChunkName: "pages/tim-du-an" */))
const _6e9ab09f = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _6be39bef = () => interopDefault(import('../pages/member/chinh-sua-ho-so.vue' /* webpackChunkName: "pages/member/chinh-sua-ho-so" */))
const _a632c65c = () => interopDefault(import('../pages/member/dang-viec.vue' /* webpackChunkName: "pages/member/dang-viec" */))
const _64a471f3 = () => interopDefault(import('../pages/member/quan-ly-tai-chinh.vue' /* webpackChunkName: "pages/member/quan-ly-tai-chinh" */))
const _5ce1c985 = () => interopDefault(import('../pages/member/quan-ly-tin-nhan.vue' /* webpackChunkName: "pages/member/quan-ly-tin-nhan" */))
const _308ef386 = () => interopDefault(import('../pages/member/quan-ly-du-an/khach-hang.vue' /* webpackChunkName: "pages/member/quan-ly-du-an/khach-hang" */))
const _3b1e059e = () => interopDefault(import('../pages/member/quan-ly-du-an/nha-thau.vue' /* webpackChunkName: "pages/member/quan-ly-du-an/nha-thau" */))
const _cf345196 = () => interopDefault(import('../pages/du-an/_slug.vue' /* webpackChunkName: "pages/du-an/_slug" */))
const _57f9cc24 = () => interopDefault(import('../pages/ho-so/_slug.vue' /* webpackChunkName: "pages/ho-so/_slug" */))
const _28c86ee3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/chi-tiet",
    component: _13f4226c,
    name: "chi-tiet"
  }, {
    path: "/hom-aid",
    component: _d057dcf4,
    name: "hom-aid",
    children: [{
      path: "cau-hoi-thuong-gap",
      component: _650ac66c,
      name: "hom-aid-cau-hoi-thuong-gap"
    }, {
      path: "co-hoi-nghe-nghiep",
      component: _3851c349,
      name: "hom-aid-co-hoi-nghe-nghiep"
    }, {
      path: "gioi-thieu",
      component: _5462e026,
      name: "hom-aid-gioi-thieu"
    }, {
      path: "lien-he",
      component: _14ae333b,
      name: "hom-aid-lien-he"
    }, {
      path: "tin-tuc-va-thi-truong",
      component: _5c4ef903,
      name: "hom-aid-tin-tuc-va-thi-truong"
    }]
  }, {
    path: "/thue-nha-thau",
    component: _f5ec8ff0,
    name: "thue-nha-thau"
  }, {
    path: "/tim-du-an",
    component: _f12953f6,
    name: "tim-du-an"
  }, {
    path: "/tin-tuc",
    component: _6e9ab09f,
    name: "tin-tuc"
  }, {
    path: "/member/chinh-sua-ho-so",
    component: _6be39bef,
    name: "member-chinh-sua-ho-so"
  }, {
    path: "/member/dang-viec",
    component: _a632c65c,
    name: "member-dang-viec"
  }, {
    path: "/member/quan-ly-tai-chinh",
    component: _64a471f3,
    name: "member-quan-ly-tai-chinh"
  }, {
    path: "/member/quan-ly-tin-nhan",
    component: _5ce1c985,
    name: "member-quan-ly-tin-nhan"
  }, {
    path: "/member/quan-ly-du-an/khach-hang",
    component: _308ef386,
    name: "member-quan-ly-du-an-khach-hang"
  }, {
    path: "/member/quan-ly-du-an/nha-thau",
    component: _3b1e059e,
    name: "member-quan-ly-du-an-nha-thau"
  }, {
    path: "/du-an/:slug?",
    component: _cf345196,
    name: "du-an-slug"
  }, {
    path: "/ho-so/:slug?",
    component: _57f9cc24,
    name: "ho-so-slug"
  }, {
    path: "/",
    component: _28c86ee3,
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
