exports.ids = [38];
exports.modules = {

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/contractor/complete.vue?vue&type=template&id=4928ffe6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"manage-project"}},[_vm._ssrNode("<div class=\"wrap\">","</div>",[_vm._ssrNode("<h1 class=\"title\">Dự án đã hoàn tất</h1> "),_vm._ssrNode("<div class=\"group-function d-flex\">","</div>",[_vm._ssrNode("<input placeholder=\"Tìm kiếm dự án\""+(_vm._ssrAttr("value",(_vm.searchText)))+" class=\"input-search form-control\"> "),_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objSearch.type,"placeholder":"Tra theo năm","clearable":false},model:{value:(_vm.objSearch.type),callback:function ($$v) {_vm.$set(_vm.objSearch, "type", $$v)},expression:"objSearch.type"}}),_vm._ssrNode(" <div class=\"btn-search\">\n                Tìm kiếm\n            </div>")],2)],2),_vm._ssrNode(" "+((_vm.listShow)?("<table class=\"table table-custom table-deploy\"><thead><tr><th scope=\"col\">Tên dự án</th> <th scope=\"col\">Nhà thầu/Thiết kế</th> <th scope=\"col\">Giá trị dự án</th> <th scope=\"col\">Tiến độ</th> <th scope=\"col\">Thanh toán</th></tr></thead> "+((_vm.listShow)?("<tbody>"+(_vm._ssrList((_vm.listShow),function(item,idx){return ("<tr><td"+(_vm._ssrClass("name cursor-pointer",_vm.getClassCategory(_vm.mapImgFromCategory(item.category))))+">"+_vm._ssrEscape("\n                    "+_vm._s(item.name)+"\n                ")+"</td> <td class=\"customer  f-12\"><span class=\"text-main font-weight-bold\">"+_vm._ssrEscape(_vm._s(item.auctionCount))+"</span> chào giá\n                </td> <td class=\"price \">"+_vm._ssrEscape(_vm._s(_vm.$moment(item.dueDate).format('DD/MM/YYYY')))+"</td> <td class=\"price\">"+_vm._ssrEscape("\n                   "+_vm._s(_vm.$moment(item.dueDate).format('DD/MM/YYYY'))+"\n                ")+"</td> <td class=\"price \">"+_vm._ssrEscape(_vm._s(_vm.$moment(item.dueDate).format('DD/MM/YYYY')))+"</td></tr>")}))+"</tbody>"):"<!---->")+"</table>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/contractor/complete.vue?vue&type=template&id=4928ffe6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/contractor/complete.vue?vue&type=script&lang=js&
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
/* harmony default export */ var completevue_type_script_lang_js_ = ({data(){return{listProject:null,listShow:null,optionSearch:[{id:1,label:'Tất cả dự án'},{id:2,label:'Đang nhận hồ sơ'},{id:3,label:'Đã hết hạn'}],optionOverDue:[{id:1,label:'Đăng lại dự án'}],objSearch:{type:1},searchText:''};},watch:{objSearch:{deep:true,handler(){this.filterList(JSON.parse(JSON.stringify(this.listProject)));}}},mounted(){this.getListQuote();},methods:{getListQuote(){this.loader();this.$get('/member/projects').then(res=>{this.listProject=res.data;this.listShow=res.data;this.loader(0);}).catch(err=>{this.loader(0);});},filterList(list){if(this.objSearch.type==1){this.listShow=list;}else if(this.objSearch.type==2){this.listShow=list.filter(item=>!this.checkStatusDueDate(item.dueDate));}else{this.listShow=list.filter(item=>this.checkStatusDueDate(item.dueDate));}},handleSearchText(){var arrTemp=JSON.parse(JSON.stringify(this.listProject));if(this.searchText){this.listShow=arrTemp.filter(item=>{return this.searchText.toLowerCase().split(' ').every(v=>item.name.toLowerCase().includes(v));});}else{this.listShow=arrTemp;}},handleSearch(){var arrTemp=JSON.parse(JSON.stringify(this.listProject));if(this.searchText){var arrSearchTextTmp=arrTemp.filter(item=>{return this.searchText.toLowerCase().split(' ').every(v=>item.name.toLowerCase().includes(v));});this.filterList(arrSearchTextTmp);}else{this.filterList(this.listProject);}}}});
// CONCATENATED MODULE: ./components/profile/contractor/complete.vue?vue&type=script&lang=js&
 /* harmony default export */ var contractor_completevue_type_script_lang_js_ = (completevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/contractor/complete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contractor_completevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e9f7f13c"
  
)

/* harmony default export */ var complete = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile-contractor-complete.js.map