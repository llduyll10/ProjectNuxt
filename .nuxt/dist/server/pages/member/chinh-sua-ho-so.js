exports.ids = [77,16,30,37,49,50,51,52,53,62];
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

/***/ 217:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMzQzNjYgMTUuMzQwN0wwIDguOTk2NTZMMy4wMjU0NyA1Ljk3MTA5TDYuMzQzNjYgOS4yODkyOEwxMy45NzQ1IDEuNjU4OTRMMTcgNC42ODQ0TDYuMzQzNjYgMTUuMzQwN1oiIGZpbGw9IiMxOThBQzYiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTg3ODIgMTMuODM0N0w2LjAwODU0IDExLjg1NTVMMTAuMzgxMSA3LjQ4MjkxTDEyLjM2MDQgOS40NjIxOUw3Ljk4NzgyIDEzLjgzNDdaIiBmaWxsPSIjMjA5Y2Q3Ii8+CjxwYXRoIGQ9Ik03Ljc2NDY1IDAuNDg3MzA1VjIuODE1NzVIMTAuMDkzMUw3Ljc2NDY1IDAuNDg3MzA1WiIgZmlsbD0iIzIwOWNkNyIvPgo8cGF0aCBkPSJNNS4wMDY4MyAxMS40NTk5SDIuMzMxMVYxMC40NzJINS45OTQ3NUw3LjMxMTk5IDkuMTU0NzdIMi4zMzExVjguMTY2ODVIOC4yOTk5MUwxMC41ODAzIDUuODg2NDlWMy44MDM1MUg2Ljc3Njc2VjBIMC42NjgwOTFWMTMuNjk5Mkg0LjE5MzczTDQuNzEwODEgMTEuOTI3OUw0Ljc4MTcxIDExLjY4NUw1LjAwNjgzIDExLjQ1OTlaTTIuMzMxMSA1Ljg2MTY5SDguOTE3MjdWNi44NDk2MkgyLjMzMTFWNS44NjE2OVoiIGZpbGw9IiMyMDljZDciLz4KPHBhdGggZD0iTTExLjA3OTYgNi43ODQzN0wxMi4zNTI3IDUuNTExMjNMMTQuMzMyIDcuNDkwNTFMMTMuMDU4OSA4Ljc2MzY1TDExLjA3OTYgNi43ODQzN1oiIGZpbGw9IiMyMDljZDciLz4KPHBhdGggZD0iTTUuMjIyODcgMTMuNjk4OUw0Ljg0MzE0IDE0Ljk5OTdMNy4wOTc2OCAxNC4zNDE1TDUuNTAxMyAxMi43NDUxTDUuMjIyODcgMTMuNjk4OVoiIGZpbGw9IiMyMDljZDciLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/demo-house.923c4ab.png";

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/credit.0b9227f.svg";

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logout.60b7669.svg";

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/menu.vue?vue&type=template&id=fe7b54a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-100 flex-align-center p-22px\"><div class=\"userAvatarMenu mr-13px\">"+((_vm.$auth.user.photo)?("<img width=\"40px\""+(_vm._ssrAttr("src",_vm.$auth.user.photo))+">"):("<div class=\"not-avatar\">"+_vm._ssrEscape("\n                 "+_vm._s(_vm.$auth.user.name.slice(0,1).toUpperCase())+"\n            ")+"</div>"))+"</div> <div class=\"d-flex flex-column f-13 f-bold\"><div class=\"mb-4px text-gray\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.$auth.user.name)+" | ")+"<span class=\"text-main\">"+_vm._ssrEscape(" "+_vm._s(_vm.$auth.user.coin || 0))+"</span> Tokens\n            </div> <div class=\"flex-align-center\"><div class=\"f-bold text-main\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$auth.user.email)+"\n                ")+"</div></div></div></div> "),_vm._ssrNode("<div class=\"w-100 d-flex flex-column profileMenuList\">","</div>",_vm._l((_vm.menus),function(item){return _c('b-link',{key:item.id,staticClass:"profileMenuItem ",class:item.id === _vm.activeMenu ? 'activeMenu' : 'text-gray',attrs:{"to":item.url}},[_c('span',{staticClass:"f-12"},[_vm._v(_vm._s(item.text))])])}),1),_vm._ssrNode(" <div class=\"w-100 d-flex flex-column profileActions mt-15px\"><div class=\"btnWrap\"><button type=\"button\" class=\"btn\"><img"+(_vm._ssrAttr("src",__webpack_require__(230)))+" class=\"btn-icon mr-5px\">\n                Nạp thêm Token\n            </button></div> <div class=\"btnWrap\"><button type=\"button\" class=\"btn logoutBtn\"><img"+(_vm._ssrAttr("src",__webpack_require__(231)))+" class=\"btn-icon mr-5px\">\n                Đăng xuất\n            </button></div></div>")],2)}
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
var componentNormalizer = __webpack_require__(4);

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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/project.vue?vue&type=template&id=d080b694&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"createEditComponent",class:_vm.isEdit ? '': 'wrapperForm'},[_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"editRow mb-15px form-group row\">"+((!_vm.isEdit)?("<div class=\"fieldLabel fw-600 f-13 col-md-3 col-sm-12\">Tên dự án<span style=\"color:red\">*</span></div>"):"<!---->")+" <div class=\"fieldInput col-md-9 col-sm-12\"><div class=\"form-group mb-0\"><input type=\"text\" required=\"required\" placeholder=\"Tên dự án bạn đã thực hiện\""+(_vm._ssrAttr("value",(_vm.objProject.name)))+(_vm._ssrClass("form-control",_vm.isEdit ? 'title' :''))+"></div></div> "+((_vm.isEdit)?("<div class=\"line\"></div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"editRow mb-15px form-group row\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel fw-600 f-13 col-md-3 col-sm-12\">Dịch vụ<span style=\"color:red\">*</span></div> "),_vm._ssrNode("<div class=\"fieldInput col-md-9 col-sm-12\">","</div>",[_vm._ssrNode("<div class=\" mb-0\">","</div>",[_c('treeselect',{attrs:{"options":_vm.optionsCategory,"disable-branch-nodes":true,"value":_vm.objProject.category,"multiple":false,"clearable":false,"placeholder":"Chọn dịch vụ","required":""},model:{value:(_vm.objProject.category),callback:function ($$v) {_vm.$set(_vm.objProject, "category", $$v)},expression:"objProject.category"}})],1)]),_vm._ssrNode(" "+((_vm.isEdit)?("<div class=\"line mt-15px\"></div>"):"<!---->"))],2),_vm._ssrNode(" <div"+(_vm._ssrClass("editRow  form-group row",(_vm.objProject.photos && _vm.objProject.photos.length || _vm.arrBase64.length) ? 'mb-15px' :'mb-25px'))+"><div class=\"fieldLabel fw-600 f-13 col-md-3 col-sm-12\">Mô tả chi tiết<span style=\"color:red\">*</span></div> <div class=\"fieldInput col-md-9 col-sm-12\"><div class=\"form-group mb-0\"><textarea required=\"required\" placeholder=\"Mô tả chi tiết dự án bạn đã thực hiện\" rows=\"8\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.objProject.description))+"</textarea></div></div> "+((_vm.isEdit)?("<div class=\"line mt-15px\"></div>"):"<!---->")+"</div> "+((_vm.objProject.photos && _vm.objProject.photos.length || _vm.arrBase64.length)?("<div class=\"editRow mb-10px form-group row\"><div class=\"fieldLabel fw-600 f-13 col-md-3 col-sm-12\">Hình ảnh dự án<span style=\"color:red\">*</span></div> <div class=\"fieldInput col-md-9 col-sm-12\"><div class=\"row pl-15px\">"+((_vm.objProject.photos)?((_vm._ssrList((_vm.objProject.photos),function(item,idx){return ("<div class=\"col-sm-6 pl-0\"><div class=\"itemComponent\""+(_vm._ssrStyle(null,{
                                  'background-image': 'url(' + "" + item + ')',
                              }, null))+"><i class=\"fas fa-times\"></i></div></div>")}))):"<!---->")+" "+((_vm.arrBase64.length)?((_vm._ssrList((_vm.arrBase64),function(item,idx){return ("<div class=\"col-sm-6 pl-0\"><div class=\"itemComponent\""+(_vm._ssrStyle(null,{
                                  'background-image': 'url(' + "" + (item.base64) + ')',
                              }, null))+"><i class=\"fas fa-times\"></i></div></div>")}))):"<!---->")+"</div></div> "+((_vm.isEdit)?("<div class=\"line mt-15px mb-10px\"></div>"):"<!---->")+"</div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"editRow mb-15px form-group row\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel fw-600 f-13 col-md-3 col-sm-12\">\n        Hình ảnh đính kèm\n      </div> "),_vm._ssrNode("<div class=\"fieldInput col-md-9 col-sm-12\">","</div>",[_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":true,"label":'Chọn hình ảnh'},on:{"input":_vm.getFile}})],1)],2),_vm._ssrNode(" <div class=\"w-100 my-40px\"><div class=\"row\"><div class=\"col-6 pl-0\"><button type=\"submit\" class=\"btn btn-main w-100 btn-lg\">"+((_vm.objProject._id)?("<span>CẬP NHẬT DỰ ÁN</span>"):("<span>THÊM DỰ ÁN</span>"))+"</button></div> <div class=\"col-6 pr-0\"><button type=\"button\" class=\"btn btn-main w-100 btn-lg bg-red\">\n            HUỶ BỎ\n          </button></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/edit/project.vue?vue&type=template&id=d080b694&

// EXTERNAL MODULE: ./assets/img/demo-house.png
var demo_house = __webpack_require__(220);
var demo_house_default = /*#__PURE__*/__webpack_require__.n(demo_house);

// EXTERNAL MODULE: ./components/InputFile.vue + 4 modules
var InputFile = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/project.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var projectvue_type_script_lang_js_ = ({props:['project','isEdit'],components:{InputFile: InputFile["default"]},data(){return{demoHouse:demo_house_default.a,objProject:{},optionsCategory:this.getCategoryParent(),accepFile:["png","jpeg","jpg","tiff"],tempFile:null,arrFile:[],arrBase64:[]};},mounted(){this.objProject={...this.project};},methods:{async createProject(){this.loader();var fileOld=this.objProject.photos||[];var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var fileAll=fileOld.concat(fileNew);this.objProject.photos=fileAll;try{let res=await this.$post('member/portfolio',this.objProject);this.arrFile=[];this.arrBase64=[];this.objProject={};this.cancelPopup();this.loader(0);if(this.isEdit){this.$notify({group:'all',text:'Cập nhật thành công',type:'dark'});}else{this.$notify({group:'all',text:'Tạo dự án thành công',type:'dark'});}}catch(err){console.log(err);this.loader(0);}},async getFile(arrFile){this.arrFile=this.arrFile.concat(arrFile);var arrBase64=[];this.arrFile.forEach(async item=>{var base64=await this._toBase64(item);arrBase64.push({base64,name:item.name});});this.arrBase64=arrBase64;},cancelPopup(){this.$emit('parentEvent');this.objProject={};},clearFile(file){this.arrBase64=this.arrBase64.filter(item=>item.base64!==file.base64);this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearOldFile(file){this.objProject.photos=this.objProject.photos.filter(item=>item!==file);}}});
// CONCATENATED MODULE: ./components/profile/edit/project.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_projectvue_type_script_lang_js_ = (projectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/edit/project.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3aa51c56"
  
)

/* harmony default export */ var project = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(213).default})


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/phoneform.vue?vue&type=template&id=5384b0fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalPhoneForm",attrs:{"id":"modal-change-phone-form-submit"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 mb-10px"},[_vm._v("Vui lòng nhập số điện thoại của bạn")]),_vm._v(" "),_c('form',{staticClass:"group-content mt-28px",on:{"submit":function($event){$event.preventDefault();_vm.showStepTwo ? _vm.verifyWithOTP() : _vm.saveConfirm()}}},[(_vm.showStepTwo)?_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 mt-8px"},[_vm._v("\n                Mã code\n                "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-9 col-sm-12"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codeObj.code1),expression:"codeObj.code1"}],staticClass:"form-control verifyOTP",attrs:{"type":"text","required":"","maxlength":"1"},domProps:{"value":(_vm.codeObj.code1)},on:{"keyup":function($event){return _vm.nextCode($event)},"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.codeObj, "code1", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codeObj.code2),expression:"codeObj.code2"}],staticClass:"form-control verifyOTP",attrs:{"type":"text","required":"","maxlength":"1"},domProps:{"value":(_vm.codeObj.code2)},on:{"keyup":function($event){return _vm.nextCode($event)},"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.codeObj, "code2", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codeObj.code3),expression:"codeObj.code3"}],staticClass:"form-control verifyOTP",attrs:{"type":"text","required":"","maxlength":"1"},domProps:{"value":(_vm.codeObj.code3)},on:{"keyup":function($event){return _vm.nextCode($event)},"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.codeObj, "code3", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codeObj.code4),expression:"codeObj.code4"}],staticClass:"form-control verifyOTP",attrs:{"type":"text","required":"","maxlength":"1"},domProps:{"value":(_vm.codeObj.code4)},on:{"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.codeObj, "code4", $event.target.value)}}})])]):_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 mt-8px"},[_vm._v("\n                  Số điện thoại\n                  "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activePhone),expression:"activePhone"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","placeholder":"Nhập số điện thoại cần xác thực"},domProps:{"value":(_vm.activePhone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.activePhone=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group mb-40px group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.agree),callback:function ($$v) {_vm.agree=$$v},expression:"agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"submit"}},[_vm._v("\n                      "+_vm._s(_vm.showStepTwo ? 'Xác nhận' : 'GỬI MÃ OTP XÁC THỰC')+"\n                    ")]),_vm._v(" "),(_vm.msg)?_c('small',{staticClass:"text-danger"},[_vm._v(_vm._s(_vm.msg))]):_vm._e()])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/phoneform.vue?vue&type=template&id=5384b0fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/phoneform.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var phoneformvue_type_script_lang_js_ = ({props:['phone'],data(){return{agree:false,options:this.getCategory(),date:new Date(),activePhone:this.phone,showStepTwo:false,msg:'',codeObj:{}};},mounted(){},methods:{saveConfirm(){this.msg='';let obj={phone:this.activePhone};// call api here
this.$post('user/verify/phone',obj).then(res=>{if(res.data.status==true){this.showStepTwo=true;this.agree=false;}else{this.msg=res.data.msg;}}).catch(err=>{this.msg='Có lỗi xảy ra';console.log(err);});},verifyWithOTP(){this.msg='';let obj={phone:this.activePhone,verifiedCode:this.getCodeObj()};this.$post('user/verify/phone/code',obj).then(res=>{if(res.data.status){this.$emit('doneConfirmPhone');}else{this.msg=res.data.msg;}}).catch(err=>{this.msg='Có lỗi xảy ra';});},getCodeObj(){var code='';var object=this.codeObj;for(const key in object){if(Object.hasOwnProperty.call(object,key)){code=code+object[key]+'';}}return code;},nextCode(evt){const keysAllowed=['0','1','2','3','4','5','6','7','8','9'];const keyPressed=evt.key;if(!keysAllowed.includes(keyPressed)){return;}evt.target.nextElementSibling.focus();},show(){this.$refs.modalPhoneForm.showModal();},hide(){this.$refs.modalPhoneForm.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/phoneform.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_phoneformvue_type_script_lang_js_ = (phoneformvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/popup/phoneform.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_phoneformvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d25e144"
  
)

/* harmony default export */ var phoneform = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(79).default})


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/personal.vue?vue&type=template&id=108de87a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editProfileInfoWrap"},[_vm._ssrNode("<div class=\"f-20 f-bold text-main mb-24px\">\n        Thông tin cá nhân\n    </div> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"editRow mb-15px\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel\">\n                Hình ảnh đại diện <span class=\"info\">(Dưới 1MB)</span></div> "),_vm._ssrNode("<div class=\"fieldInput\">","</div>",[_vm._ssrNode(((_vm.avataBase64 || _vm.objInfor.photo)?("<div class=\"mb-5px\"><img"+(_vm._ssrAttr("src",_vm.avataBase64?_vm.avataBase64:_vm.objInfor.photo))+" alt class=\"uploadReview\"></div>"):"<!---->")+" "),_vm._ssrNode("<div>","</div>",[_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":false,"label":'Chọn hình ảnh'},on:{"input":_vm.getFile}})],1)],2)],2),_vm._ssrNode(" <div class=\"editRow mb-15px\"><div class=\"fieldLabel\">\n                Người đại diện<span class=\"dot\">*</span></div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><input type=\"text\" required=\"required\" placeholder=\"Họ và Tên\""+(_vm._ssrAttr("value",(_vm.objInfor.name)))+" class=\"form-control\"></div></div></div> <div class=\"editRow mb-15px\"><div class=\"fieldLabel\">\n                Tên công ty\n            </div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><input type=\"text\" placeholder=\"Tên công ty\""+(_vm._ssrAttr("value",(_vm.objInfor.company)))+" class=\"form-control\"></div></div></div> <div class=\"editRow mb-15px\"><div class=\"fieldLabel\">\n                Mã số thuế\n            </div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><input type=\"text\" placeholder=\"Mã số thuế\" maxlength=\"10\""+(_vm._ssrAttr("value",(_vm.objInfor.taxCode)))+" class=\"form-control\"></div></div></div> <div class=\"editRow mb-15px\"><div class=\"fieldLabel\">\n                Số điện thoại<span class=\"dot\">*</span></div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><input type=\"text\" required=\"required\" placeholder=\"Số điện thoại\""+(_vm._ssrAttr("disabled",_vm.objInfor.verified))+(_vm._ssrAttr("value",(_vm.objInfor.phone)))+" class=\"form-control\"> "+((_vm.objInfor.verified)?("<small class=\"text-main\">\n                        Đã xác thực\n                    </small>"):"<!---->")+"</div></div></div> <div class=\"editRow mb-15px\"><div class=\"fieldLabel\">\n                Email<span class=\"dot\">*</span></div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><input type=\"text\" required=\"required\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.objInfor.email)))+" class=\"form-control\"></div></div></div> <div class=\"editRow mb-15px\"><div class=\"fieldLabel\">\n                Địa chỉ<span class=\"dot\">*</span></div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><input required=\"required\" type=\"text\" placeholder=\"Địa chỉ\""+(_vm._ssrAttr("value",(_vm.objInfor.address)))+" class=\"form-control\"></div></div></div> "),_vm._ssrNode("<div class=\"editRow mb-15px\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel\">\n                Tỉnh thành<span class=\"dot\">*</span></div> "),_vm._ssrNode("<div class=\"fieldInput\">","</div>",[_vm._ssrNode("<div class=\"form-group mb-0\">","</div>",[_c('treeselect',{attrs:{"required":"","options":_vm.optionsProvince,"value":_vm.objInfor.province,"placeholder":"Tỉnh thành","clearable":false},model:{value:(_vm.objInfor.province),callback:function ($$v) {_vm.$set(_vm.objInfor, "province", $$v)},expression:"objInfor.province"}})],1)])],2),_vm._ssrNode(" <div class=\"editRow mb-15px\"><div class=\"fieldLabel\">\n                Website tham khảo\n            </div> <div class=\"fieldInput\"><div class=\"form-group mb-0\"><input type=\"text\" placeholder=\"Website/Link portfolio\""+(_vm._ssrAttr("value",(_vm.objInfor.website)))+" class=\"form-control\"></div></div></div> <div class=\"w-100 my-40px\"><button type=\"submit\" class=\"btn btn-main w-100 btn-lg\">\n                CẬP NHẬT THÔNG TIN\n            </button></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/edit/personal.vue?vue&type=template&id=108de87a&

// EXTERNAL MODULE: ./components/InputFile.vue + 4 modules
var InputFile = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/personal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var personalvue_type_script_lang_js_ = ({components:{InputFile: InputFile["default"]},data(){return{objInfor:{},optionsProvince:this.getProvince(),accepFile:["png","jpeg","jpg",'gif'],tempFile:null,avataBase64:null};},mounted(){this.getUser();},methods:{getUser(){var{phone,email,name,photo,address,company,province,website,verified}=this.$auth.user;province=province||null;this.objInfor={phone,email,name,photo,address,company,province,website,verified};},async updateInfor(){this.loader();var photo=this.tempFile?await this.uploadFile(this.tempFile):'';if(photo){this.objInfor.photo=photo;}try{let res=await this.$post('user/information',this.objInfor);this.$auth.fetchUser();this.avataBase64=null;this.loader(0);this.$notify({group:'all',text:'Cập nhật thành công',type:'dark'});}catch(err){this.loader(0);}},async getFile(file){this.tempFile=file;this.avataBase64=await this._toBase64(file);}}});
// CONCATENATED MODULE: ./components/profile/edit/personal.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_personalvue_type_script_lang_js_ = (personalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/edit/personal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_personalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e3524b4"
  
)

/* harmony default export */ var personal = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(213).default})


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


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/work.vue?vue&type=template&id=89f381aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editProfileInfoWrap"},[_vm._ssrNode("<div class=\"mb-24px borderWrap\"><div class=\"f-20 f-bold text-main mb-15px\">\n          Dự án đã thực hiện\n      </div> <div class=\"mb-24px text-black f-12\">\n          Vui lòng cung cấp thêm thông tin các dự án cũ bạn đã từng làm trước đây. Khách hàng thường xem qua hồ sơ năng lực rồi mới quyết định thuê.\n      </div> <div class=\"group-project-items\">"+(_vm._ssrList((_vm.listShow),function(item,idx){return ("<div class=\"col-md-3 col-md-4 col-sm-6 cover-item\"><div class=\"d-flex justify-content-end mb-5px\"><div class=\"group-function\"><img"+(_vm._ssrAttr("src",__webpack_require__(219)))+"> <span class=\"cursor-pointer\">Chỉnh sửa</span> <div class=\"height\"></div> <span class=\"cursor-pointer\">Xoá bỏ</span></div></div> <div class=\"item\""+(_vm._ssrStyle(null,{
                          'background-image': 'url(' + "" + (item.photos[0]) + ')',
                      }, null))+"><p class=\"location f-12\">"+_vm._ssrEscape(_vm._s(item.name))+"</p></div></div>")}))+"</div> "+((_vm.showSeemore)?("<div class=\"w-100 text-center\"><p class=\"f-12 text-main cursor-pointer\">Xem thêm dự án <i class=\"fas fa-caret-down ml-5px\"></i></p></div>"):"<!---->")+"</div> <div class=\"f-20 f-bold text-main mb-24px\">\n    Thêm dự án\n  </div> "),(!_vm.detailProject)?_c('ProfileEditProject',{ref:"addProject",on:{"parentEvent":_vm.hideModal}}):_vm._e(),_vm._ssrNode(" "),_c('Modal',{ref:"modalEditProject",attrs:{"id":"modal-create-update-project","title":''},on:{"close":_vm.hideModal},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.detailProject)?_c('ProfileEditProject',{ref:"editProject",attrs:{"project":_vm.detailProject,"isEdit":true},on:{"parentEvent":_vm.hideModal}}):_vm._e()]},proxy:true}])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/edit/work.vue?vue&type=template&id=89f381aa&

// EXTERNAL MODULE: ./assets/img/demo-house.png
var demo_house = __webpack_require__(220);
var demo_house_default = /*#__PURE__*/__webpack_require__.n(demo_house);

// EXTERNAL MODULE: ./components/Modal.vue + 4 modules
var Modal = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/work.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var workvue_type_script_lang_js_ = ({components:{Modal: Modal["default"]},data(){return{demoHouse:demo_house_default.a,listProject:null,listShow:[],listTemp:[],detailProject:null,showSeemore:false};},mounted(){this.getListProject();},methods:{async getListProject(){let res=await this.$get('member/portfolio');this.listProject=res.data;this.listTemp=JSON.parse(JSON.stringify(this.listProject));this.listShow=this.listTemp.splice(0,6);if(this.listProject.length<6){this.showSeemore=false;}else{this.showSeemore=true;}},seemore(){this.listShow=JSON.parse(JSON.stringify(this.listProject));this.showSeemore=false;},async deleteProject(item){let confirm=window.confirm('Bạn có muốn xoá dự án?');if(confirm){let res=await this.$del(`member/portfolio/${item._id}`);if(res.data.status){this.getListProject();this.$auth.fetchUser();}}},openModal(item){this.$refs.modalEditProject.showModal();this.detailProject=item;},hideModal(){this.detailProject=null;this.getListProject();this.$auth.fetchUser();this.$refs.modalEditProject.hideModal();}}});
// CONCATENATED MODULE: ./components/profile/edit/work.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_workvue_type_script_lang_js_ = (workvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/edit/work.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_workvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "391c4305"
  
)

/* harmony default export */ var work = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProfileEditProject: __webpack_require__(241).default,Modal: __webpack_require__(79).default})


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/confirm.vue?vue&type=template&id=38616046&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editProfileInfoWrap"},[_vm._ssrNode("<div class=\"f-20 f-bold text-main mb-15px\">\n        Xác thực thông tin tài khoản\n    </div> <div class=\"mb-24px text-black f-12\">\n        Xác thực đầy đủ thông tin doanh nghiệp/cá nhân để nhận được sự tin tưởng từ khách hàng và làm việc an toàn, hiệu quả.\n    </div> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"editRow mb-15px\"><div class=\"fieldLabel w-200px\">\n                Xác thực số điện thoại<span class=\"dot\">*</span></div> <div class=\"fieldInput flex-align-center\"><div"+(_vm._ssrClass("form-group mb-0 flex-1 mr-15px",_vm.$auth.user.verified ? 'group-verfiry' : ''))+"><input type=\"text\" required=\"required\""+(_vm._ssrAttr("disabled",_vm.$auth.user.verified))+" placeholder=\"Số điện thoại\""+(_vm._ssrAttr("value",(_vm.phone)))+(_vm._ssrClass("form-control",_vm.$auth.user.verified ? 'verify' : ''))+"> "+((_vm.$auth.user.verified)?("<div class=\"group-verify\"><img"+(_vm._ssrAttr("src",__webpack_require__(217)))+" alt> <span> Đã xác thực</span></div>"):"<!---->")+"</div> <div><button type=\"button\""+(_vm._ssrAttr("disabled",_vm.$auth.user.verified))+" class=\"btn btn-main px-25px\">\n                        Xác thực\n                    </button></div></div></div> "),_vm._ssrNode("<div class=\"editRow align-items-start mb-15px\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel pt-5px w-200px\">\n                Xác thực CMND/Passport<span class=\"dot\">*</span> <br> <span class=\"info\">\n                    Vui lòng kèm trong file cả mặt trước và mặt sau của thẻ căn cước công dân\n                </span></div> "),(_vm.$auth.user.verifiedPaperStatus == 'NoAction')?_vm._ssrNode("<div class=\"fieldInput flex-align-center\">","</div>",[_vm._ssrNode("<div class=\"d-flex w-100\" style=\"justify-content:space-between\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('InputFile',{attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}}),_vm._ssrNode(" "+((_vm.arrFile.length)?("<div class=\"col-md-9 pl-0\">"+(_vm._ssrList((_vm.arrFile),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                                    "+_vm._s(item.name)+"\n                                    ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))+"</div>"):"<!---->"))],2),_vm._ssrNode(" <button type=\"button\" class=\"btn btn-main px-25px\">\n                        Xác thực\n                    </button>")],2)]):_vm._ssrNode(("<div>"+((_vm.$auth.user.verifiedPaperStatus == 'Active')?("<small class=\"checkVerify\"><img"+(_vm._ssrAttr("src",__webpack_require__(217)))+" alt>\n                    Đã xác thực\n                </small>"):("<small class=\"text-danger fw-600\">\n                    Đang xác thực\n                </small>"))+" "+((_vm.$auth.user.verifiedPaper && _vm.$auth.user.verifiedPaper.length)?("<div>"+(_vm._ssrList((_vm.$auth.user.verifiedPaper),function(item,idx){return ("<p class=\"f-11 cursor-pointer text-main  mb-0 mt-8px\"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                        ")+"</p>")}))+"</div>"):"<!---->")+"</div>"))],2)],2),_vm._ssrNode(" "),(!_vm.$auth.user.verified)?_c('PopupPhoneform',{ref:"PopupChangePhone",attrs:{"phone":_vm.phone},on:{"doneConfirmPhone":_vm.doneConfirmPhone}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/edit/confirm.vue?vue&type=template&id=38616046&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/confirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var confirmvue_type_script_lang_js_ = ({data(){return{phone:this.$auth.user.phone,acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[]};},mounted(){this.$auth.fetchUser();},methods:{doneConfirmPhone(){this.$auth.fetchUser();},async verifyPassport(){var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={verifiedPaper:arrFile};this.$post('user/verify/paper',obj).then(res=>{this.$auth.fetchUser();}).catch(err=>{console.log(err);});},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},openModalPhone(){this.$refs.PopupChangePhone.show();}}});
// CONCATENATED MODULE: ./components/profile/edit/confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_confirmvue_type_script_lang_js_ = (confirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/edit/confirm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_confirmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f39e1fc"
  
)

/* harmony default export */ var edit_confirm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(213).default,PopupPhoneform: __webpack_require__(242).default})


/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/account.vue?vue&type=template&id=b3eb995a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editProfileInfoWrap"},[_vm._ssrNode("<div class=\"w-100 flex-align-center tabsWrap\">"+(_vm._ssrList((_vm.tabs),function(tab){return ("<div"+(_vm._ssrClass("tabItem flex-align-center",{'activeTab': _vm.activeTab === tab.id}))+"><div>"+_vm._ssrEscape(_vm._s(tab.text))+"</div></div>")}))+"</div> "),_vm._ssrNode("<div class=\"editWrap\">","</div>",[(_vm.activeTab === '1')?_c('ProfileEditPersonal'):_vm._e(),_vm._ssrNode(" "),(_vm.activeTab === '2')?_c('ProfileEditCompany'):_vm._e(),_vm._ssrNode(" "),(_vm.activeTab === '3')?_c('ProfileEditWork'):_vm._e(),_vm._ssrNode(" "),(_vm.activeTab === '4')?_c('ProfileEditConfirm'):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/account.vue?vue&type=template&id=b3eb995a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/account.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var accountvue_type_script_lang_js_ = ({components:{},data(){return{tabs:[{id:'1',text:'Thông tin cá nhân'},{id:'2',text:'Hồ sơ làm việc'},{id:'3',text:'Dự án đã thực hiện'},{id:'4',text:'Xác thực tài khoản'}],activeTab:this.$nuxt.$route.query.tab};},mounted(){},watch:{tabUrl(){this.activeTab=this.tabUrl;}},computed:{tabUrl(){return this.$nuxt.$route.query.tab;}},methods:{addQuery(tab){this.$router.push({path:this.$route.path,query:{tab:tab}});}}});
// CONCATENATED MODULE: ./components/profile/account.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_accountvue_type_script_lang_js_ = (accountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/account.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_accountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7afc6b7c"
  
)

/* harmony default export */ var account = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProfileEditPersonal: __webpack_require__(270).default,ProfileEditCompany: __webpack_require__(271).default,ProfileEditWork: __webpack_require__(272).default,ProfileEditConfirm: __webpack_require__(273).default})


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/chinh-sua-ho-so.vue?vue&type=template&id=23229d4b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"editProfileMember\" class=\"wrapSection pt-30px pb-80px\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"d-flex\">","</div>",[_vm._ssrNode("<div class=\"profileMenuInfoWrap mr-20px\">","</div>",[_c('ProfileMenu',{attrs:{"activeMenu":"1"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 profileInfoWrap\">","</div>",[_c('ProfileAccount')],1)],2)])])])]),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/member/chinh-sua-ho-so.vue?vue&type=template&id=23229d4b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/chinh-sua-ho-so.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var chinh_sua_ho_sovue_type_script_lang_js_ = ({middleware:'auth',data(){return{};},mounted(){},methods:{}});
// CONCATENATED MODULE: ./pages/member/chinh-sua-ho-so.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_chinh_sua_ho_sovue_type_script_lang_js_ = (chinh_sua_ho_sovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/member/chinh-sua-ho-so.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_chinh_sua_ho_sovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ec5c2fee"
  
)

/* harmony default export */ var chinh_sua_ho_so = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(23).default,ProfileMenu: __webpack_require__(234).default,ProfileAccount: __webpack_require__(329).default,Footer: __webpack_require__(18).default})


/***/ })

};;
//# sourceMappingURL=chinh-sua-ho-so.js.map