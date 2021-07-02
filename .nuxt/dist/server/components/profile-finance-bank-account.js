exports.ids = [55,20];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/addBankAccount.vue?vue&type=template&id=33384b5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalLienForm",attrs:{"id":"modal-cotact-form-submit"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 mb-10px"},[_vm._v("Thêm tài khoản ngân hàng của bạn")]),_vm._v(" "),_c('form',{staticClass:"group-content mt-36px"},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                  Tên ngân hàng"),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('b-form-select',{staticClass:"form-control col-md-9 col-sm-12",attrs:{"value":0,"options":_vm.options}})],1),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                  Tên chủ tài khoản\n                  "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{staticClass:"form-control col-md-9 col-sm-12",attrs:{"type":"text","required":"","placeholder":"Nhập tên chủ tài khoản"}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                  Số tài khoản\n                  "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{staticClass:"form-control col-md-9 col-sm-12",attrs:{"type":"text","required":"","placeholder":"Nhập số tài khoản"}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                  Địa chỉ\n                  "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{staticClass:"form-control col-md-9 col-sm-12",attrs:{"type":"text","required":"","placeholder":"Nhập địa chỉ"}})]),_vm._v(" "),_c('div',{staticClass:"group-btn row mt-40px"},[_c('div',{staticClass:"col-md-12 p-0"},[_c('button',{staticClass:"btn-now",attrs:{"type":"submit"}},[_vm._v("\n                    THÊM TÀI KHOẢN\n                    ")])])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/addBankAccount.vue?vue&type=template&id=33384b5a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/addBankAccount.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
/* harmony default export */ var addBankAccountvue_type_script_lang_js_ = ({data(){return{options:[{value:0,text:'Chọn ngân hàng của bạn'}]};},mounted(){var textAreas=document.getElementsByTagName('textarea');Array.prototype.forEach.call(textAreas,function(elem){elem.placeholder=elem.placeholder.replace(/\\n/g,'\n');});},methods:{show(){this.$refs.modalLienForm.showModal();},hide(){this.$refs.modalLienForm.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/addBankAccount.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_addBankAccountvue_type_script_lang_js_ = (addBankAccountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/addBankAccount.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_addBankAccountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6247534e"
  
)

/* harmony default export */ var addBankAccount = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/credit1.403ddb8.svg";

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/finance/bankAccount.vue?vue&type=template&id=b78aaa58&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"manage-project"}},[_vm._ssrNode("<div class=\"wrap pb-0\"><h1 class=\"title\">Tài khoản ngân hàng</h1></div> <table class=\"table table-custom\"><thead><tr><th scope=\"col\">Tên tài khoản</th> <th scope=\"col\">Số tài khoản</th> <th scope=\"col\">Ngân hàng giao dịch</th> <th scope=\"col\">Yêu cầu khác</th></tr></thead> <tbody>"+(_vm._ssrList((1),function(idx){return ("<tr class=\"f-12 text-gray\"><td class=\"text-main\">Bùi Kim Long</td> <td>012345678910</td> <td>Techcombank, CN Quận 7</td> <td class=\"text-main\">Yêu cầu rút tiền</td></tr>")}))+"</tbody></table> <div class=\"wrap pt-0\"><button type=\"button\" class=\"btn btn-main\"><img"+(_vm._ssrAttr("src",__webpack_require__(133)))+" alt>\n            Thêm tài khoản ngân hàng\n        </button></div> "),_c('PopupAddBankAccount',{ref:"refAddAccount"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/finance/bankAccount.vue?vue&type=template&id=b78aaa58&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/finance/bankAccount.vue?vue&type=script&lang=js&
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
/* harmony default export */ var bankAccountvue_type_script_lang_js_ = ({props:['title']});
// CONCATENATED MODULE: ./components/profile/finance/bankAccount.vue?vue&type=script&lang=js&
 /* harmony default export */ var finance_bankAccountvue_type_script_lang_js_ = (bankAccountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/profile/finance/bankAccount.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  finance_bankAccountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "420b0ceb"
  
)

/* harmony default export */ var bankAccount = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PopupAddBankAccount: __webpack_require__(114).default})


/***/ })

};;
//# sourceMappingURL=profile-finance-bank-account.js.map