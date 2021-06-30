import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _beff5eb6 = () => interopDefault(import('../pages/chi-tiet.vue' /* webpackChunkName: "pages/chi-tiet" */))
const _c7468fa6 = () => interopDefault(import('../pages/hom-aid.vue' /* webpackChunkName: "pages/hom-aid" */))
const _37870ec3 = () => interopDefault(import('../pages/hom-aid/cau-hoi-thuong-gap.vue' /* webpackChunkName: "pages/hom-aid/cau-hoi-thuong-gap" */))
const _bb43957c = () => interopDefault(import('../pages/hom-aid/co-hoi-nghe-nghiep.vue' /* webpackChunkName: "pages/hom-aid/co-hoi-nghe-nghiep" */))
const _62650ae6 = () => interopDefault(import('../pages/hom-aid/gioi-thieu.vue' /* webpackChunkName: "pages/hom-aid/gioi-thieu" */))
const _29d542e2 = () => interopDefault(import('../pages/hom-aid/lien-he.vue' /* webpackChunkName: "pages/hom-aid/lien-he" */))
const _5a92186a = () => interopDefault(import('../pages/hom-aid/tin-tuc-va-thi-truong.vue' /* webpackChunkName: "pages/hom-aid/tin-tuc-va-thi-truong" */))
const _5fa2f522 = () => interopDefault(import('../pages/thue-nha-thau.vue' /* webpackChunkName: "pages/thue-nha-thau" */))
const _e7362228 = () => interopDefault(import('../pages/tim-du-an.vue' /* webpackChunkName: "pages/tim-du-an" */))
const _73235746 = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _fb3c1b30 = () => interopDefault(import('../pages/member/chinh-sua-ho-so.vue' /* webpackChunkName: "pages/member/chinh-sua-ho-so" */))
const _3ca1820b = () => interopDefault(import('../pages/member/dang-viec.vue' /* webpackChunkName: "pages/member/dang-viec" */))
const _5631e3a8 = () => interopDefault(import('../pages/member/quan-ly-tai-chinh.vue' /* webpackChunkName: "pages/member/quan-ly-tai-chinh" */))
const _162e422c = () => interopDefault(import('../pages/member/quan-ly-tin-nhan.vue' /* webpackChunkName: "pages/member/quan-ly-tin-nhan" */))
const _aaf055a6 = () => interopDefault(import('../pages/member/quan-ly-du-an/khach-hang.vue' /* webpackChunkName: "pages/member/quan-ly-du-an/khach-hang" */))
const _39612505 = () => interopDefault(import('../pages/member/quan-ly-du-an/nha-thau.vue' /* webpackChunkName: "pages/member/quan-ly-du-an/nha-thau" */))
const _455cd25c = () => interopDefault(import('../pages/du-an/_slug.vue' /* webpackChunkName: "pages/du-an/_slug" */))
const _fe0bd5d6 = () => interopDefault(import('../pages/ho-so/_slug.vue' /* webpackChunkName: "pages/ho-so/_slug" */))
const _2cc8934a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _beff5eb6,
    name: "chi-tiet"
  }, {
    path: "/hom-aid",
    component: _c7468fa6,
    name: "hom-aid",
    children: [{
      path: "cau-hoi-thuong-gap",
      component: _37870ec3,
      name: "hom-aid-cau-hoi-thuong-gap"
    }, {
      path: "co-hoi-nghe-nghiep",
      component: _bb43957c,
      name: "hom-aid-co-hoi-nghe-nghiep"
    }, {
      path: "gioi-thieu",
      component: _62650ae6,
      name: "hom-aid-gioi-thieu"
    }, {
      path: "lien-he",
      component: _29d542e2,
      name: "hom-aid-lien-he"
    }, {
      path: "tin-tuc-va-thi-truong",
      component: _5a92186a,
      name: "hom-aid-tin-tuc-va-thi-truong"
    }]
  }, {
    path: "/thue-nha-thau",
    component: _5fa2f522,
    name: "thue-nha-thau"
  }, {
    path: "/tim-du-an",
    component: _e7362228,
    name: "tim-du-an"
  }, {
    path: "/tin-tuc",
    component: _73235746,
    name: "tin-tuc"
  }, {
    path: "/member/chinh-sua-ho-so",
    component: _fb3c1b30,
    name: "member-chinh-sua-ho-so"
  }, {
    path: "/member/dang-viec",
    component: _3ca1820b,
    name: "member-dang-viec"
  }, {
    path: "/member/quan-ly-tai-chinh",
    component: _5631e3a8,
    name: "member-quan-ly-tai-chinh"
  }, {
    path: "/member/quan-ly-tin-nhan",
    component: _162e422c,
    name: "member-quan-ly-tin-nhan"
  }, {
    path: "/member/quan-ly-du-an/khach-hang",
    component: _aaf055a6,
    name: "member-quan-ly-du-an-khach-hang"
  }, {
    path: "/member/quan-ly-du-an/nha-thau",
    component: _39612505,
    name: "member-quan-ly-du-an-nha-thau"
  }, {
    path: "/du-an/:slug?",
    component: _455cd25c,
    name: "du-an-slug"
  }, {
    path: "/ho-so/:slug?",
    component: _fe0bd5d6,
    name: "ho-so-slug"
  }, {
    path: "/",
    component: _2cc8934a,
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
