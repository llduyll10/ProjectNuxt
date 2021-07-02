exports.ids = [42,16,33,35,36];
exports.modules = {

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/contractor/negotiate.vue?vue&type=template&id=2b44ec22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"manage-project"}},[_vm._ssrNode("<div class=\"wrap\">","</div>",[_vm._ssrNode("<h1 class=\"title\">Dự án đang thương lượng</h1> "),_vm._ssrNode("<div class=\"group-function d-flex\">","</div>",[_vm._ssrNode("<input placeholder=\"Tìm kiếm dự án\""+(_vm._ssrAttr("value",(_vm.searchText)))+" class=\"input-search form-control\"> "),_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objSearch.type,"placeholder":"Tra theo năm","clearable":false},model:{value:(_vm.objSearch.type),callback:function ($$v) {_vm.$set(_vm.objSearch, "type", $$v)},expression:"objSearch.type"}}),_vm._ssrNode(" <div class=\"btn-search\">\n                Tìm kiếm\n            </div>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<table class=\"table table-custom\">","</table>",[_vm._ssrNode("<thead><tr><th scope=\"col\">Tên dự án</th> <th scope=\"col\">Khách hàng</th> <th scope=\"col\">Giá của bạn</th> <th scope=\"col\">Trạng thái</th></tr></thead> "),(_vm.listShow)?_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.listShow),function(item,idx){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td"+(_vm._ssrClass("name cursor-pointer",item.project ? _vm.getClassCategory(_vm.mapImgFromCategory(item.project.category)) : ''))+">"+_vm._ssrEscape("\n                    "+_vm._s(item.project ? item.project.name : '')+"\n                ")+"</td> <td class=\"customer  f-12\"><span class=\"text-main\">"+_vm._ssrEscape("\n                        "+_vm._s(item.projectOwner.name)+"\n                    ")+"</span></td> <td class=\"price \">"+_vm._ssrEscape(_vm._s(_vm.formatVnd(item.price))+" VND")+"</td> "),_vm._ssrNode("<td class=\"status \">","</td>",[(item.step == 1)?[_vm._ssrNode("<span class=\"f-12 text-main cursor-pointer\">Xem yêu cầu khảo sát</span>")]:(item.step == 3 && item.deal.length)?_vm._ssrNode("<span class=\"f-12 text-main cursor-pointer\">\n                            Xem yêu cầu thương lượng\n                        </span>"):(item.step == 2 && !item.deal.length)?_vm._ssrNode("<span class=\"f-12 text-main cursor-pointer\">\n                            Đã cập nhật báo giá\n                        </span>"):[_c('b-dropdown',{staticClass:"custom-infor pb-5px",attrs:{"id":"dropdown-duedate","variant":"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"cover-infor"},[_c('p',{staticClass:"f-12"},[_c('span',{staticClass:"f-12 text-main"},[_vm._v("Khảo sát "+_vm._s(item.survey[0].time)+" - "+_vm._s(_vm.$moment(item.survey[0].date).format('DD/MM/YYYY')))]),_vm._v(" "),_c('i',{staticClass:"fas fa-caret-down ml-5px f-16 text-main"})])])])]},proxy:true}],null,true)},[_vm._v(" "),_c('b-dropdown-item',{staticClass:"f-12",on:{"click":function($event){return _vm.cancelSurvey()}}},[_vm._v("\n                                Huỷ  khảo sát\n                                ")])],1)]],2)],2)}),0):_vm._e()],2),_vm._ssrNode(" "),(_vm.activeCompany)?_c('PopupViewSurvey',{ref:"popupViewSurvey",attrs:{"objProject":_vm.activeCompany,"detailProject":_vm.activeCompany.project,"rawCategory":_vm.activeCompany.project.category},on:{"getListParent":_vm.getListQuote}}):_vm._e(),_vm._ssrNode(" "),(_vm.activeCompany)?_c('PopupSurveyUpdate',{ref:"surveyUpdate",attrs:{"objCompany":_vm.activeCompany,"detailProject":_vm.activeCompany.project,"rawCategory":_vm.activeCompany.project.category,"isCompany":true},on:{"getListParent":_vm.getListQuote}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/contractor/negotiate.vue?vue&type=template&id=2b44ec22&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/contractor/negotiate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var negotiatevue_type_script_lang_js_ = ({data(){return{listProject:null,listShow:null,activeCompany:null,optionSearch:[{id:1,label:'Tất cả dự án'},{id:2,label:'Đang nhận hồ sơ'},{id:3,label:'Đã hết hạn'}],optionOverDue:[{id:1,label:'Đăng lại dự án'}],objSearch:{type:1},searchText:''};},watch:{objSearch:{deep:true,handler(){this.filterList(JSON.parse(JSON.stringify(this.listProject)));}}},mounted(){this.getListQuote();},methods:{getListQuote(){this.loader();this.$get('/member/my-auction/').then(res=>{this.listProject=res.data;this.listShow=res.data.filter(item=>item.survey.length>0&&(item.deal.length&&item.deal[0].status!='OK'||item.deal.length==0));this.activeCompany=this.listShow[0];this.loader(0);}).catch(err=>{this.loader(0);});},cancelSurvey(){var obj={...this.activeCompany.survey[0],project:this.activeCompany.project._id,auction:this.activeCompany._id};console.log('obj',obj);this.$post('member/survey/cancel',obj).then(res=>{console.log('post',res);this.getListQuote();}).catch(err=>{console.log('err',err);});},filterList(list){if(this.objSearch.type==1){this.listShow=list;}else if(this.objSearch.type==2){this.listShow=list.filter(item=>!this.checkStatusDueDate(item.dueDate));}else{this.listShow=list.filter(item=>this.checkStatusDueDate(item.dueDate));}},handleSearchText(){var arrTemp=JSON.parse(JSON.stringify(this.listProject));if(this.searchText){this.listShow=arrTemp.filter(item=>{return this.searchText.toLowerCase().split(' ').every(v=>item.name.toLowerCase().includes(v));});}else{this.listShow=arrTemp;}},handleSearch(){var arrTemp=JSON.parse(JSON.stringify(this.listProject));if(this.searchText){var arrSearchTextTmp=arrTemp.filter(item=>{return this.searchText.toLowerCase().split(' ').every(v=>item.name.toLowerCase().includes(v));});this.filterList(arrSearchTextTmp);}else{this.filterList(this.listProject);}},openModalViewSurvey(company){this.activeCompany=company;this.$refs.popupViewSurvey.show();this.$refs.popupViewSurvey.getInforPerchant(this.activeCompany.projectOwner);},openModalUpdateSurvey(company){this.activeCompany=company;this.$refs.surveyUpdate.show();}}});
// CONCATENATED MODULE: ./components/profile/contractor/negotiate.vue?vue&type=script&lang=js&
 /* harmony default export */ var contractor_negotiatevue_type_script_lang_js_ = (negotiatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/profile/contractor/negotiate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contractor_negotiatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "70ce37b6"
  
)

/* harmony default export */ var negotiate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PopupViewSurvey: __webpack_require__(96).default,PopupSurveyUpdate: __webpack_require__(92).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputFile.vue?vue&type=template&id=15adf062&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"file\""+(_vm._ssrAttr("multiple",_vm.multiple))+(_vm._ssrClass("inputfile",_vm.isChat ? 'w-40' : ''))+"> <label"+(_vm._ssrClass(null,_vm.isChat ? 'bg-white mb-0' : ''))+">"+((_vm.isChat)?("<img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt class=\"mr-4px h-13px mb-2px\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.label)+"\n        ")))+"</label> "+((!_vm.isChat)?("<span class=\"text-main f-11 font-italic\">"+(_vm._ssrList((_vm.accept),function(item,idx){return (_vm._ssrEscape("\n           "+_vm._s(item)+" ")+(((idx+1) < _vm.accept.length)?("<span>,</span>"):"<!---->"))}))+"</span>"):"<!---->")+" "+((_vm.showAlert)?("<small class=\"text-danger d-block\">Sai định dạng</small>"):"<!---->"))])}
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
var componentNormalizer = __webpack_require__(2);

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

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/file.0c843c8.svg";

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-upload.762d37f.svg";

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyUpdate.vue?vue&type=template&id=1e5246a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyUpdate",attrs:{"id":"modal-survey-update"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objCompany)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[(_vm.isCompany)?_c('p',{staticClass:"title f-14 fw-600"},[_vm._v("\n            Khách hàng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objCompany.projectOwner.name))]),_vm._v(" đã gửi yêu cầu thương lượng giá/tiến độ với bạn. Bạn sẽ tốn "),_c('span',{staticClass:"text-main"},[_vm._v("500 Tokens")]),_vm._v("  khi xác nhận đồng ý và bắt đầu công trình\n        ")]):_c('p',{staticClass:"title f-14 fw-600"},[_vm._v("\n            Chọn "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objCompany.auctionBy.company))]),_vm._v(" làm đơn vị thi công và yêu cầu thương lượng\n        ")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.submitForm()}}},[_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên dự án:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"f-16 fw-600",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                            "+_vm._s(_vm.detailProject.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[(_vm.isCompany)?_c('span',{staticClass:"key"},[_vm._v("Tin nhắn của khách "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]):_c('span',{staticClass:"key"},[_vm._v("Soạn tin nhắn "),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].message),expression:"objCompany.deal[0].message"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5","readonly":!_vm.surveryUpdate},domProps:{"value":(_vm.objCompany.deal[0].message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "message", $event.target.value)}}})]:[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.message),expression:"objSurvey.message"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objSurvey.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "message", $event.target.value)}}})]],2)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Đơn giá dự thầu")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.formatNamePrice(_vm.objCompany.price)))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Đơn giá thương lượng")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?_c('div',{staticClass:"input-group"},[_c('currency-input',{staticClass:"form-control fw-600",attrs:{"type":"text","required":"","placeholder":"200,000,000","readonly":!_vm.surveryUpdate},model:{value:(_vm.objCompany.deal[0].price),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "price", $$v)},expression:"objCompany.deal[0].price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1):_c('div',{staticClass:"input-group"},[_c('currency-input',{staticClass:"form-control fw-600",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objSurvey.price),callback:function ($$v) {_vm.$set(_vm.objSurvey, "price", $$v)},expression:"objSurvey.price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1)])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tiến độ thi công")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.objCompany.day)+" ngày")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tiến độ mong muốn")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].day),expression:"objCompany.deal[0].day"}],staticClass:"form-control",attrs:{"type":"text","required":"","readonly":!_vm.surveryUpdate},domProps:{"value":(_vm.objCompany.deal[0].day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "day", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("Ngày")])])]):_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.day),expression:"objSurvey.day"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objSurvey.day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "day", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("Ngày")])])])])]),_vm._v(" "),((_vm.isCompany && _vm.objCompany.deal[0]) || (_vm.surveryUpdate && _vm.objCompany.deal[0]))?[_c('div',{staticClass:"row mb-15px mr-60px"},[(_vm.objCompany.payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(item.value))])])])]})],2):_vm._e(),_vm._v(" "),(_vm.objCompany.deal[0] &&  _vm.objCompany.deal[0].payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.deal[0].payments),function(item,idx){return [_c('div',{key:idx+10,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.value),expression:"item.value"}],staticClass:"form-control",attrs:{"type":"text","required":"","readonly":!_vm.surveryUpdate},domProps:{"value":(item.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "value", $event.target.value)}}})])])]})],2):_vm._e()])]:[_c('div',{staticClass:"row mb-15px mr-60px"},[(_vm.objCompany.payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(item.value))])])])]})],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx+10,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.newValue),expression:"item.newValue"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(item.newValue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "newValue", $event.target.value)}}})])])]})],2)])],_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Yêu cầu báo cáo")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[(_vm.isCompany && _vm.objCompany.deal[0])?_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objCompany.deal[0].report,"placeholder":"","clearable":false,"disabled":""},model:{value:(_vm.objCompany.deal[0].report),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "report", $$v)},expression:"objCompany.deal[0].report"}}):_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objSurvey.report,"placeholder":"","clearable":false},model:{value:(_vm.objSurvey.report),callback:function ($$v) {_vm.$set(_vm.objSurvey, "report", $$v)},expression:"objSurvey.report"}})],1)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"f-13  col-md-3 col-sm-12 "},[_c('span',{staticClass:"key"},[_vm._v("Tài liêu đính kèm:")])]),_vm._v(" "),(!_vm.isCompany)?_c('div',{staticClass:"col-md-9 "},[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}})],1):_vm._e(),_vm._v(" "),(!_vm.isCompany)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-md-9 "},[((_vm.isCompany &&  _vm.objCompany.deal[0] && _vm.objCompany.deal[0].attachments) || _vm.surveryUpdate)?[_vm._l((_vm.objCompany.deal[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                     "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                    "),(_vm.surveryUpdate)?_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFileOld(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})]):_vm._e()])]})]:_vm._e(),_vm._v(" "),(_vm.arrFile.length)?[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx + 30,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})]:_vm._e()],2)]),_vm._v(" "),(_vm.isCompany)?_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Phản hồi của bạn"),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.feedback),expression:"objSurvey.feedback"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objSurvey.feedback)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "feedback", $event.target.value)}}})]],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-group group-checkbox mb-0 d-flex"},[_c('b-form-checkbox',{staticClass:"f-13",attrs:{"checked":_vm.objSurvey.agree,"name":"checkbox-agree","required":""},model:{value:(_vm.objSurvey.agree),callback:function ($$v) {_vm.$set(_vm.objSurvey, "agree", $$v)},expression:"objSurvey.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1)],2),_vm._v(" "),_c('div',{staticClass:"footer"},[(_vm.isCompany)?[_c('div',{staticClass:"d-flex"},[_c('button',{ref:"btnConfirm",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('button',{staticClass:"btn-confirm mr-15px",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('ACCEPT')}}},[_c('span',[_vm._v("ĐỒNG Ý VÀ BẮT ĐẦU DỰ ÁN")])]),_vm._v(" "),_c('button',{staticClass:"btn-confirm cancel",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('CANCEL')}}},[_c('span',[_vm._v("TỪ CHỐI YÊU CẦU THƯƠNG LƯỢNG")])])])]:[_c('button',{staticClass:"btn-confirm",attrs:{"type":"submit"}},[_c('span',[_vm._v("GỬI YÊU CẦU THƯƠNG LƯỢNG")])])]],2)])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue?vue&type=template&id=1e5246a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyUpdate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyUpdatevue_type_script_lang_js_ = ({props:['objCompany','detailProject','rawCategory','isCompany','surveryUpdate'],data(){return{optionSearch:[{id:1,label:'1 tuần 1 lần'},{id:2,label:'2 tuần 1 lần'},{id:4,label:'1 tháng 1 lần'}],acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[],objSurvey:{message:'',report:1,agree:false},statusCallAPI:''};},mounted(){},methods:{async submitForm(){try{// this.loader()
var arrPayment=[];if(this.surveryUpdate){var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var fileOld=this.objCompany.deal[0].attachments||[];var arrFile=fileOld.concat(fileNew);this.objCompany.deal[0].payments.forEach(item=>{var obj={key:item.key,value:item.value};arrPayment.push(obj);});var obj={...this.objCompany.deal[0],project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction,payments:arrPayment,attachments:arrFile};}else{this.objCompany.payments.forEach(item=>{var obj={key:item.key,value:item.newValue};arrPayment.push(obj);});var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objSurvey,project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction,payments:arrPayment,attachments:arrFile};}let url='';if(this.statusCallAPI=='ACCEPT'){url='member/auction/deal/confirmed';}else if(this.statusCallAPI=='CANCEL'){url='member/auction/deal/cancel';}else{url='member/auction/deal';}let res=await this.$post(url,obj);console.log(res);this.hide();this.arrFile=[];if(this.statusCallAPI=='ACCEPT'||this.statusCallAPI=='CANCEL'){this.$emit('getListParent');}else{this.$emit('activeCompany');}}catch(err){this.loader(0);console.log(err);}},confirmSurvey(status){this.statusCallAPI=status;this.$refs.btnConfirm.click();},show(){console.log('objProject',this.objCompany);console.log('objProject',this.detailProject);console.log('objProject',this.rawCategory);this.$refs.popupSurveyUpdate.showModal();},hide(){this.$refs.popupSurveyUpdate.hideModal();},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objCompany.deal[0].attachments=this.objCompany.deal[0].attachments.filter(item=>item!==file);},getFile(file){this.arrFile=this.arrFile.concat(file);}}});
// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyUpdatevue_type_script_lang_js_ = (surveyUpdatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyUpdatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d38bb21"
  
)

/* harmony default export */ var surveyUpdate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyContact.vue?vue&type=template&id=0fd9722d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyContact",attrs:{"id":"modal-survey-contact"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objConfirm)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-14"},[_vm._v("\n            Bạn đã xác nhận yêu cầu khảo sát của khách hàng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objConfirm.name))]),_vm._v(". Nếu có thay đổi về thời gian và địa điểm, vui lòng liên hệ trực tiếp với khách.\n        ")]),_vm._v(" "),_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Họ Tên:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red"},[_vm._v(_vm._s(_vm.objConfirm.name))])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Số điện thoại:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.phone))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Địa chỉ Email:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.email))])])])]),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"btn-confirm",on:{"click":function($event){return _vm.hide()}}},[_c('span',[_vm._v("HOÀN TẤT")])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/surveyContact.vue?vue&type=template&id=0fd9722d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyContact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyContactvue_type_script_lang_js_ = ({props:['objConfirm'],methods:{show(){console.log('objProject',this.objConfirm);this.$refs.popupSurveyContact.showModal();},hide(){this.$refs.popupSurveyContact.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/surveyContact.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyContactvue_type_script_lang_js_ = (surveyContactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/surveyContact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyContactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9dc61b10"
  
)

/* harmony default export */ var surveyContact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/viewSurvey.vue?vue&type=template&id=7b2c6074&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Modal',{ref:"popupSurvey",attrs:{"id":"modal-survey"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objInfor)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-16 isCancel pr-60px"},[_vm._v("\n                        Khách hàng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objInfor.name))]),_vm._v(" đã chọn bạn khảo sát hiện trạng và gửi báo giá cuối cùng. Bạn sẽ tốn "),_c('span',{staticClass:"text-main"},[_vm._v("12 Tokens")]),_vm._v(" khi xác nhận tham gia khảo sát và báo giá\n                    ")]),_vm._v(" "),_c('form',{staticClass:"group-content mt-20px",on:{"submit":function($event){$event.preventDefault();return _vm.sendMessage()}}},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                Tên dự án\n                            ")]),_vm._v(" "),_c('span',{staticClass:"col-md-9 col-sm-12 pl-0 name-project",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                                "+_vm._s(_vm.detailProject.name)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                Soạn tin nhắn\n                                "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.message),expression:"objResearch.message"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","id":"customPlaceholder","rows":"5","placeholder":_vm.placeholder,"readonly":true},domProps:{"value":(_vm.objResearch.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "message", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                    Địa điểm khảo sát\n                                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.address),expression:"objResearch.address"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"type":"text","placeholder":"Nhập địa chỉ công trình","required":"","readonly":true},domProps:{"value":(_vm.objResearch.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "address", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                    Thời gian khảo sát\n                                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"d-flex"},[[_c('div',{staticClass:"input-group custom-input-calendar",staticStyle:{"min-width":"170px"}},[_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":_vm.$moment(_vm.objResearch.date).format('DD/MM/YYYY')}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text custom-time disabled"},[_c('i',{staticClass:"fas fa-calendar-day"})])])])],_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.time),expression:"objResearch.time"}],staticClass:"ml-20px form-control",attrs:{"type":"time","readonly":true},domProps:{"value":(_vm.objResearch.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "time", $event.target.value)}}})],2)]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13  col-md-3 col-sm-12 mt-1"},[_vm._v("\n                                Tài liệu đính kèm\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 col-sm-12 pl-0"},[(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                                "+_vm._s(item.name)+"\n                                            ")])]})],2):_vm._e(),_vm._v(" "),(_vm.objProject.survey[0] && _vm.objProject.survey[0].attachments)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.objProject.survey[0] && _vm.objProject.survey[0].attachments)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.objProject.survey[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                                "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                            ")])]})],2):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group  group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree-survey","required":""},model:{value:(_vm.objResearch.agree),callback:function ($$v) {_vm.$set(_vm.objResearch, "agree", $$v)},expression:"objResearch.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"form-group  group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objResearch.agreeSurvey),callback:function ($$v) {_vm.$set(_vm.objResearch, "agreeSurvey", $$v)},expression:"objResearch.agreeSurvey"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý khảo sát hiện trạng và sẽ  "),_c('span',{staticClass:"text-red"},[_vm._v(" cập nhật báo giá trong vòng 24 giờ ")]),_vm._v(" sau khi khảo sát "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[(!_vm.$auth.loggedIn)?_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n                                    VUI LÒNG ĐĂNG NHẬP\n                                ")])]):_c('div',{staticClass:"col-md-12 d-flex"},[_c('button',{ref:"btnClick",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('button',{staticClass:"btn-now mr-15px",attrs:{"type":"button"},on:{"click":function($event){return _vm.sendSurvey('CONFIRM')}}},[_vm._v("\n                                XÁC NHẬN KHẢO SÁT\n                                ")]),_vm._v(" "),_c('button',{staticClass:"btn-now delete",attrs:{"type":"button"},on:{"click":function($event){return _vm.sendSurvey('CANCEL')}}},[_vm._v("\n                                    TỪ CHỐI YÊU CẦU KHẢO SÁT\n                                ")])])])])])]):_vm._e()]},proxy:true}])}),_vm._ssrNode(" "),_c('PopupSurveyContact',{ref:"surveyContact",attrs:{"objConfirm":_vm.objConfirm}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/viewSurvey.vue?vue&type=template&id=7b2c6074&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/viewSurvey.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var viewSurveyvue_type_script_lang_js_ = ({props:['detailProject','rawCategory','objProject'],data(){return{objResearch:{agree:false,agreeSurvey:false,date:new Date().getTime()},objInfor:null,arrFile:[],accepFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],options:this.getCategory(),date:new Date(),statusConfirm:'',objConfirm:null,placeholder:'1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn\n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất.\n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác'};},mounted(){if(this.objProject){this.objResearch=this.objProject.survey[0];}},methods:{async sendMessage(){try{this.loader();var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objResearch,attachments:arrFile,project:this.detailProject._id,auction:this.objProject._id};if(this.statusConfirm=='CONFIRM'){let res=await this.$post('member/survey/confirmed',obj);this.$emit('getListParent');this.objConfirm=res.data.auction.projectOwner;this.showSurveyContact();}else{let res=await this.$post('member/survey/destroy',obj);this.$emit('getListParent');}this.loader(0);this.hide();window.location.reload();}catch(err){console.log(err);this.loader(0);}},sendSurvey(status){this.statusConfirm=status;this.$refs.btnClick.click();},getInforPerchant(infor){this.objInfor=infor;},show(){this.$refs.popupSurvey.showModal();console.log('this.company',this.company);},hide(){this.$refs.popupSurvey.hideModal();},showSurveyContact(){this.$refs.surveyContact.show();},hideSurveyContact(){this.$refs.surveyContact.hide();}}});
// CONCATENATED MODULE: ./components/popup/viewSurvey.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_viewSurveyvue_type_script_lang_js_ = (viewSurveyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/viewSurvey.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_viewSurveyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "14d4443d"
  
)

/* harmony default export */ var viewSurvey = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default,PopupSurveyContact: __webpack_require__(93).default})


/***/ })

};;
//# sourceMappingURL=profile-contractor-negotiate.js.map