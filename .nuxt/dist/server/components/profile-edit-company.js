exports.ids = [49,16];
exports.modules = {

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputFile.vue?vue&type=template&id=15adf062&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"file\""+(_vm._ssrAttr("multiple",_vm.multiple))+(_vm._ssrClass("inputfile",_vm.isChat ? 'w-40' : ''))+"> <label"+(_vm._ssrClass(null,_vm.isChat ? 'bg-white mb-0' : ''))+">"+((_vm.isChat)?("<img"+(_vm._ssrAttr("src",__webpack_require__(214)))+" alt>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(215)))+" alt class=\"mr-4px h-13px mb-2px\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.label)+"\n        ")))+"</label> "+((!_vm.isChat)?("<span class=\"text-main f-11 font-italic\">"+(_vm._ssrList((_vm.accept),function(item,idx){return (_vm._ssrEscape("\n           "+_vm._s(item)+" ")+(((idx+1) < _vm.accept.length)?("<span>,</span>"):"<!---->"))}))+"</span>"):"<!---->")+" "+((_vm.showAlert)?("<small class=\"text-danger d-block\">Sai định dạng</small>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InputFile.vue?vue&type=template&id=15adf062&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputFile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputFilevue_type_script_lang_js_ = ({props:['accept','multiple','label','isChat'],created(){},mounted(){},data(){return{showAlert:false};},methods:{onFileChange(){var arrFile=[];let files=this.$refs.file.files;let accept=this.accept;if(files&&files.length){var typeFile=files[0].name.split('.').pop();}if(accept){if(!accept.includes(typeFile)){this.showAlert=true;return;}else{this.showAlert=false;files.forEach(e=>{arrFile.push(e);});this.$emit("input",this.multiple?arrFile:arrFile[0]);this.$refs.file.value=null;}}}}});
// CONCATENATED MODULE: ./components/InputFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputFilevue_type_script_lang_js_ = (InputFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/InputFile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InputFilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dbfd3b8a"
  
)

/* harmony default export */ var InputFile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/file.0c843c8.svg";

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-upload.762d37f.svg";

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/company.vue?vue&type=template&id=d0915df6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editProfileInfoWrap"},[_vm._ssrNode("<div class=\"f-20 f-bold text-main mb-24px\">\n        Hồ sơ làm việc\n    </div> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"editRow mb-15px\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel\">\n                Loại tài khoản<span class=\"dot\">*</span></div> "),_vm._ssrNode("<div class=\"fieldInput\">","</div>",[_vm._ssrNode("<div class=\"form-group mb-0\">","</div>",[_c('treeselect',{attrs:{"required":"","options":_vm.optionsType,"value":_vm.objWorking.accountType,"placeholder":"Loại tài khoản","clearable":false},model:{value:(_vm.objWorking.accountType),callback:function ($$v) {_vm.$set(_vm.objWorking, "accountType", $$v)},expression:"objWorking.accountType"}})],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"editRow mb-15px\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel\">\n                 Lĩnh vực hoạt động<span class=\"dot\">*</span> <br> <span class=\"info\">(Chọn tối đa 5)</span></div> "),_vm._ssrNode("<div class=\"fieldInput\">","</div>",[_vm._ssrNode("<div class=\"form-group mb-0\">","</div>",[_c('treeselect',{attrs:{"required":"","options":_vm.optionsCategory,"disable-branch-nodes":true,"value":_vm.objWorking.category,"multiple":true,"placeholder":"Lĩnh vực hoạt động","clearable":false},on:{"input":_vm.limiter},model:{value:(_vm.objWorking.category),callback:function ($$v) {_vm.$set(_vm.objWorking, "category", $$v)},expression:"objWorking.category"}})],1)])],2),_vm._ssrNode(" <div class=\"editRow mb-15px\"><div class=\"fieldLabel\">\n                Giới thiệu về công ty/cá nhân\n            </div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><textarea placeholder=\"Giới thiệu về công ty/tổ chức của bạn. Nếu là Freelancer, mô tả về quá trình làm việc của bạn\" rows=\"12\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.objWorking.introduce))+"</textarea></div></div></div> <div class=\"editRow mb-25px\"><div class=\"fieldLabel\">\n                Giới thiệu về năng lực\n            </div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><textarea rows=\"8\" placeholder=\"Mô tả năng lực của bạn/công ty bạn và tại sao chủ đầu tư nên chọn bạn\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.objWorking.ability))+"</textarea></div></div></div> "),_vm._ssrNode("<div class=\"editRow mb-15px\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel\">\n                Chứng chỉ năng lực\n            </div> "),_vm._ssrNode("<div class=\"fieldInput\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}}),_vm._ssrNode(" "+((this.objWorking.filesCert)?((_vm._ssrList((this.objWorking.filesCert),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(_vm.spliceURLFile(item,'--'))))+"</span>"+_vm._ssrEscape("\n                                "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+" "+((_vm.arrFile.length)?((_vm._ssrList((_vm.arrFile),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                                "+_vm._s(item.name)+"\n                                ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->"))],2)])],2),_vm._ssrNode(" <div class=\"w-100 my-40px\"><button type=\"submit\" class=\"btn btn-main w-100 btn-lg\">\n                CẬP NHẬT THÔNG TIN\n            </button></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/edit/company.vue?vue&type=template&id=d0915df6&

// EXTERNAL MODULE: ./components/InputFile.vue + 4 modules
var InputFile = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/company.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var companyvue_type_script_lang_js_ = ({components:{InputFile: InputFile["default"]},data(){return{objWorking:{},optionsType:this.getTypeAccount(),optionsCategory:this.getCategory(),arrFile:[],accepFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"]};},mounted(){this.getUser();},methods:{limiter(e){if(e.length>5){e.pop();}},getUser(){var{accountType,category,introduce,ability,filesCert}=this.$auth.user;this.objWorking={accountType,category,introduce,ability,filesCert};},async updateWorking(){this.loader();var filesCertOld=this.objWorking.filesCert;var filesCertNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var filesCert=filesCertOld.concat(filesCertNew);if(filesCert.length){this.objWorking.filesCert=filesCert;}this.arrFile=[];try{let res=await this.$post('user/working',this.objWorking);await this.$auth.fetchUser();this.getUser();this.arrFile=[];this.loader(0);this.$notify({group:'all',text:'Cập nhật thành công',type:'dark'});}catch(err){this.loader(0);}},getFile(arrFile){this.arrFile=this.arrFile.concat(arrFile);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objWorking.filesCert=this.objWorking.filesCert.filter(item=>item!==file);}}});
// CONCATENATED MODULE: ./components/profile/edit/company.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_companyvue_type_script_lang_js_ = (companyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/edit/company.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_companyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0735dd8e"
  
)

/* harmony default export */ var company = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(213).default})


/***/ })

};;
//# sourceMappingURL=profile-edit-company.js.map