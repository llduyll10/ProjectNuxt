exports.ids = [72,2,15];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4ad3e9a6", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bannerhomaid.2e6aa56.svg";

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAidNav_vue_vue_type_style_index_0_id_058369be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAidNav_vue_vue_type_style_index_0_id_058369be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAidNav_vue_vue_type_style_index_0_id_058369be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAidNav_vue_vue_type_style_index_0_id_058369be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAidNav_vue_vue_type_style_index_0_id_058369be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a.nuxt-link-exact-active[data-v-058369be]{color:#198ac6!important;border-bottom:1px solid #198ac6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6515d5ed", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BannerHomeAid.vue?vue&type=template&id=6475b2e9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"bannerInfo"}},[_vm._ssrNode("<div class=\"banner\"><div class=\"img-slider\""+(_vm._ssrStyle(null,{
            'background-image': 'url(' + "" + _vm.bannerImg + ')',
            }, null))+"><div class=\"content-banner\"><div class=\"sub-title f-20 homeaid\"><span>HomAid</span> mong muốn cung cấp một nền tảng kết nối hiệu quả nhất giúp cho chủ đầu tư &amp; đơn vị thi công có thể tương tác và làm việc cùng nhau dễ dàng hơn.\n                </div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BannerHomeAid.vue?vue&type=template&id=6475b2e9&

// EXTERNAL MODULE: ./assets/svg/bannerhomaid.svg
var bannerhomaid = __webpack_require__(164);
var bannerhomaid_default = /*#__PURE__*/__webpack_require__.n(bannerhomaid);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BannerHomeAid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BannerHomeAidvue_type_script_lang_js_ = ({data(){return{bannerImg:bannerhomaid_default.a};}});
// CONCATENATED MODULE: ./components/BannerHomeAid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BannerHomeAidvue_type_script_lang_js_ = (BannerHomeAidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BannerHomeAid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BannerHomeAidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "778fbce6"
  
)

/* harmony default export */ var BannerHomeAid = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeAidNav.vue?vue&type=template&id=058369be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul data-v-058369be>","</ul>",[_vm._ssrNode("<li data-v-058369be>","</li>",[_c('Nuxt-link',{attrs:{"to":{path : '/hom-aid/gioi-thieu'}}},[_vm._v("Giới thiệu về HomAid")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-058369be>","</li>",[_c('Nuxt-link',{attrs:{"to":{path : '/hom-aid/cau-hoi-thuong-gap'}}},[_vm._v("Câu hỏi thường gặp")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-058369be>","</li>",[_c('Nuxt-link',{attrs:{"to":{path : '/hom-aid/tin-tuc-va-thi-truong'}}},[_vm._v("Tin tức & Thị trường")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-058369be>","</li>",[_c('Nuxt-link',{attrs:{"to":{path : '/hom-aid/co-hoi-nghe-nghiep'}}},[_vm._v("Cơ hội nghề nghiệp")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-058369be>","</li>",[_c('Nuxt-link',{attrs:{"to":{path : '/hom-aid/lien-he'}}},[_vm._v("Liên hệ")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeAidNav.vue?vue&type=template&id=058369be&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HomeAidNav.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(165)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "058369be",
  "9a6945fe"
  
)

/* harmony default export */ var HomeAidNav = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hom_aid_vue_vue_type_style_index_0_id_501098f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hom_aid_vue_vue_type_style_index_0_id_501098f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hom_aid_vue_vue_type_style_index_0_id_501098f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hom_aid_vue_vue_type_style_index_0_id_501098f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hom_aid_vue_vue_type_style_index_0_id_501098f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a.nuxt-link-exact-active[data-v-501098f4]{font-weight:700;color:#00c58e}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/hom-aid.vue?vue&type=template&id=501098f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('BannerHomeAid'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"homeAid\" class=\"pt-40px pb-50px\" data-v-501098f4>","</section>",[_vm._ssrNode("<div class=\"container-fluid\" data-v-501098f4>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-501098f4>","</div>",[_vm._ssrNode("<div class=\"col-12\" data-v-501098f4>","</div>",[_vm._ssrNode("<div class=\"box\" data-v-501098f4>","</div>",[_vm._ssrNode("<div class=\"top\" data-v-501098f4>","</div>",[_c('HomeAidNav')],1),_vm._ssrNode(" "),_c('nuxt-child')],2)])])])]),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/hom-aid.vue?vue&type=template&id=501098f4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/hom-aid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var hom_aidvue_type_script_lang_js_ = ({data(){return{};},mounted(){},methods:{}});
// CONCATENATED MODULE: ./pages/hom-aid.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_hom_aidvue_type_script_lang_js_ = (hom_aidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/hom-aid.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(217)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_hom_aidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "501098f4",
  "1d5e54ac"
  
)

/* harmony default export */ var hom_aid = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(11).default,BannerHomeAid: __webpack_require__(196).default,HomeAidNav: __webpack_require__(214).default,Footer: __webpack_require__(7).default})


/***/ })

};;
//# sourceMappingURL=hom-aid.js.map