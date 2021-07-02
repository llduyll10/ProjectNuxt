exports.ids = [24];
exports.modules = {

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/lienhe.vue?vue&type=template&id=0a604676&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalLien",attrs:{"id":"modal-custom-form-contact"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.userInfor)?_c('div',{staticClass:"modal-contact"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"title f-20"},[_vm._v("\n                Liên hệ trực tiếp với "),_c('span',[_vm._v(_vm._s(_vm.userInfor.company ? _vm.userInfor.company : _vm.userInfor.name))])]),_vm._v(" "),_c('div',{staticClass:"sub f-13"},[_vm._v("\n                Bạn sẽ tốn "),_c('span',[_vm._v("3 Tokens")]),_vm._v(" khi liên hệ trực tiếp với "),_c('span',[_vm._v(_vm._s(_vm.userInfor.company ? _vm.userInfor.company : _vm.userInfor.name))])])]),_vm._v(" "),_c('div',{staticClass:"center"},[_c('div',{staticClass:"name-line"},[_c('div',{staticClass:"label"},[_vm._v("Họ Tên:")]),_vm._v(" "),_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.userInfor.name))])]),_vm._v(" "),_c('div',{staticClass:"phone-line"},[_c('div',{staticClass:"label"},[_vm._v("Số điện thoại:")]),_vm._v(" "),(_vm.privateInfor && _vm.privateInfor._id)?_c('div',{staticClass:"phone"},[_vm._v("\n                   "+_vm._s(_vm.privateInfor.phone)+"\n               ")]):_c('div',{staticClass:"phone"},[_vm._v("XXX XXX XXX")])]),_vm._v(" "),_c('div',{staticClass:"email-line"},[_c('div',{staticClass:"label"},[_vm._v("Địa chỉ Email:")]),_vm._v(" "),(_vm.privateInfor && _vm.privateInfor._id)?_c('div',{staticClass:"email"},[_vm._v("\n                   "+_vm._s(_vm.privateInfor.email)+"\n               ")]):_c('div',{staticClass:"email"},[_vm._v("XXX XXX XXX")])])]),_vm._v(" "),(!_vm.$auth.loggedIn)?_c('div',{staticClass:"bottom btn-now"},[_c('div',{staticClass:"submit f-15 cursor-pointer",on:{"click":function($event){return _vm.hide()}}},[_vm._v("VUI LÒNG ĐĂNG NHẬP")])]):_c('div',{staticClass:"bottom btn-now"},[(_vm.privateInfor && _vm.privateInfor._id)?_c('div',{staticClass:"submit f-16 cursor-pointer",on:{"click":function($event){return _vm.hide()}}},[_vm._v("HOÀN TẤT")]):_c('div',{staticClass:"submit f-15 cursor-pointer",on:{"click":function($event){return _vm.getUserInfor()}}},[_vm._v("HIỂN THỊ THÔNG TIN")])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/lienhe.vue?vue&type=template&id=0a604676&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/lienhe.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lienhevue_type_script_lang_js_ = ({data(){return{userInfor:null,privateInfor:null};},mounted(){},methods:{getUserInfor(){this.$get(`private/user/${this.userInfor._id}`).then(res=>{this.privateInfor=res.data;this.$auth.fetchUser();}).catch(err=>{console.log(err);});},passIDInfor(item){this.userInfor=item;this.privateInfor=null;},show(){this.$refs.modalLien.showModal();},hide(){this.$refs.modalLien.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/lienhe.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_lienhevue_type_script_lang_js_ = (lienhevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/lienhe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_lienhevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47891141"
  
)

/* harmony default export */ var lienhe = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=popup-lienhe.js.map