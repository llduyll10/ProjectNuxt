exports.ids = [19];
exports.modules = {

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=ae45caa4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-pagination',{staticClass:"custom-pagination",attrs:{"total-rows":_vm.rows,"per-page":_vm.perPage,"hide-goto-end-buttons":true,"align":"center"},on:{"input":function($event){return _vm.changePaging()}},scopedSlots:_vm._u([{key:"prev-text",fn:function(){return [_c('span',{staticClass:"custom-pre"},[_vm._v(" <<  ")])]},proxy:true},{key:"next-text",fn:function(){return [_c('span',{staticClass:"custom-pre"},[_vm._v(" >> ")])]},proxy:true}]),model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=ae45caa4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({props:["count","perPage"],data(){return{currentPage:1};},computed:{rows(){return this.count;}},methods:{changePaging(){this.$emit('page',{page:this.currentPage,limit:this.perPage});}}});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Pagination.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "548bce95"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pagination.js.map