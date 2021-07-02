exports.ids = [63];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/menu.vue?vue&type=template&id=fe7b54a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-100 flex-align-center p-22px\"><div class=\"userAvatarMenu mr-13px\">"+((_vm.$auth.user.photo)?("<img width=\"40px\""+(_vm._ssrAttr("src",_vm.$auth.user.photo))+">"):("<div class=\"not-avatar\">"+_vm._ssrEscape("\n                 "+_vm._s(_vm.$auth.user.name.slice(0,1).toUpperCase())+"\n            ")+"</div>"))+"</div> <div class=\"d-flex flex-column f-13 f-bold\"><div class=\"mb-4px text-gray\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.$auth.user.name)+" | ")+"<span class=\"text-main\">"+_vm._ssrEscape(" "+_vm._s(_vm.$auth.user.coin || 0))+"</span> Tokens\n            </div> <div class=\"flex-align-center\"><div class=\"f-bold text-main\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$auth.user.email)+"\n                ")+"</div></div></div></div> "),_vm._ssrNode("<div class=\"w-100 d-flex flex-column profileMenuList\">","</div>",_vm._l((_vm.menus),function(item){return _c('b-link',{key:item.id,staticClass:"profileMenuItem ",class:item.id === _vm.activeMenu ? 'activeMenu' : 'text-gray',attrs:{"to":item.url}},[_c('span',{staticClass:"f-12"},[_vm._v(_vm._s(item.text))])])}),1),_vm._ssrNode(" <div class=\"w-100 d-flex flex-column profileActions mt-15px\"><div class=\"btnWrap\"><button type=\"button\" class=\"btn\"><img"+(_vm._ssrAttr("src",__webpack_require__(98)))+" class=\"btn-icon mr-5px\">\n                Nạp thêm Token\n            </button></div> <div class=\"btnWrap\"><button type=\"button\" class=\"btn logoutBtn\"><img"+(_vm._ssrAttr("src",__webpack_require__(99)))+" class=\"btn-icon mr-5px\">\n                Đăng xuất\n            </button></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/menu.vue?vue&type=template&id=fe7b54a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/menu.vue?vue&type=script&lang=js&
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
/* harmony default export */ var menuvue_type_script_lang_js_ = ({data(){return{menus:[{id:'1',text:'Tài khoản của tôi',url:'/member/chinh-sua-ho-so?tab=1'},{id:'2',text:'Quản lý dự án',url:'/member/quan-ly-du-an/khach-hang?tab=1'},{id:'3',text:'Quản lý tài chính',url:'/member/quan-ly-tai-chinh?tab=1'}]};},props:{activeMenu:{default:"1"}},methods:{logout(){this.$auth.logout();}}});
// CONCATENATED MODULE: ./components/profile/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/profile/menu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "328052c0"
  
)

/* harmony default export */ var menu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/credit.0b9227f.svg";

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logout.60b7669.svg";

/***/ })

};;
//# sourceMappingURL=profile-menu.js.map