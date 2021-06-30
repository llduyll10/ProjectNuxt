exports.ids = [42];
exports.modules = {

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/contractor/quotes.vue?vue&type=template&id=1536a9b2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"manage-project"}},[_vm._ssrNode("<div class=\"wrap\">","</div>",[_vm._ssrNode("<h1 class=\"title\">Dự án đang  chào giá</h1> "),_vm._ssrNode("<div class=\"group-function d-flex\">","</div>",[_vm._ssrNode("<input placeholder=\"Tìm kiếm dự án\""+(_vm._ssrAttr("value",(_vm.searchText)))+" class=\"input-search form-control\"> "),_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objSearch.type,"placeholder":"Tra theo năm","clearable":false},model:{value:(_vm.objSearch.type),callback:function ($$v) {_vm.$set(_vm.objSearch, "type", $$v)},expression:"objSearch.type"}}),_vm._ssrNode(" <div class=\"btn-search\">\n                Tìm kiếm\n            </div>")],2)],2),_vm._ssrNode(" "),(_vm.listShow)?_vm._ssrNode("<table class=\"table table-custom\">","</table>",[_vm._ssrNode("<thead><tr><th scope=\"col\">Tên dự án</th> <th scope=\"col\">Khách hàng</th> <th scope=\"col\">Giá của bạn</th> <th scope=\"col\">Trạng thái</th></tr></thead> "),(_vm.listShow)?_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.listShow),function(item,idx){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td"+(_vm._ssrClass("name cursor-pointer",item.project ? _vm.getClassCategory(_vm.mapImgFromCategory(item.project.category)) : ''))+">"+_vm._ssrEscape("\n                    "+_vm._s(item.project ? item.project.name : '')+"\n                ")+"</td> <td class=\"customer  f-12\"><span class=\"text-main font-weight-bold\">"+_vm._ssrEscape(_vm._s(item.projectOwner.name))+"</span></td> <td class=\"price \">"+_vm._ssrEscape(_vm._s(_vm.formatVnd(item.price))+" VND")+"</td> "),_vm._ssrNode("<td class=\"status \">","</td>",[[_c('b-dropdown',{staticClass:"custom-infor pb-5px",attrs:{"id":"dropdown-duedate","variant":"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"cover-infor"},[_c('p',{staticClass:"f-12"},[_c('span',{staticClass:"f-12 text-main"},[_vm._v("Đã gửi chào giá")]),_vm._v(" "),_c('i',{staticClass:"fas fa-caret-down ml-5px f-16 text-main"})])])])]},proxy:true}],null,true)},[_vm._v(" "),_c('b-dropdown-item',{staticClass:"f-12",on:{"click":function($event){return _vm.destroySurvey(item)}}},[_vm._v("\n                                Huỷ chào giá\n                                ")])],1)]],2)],2)}),0):_vm._e()],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/contractor/quotes.vue?vue&type=template&id=1536a9b2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/contractor/quotes.vue?vue&type=script&lang=js&
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
/* harmony default export */ var quotesvue_type_script_lang_js_ = ({data(){return{listProject:null,listShow:null,optionSearch:[{id:1,label:'Tất cả dự án'},{id:2,label:'Đang nhận hồ sơ'},{id:3,label:'Đã hết hạn'}],optionOverDue:[{id:1,label:'Đăng lại dự án'}],objSearch:{type:1},searchText:''};},watch:{objSearch:{deep:true,handler(){this.filterList(JSON.parse(JSON.stringify(this.listProject)));}}},mounted(){this.getListQuote();},methods:{getListQuote(){this.loader();this.$get('/member/my-auction/').then(res=>{this.listProject=res.data;this.listShow=res.data.filter(item=>item.survey.length==0);this.loader(0);}).catch(err=>{this.loader(0);});},destroySurvey(survey){console.log('survey',survey);this.loader();this.$post('member/auction/delete',{project:survey.project._id}).then(res=>{this.getListQuote();this.loader(0);}).catch(err=>{this.loader(0);});},filterList(list){if(this.objSearch.type==1){this.listShow=list;}else if(this.objSearch.type==2){this.listShow=list.filter(item=>!this.checkStatusDueDate(item.dueDate));}else{this.listShow=list.filter(item=>this.checkStatusDueDate(item.dueDate));}},handleSearchText(){var arrTemp=JSON.parse(JSON.stringify(this.listProject));if(this.searchText){this.listShow=arrTemp.filter(item=>{return this.searchText.toLowerCase().split(' ').every(v=>item.name.toLowerCase().includes(v));});}else{this.listShow=arrTemp;}},handleSearch(){var arrTemp=JSON.parse(JSON.stringify(this.listProject));if(this.searchText){var arrSearchTextTmp=arrTemp.filter(item=>{return this.searchText.toLowerCase().split(' ').every(v=>item.name.toLowerCase().includes(v));});this.filterList(arrSearchTextTmp);}else{this.filterList(this.listProject);}}}});
// CONCATENATED MODULE: ./components/profile/contractor/quotes.vue?vue&type=script&lang=js&
 /* harmony default export */ var contractor_quotesvue_type_script_lang_js_ = (quotesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/contractor/quotes.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contractor_quotesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16c42e40"
  
)

/* harmony default export */ var quotes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile-contractor-quotes.js.map