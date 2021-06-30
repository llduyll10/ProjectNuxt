exports.ids = [84,19];
exports.modules = {

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-location.ebc9fcd.svg";

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNzE5MzQgMTUuNTk2NEMyLjcxOTM0IDE1LjU5NjQgMi43MDE1NyAxNiAzLjEzODI5IDE2QzMuNjgxNTkgMTYgOC4xNzk3NSAxNS45OTQ3IDguMTc5NzUgMTUuOTk0N0w4LjE4NzE1IDEyLjI2NDdDOC4xODcxNSAxMi4yNjQ3IDguMTE2MDkgMTEuNjQ5OCA4Ljc3NzA4IDExLjY0OThIMTAuODY4OUMxMS42NTA1IDExLjY0OTggMTEuNjAyNCAxMi4yNjQ3IDExLjYwMjQgMTIuMjY0N0wxMS41OTM1IDE1Ljk4MjdDMTEuNTkzNSAxNS45ODI3IDE1Ljg1ODUgMTUuOTgyNyAxNi41Mjg0IDE1Ljk4MjdDMTcuMDgyOCAxNS45ODI3IDE3LjA1NzYgMTUuNDgwMSAxNy4wNTc2IDE1LjQ4MDFWOC42MDM1NEwxMC4xMDI4IDMuMDE3NThMMi43MTkzNCA4LjYwMzU0VjE1LjU5NjRaIiBmaWxsPSIjMjA5Y2Q3Ii8+CjxwYXRoIGQ9Ik0wIDguMDgzNTZDMCA4LjA4MzU2IDAuNjI2OTQzIDkuMTI2ODQgMS45OTQwOCA4LjA4MzU2TDEwLjE2NDMgMS44NDI2MUwxNy44MjQ2IDguMDQ0OEMxOS40MDcxIDkuMDc1MzggMjAgOC4wNDQ4IDIwIDguMDQ0OEwxMC4xNjQzIDBMMCA4LjA4MzU2WiIgZmlsbD0iIzIwOWNkNyIvPgo8cGF0aCBkPSJNMTcuNjM4OCAxLjgyNzg4SDE1LjY2ODVMMTUuNjc2NiAzLjk4NTI3TDE3LjYzODggNS40ODgzN1YxLjgyNzg4WiIgZmlsbD0iIzIwOWNkNyIvPgo8L3N2Zz4K"

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-decord-orange.4360971.svg";

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-pen-green.33e99f6.svg";

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-1.5e8fbeb.png";

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/market1.bb2f9a1.png";

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/see.288dd5e.svg";

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/like.ea96e14.svg";

/***/ }),

/***/ 269:
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
var componentNormalizer = __webpack_require__(4);

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

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNDQ3MzYgMTQuNjIxN0MyLjQ0NzM2IDE0LjYyMTcgMi40MzEzNyAxNS4wMDAyIDIuODI0NDEgMTUuMDAwMkMzLjMxMzM4IDE1LjAwMDIgNy4zNjE3MiAxNC45OTUyIDcuMzYxNzIgMTQuOTk1Mkw3LjM2ODM4IDExLjQ5ODNDNy4zNjgzOCAxMS40OTgzIDcuMzA0NDMgMTAuOTIxOCA3Ljg5OTMyIDEwLjkyMThIOS43ODE5M0MxMC40ODU0IDEwLjkyMTggMTAuNDQyMSAxMS40OTgzIDEwLjQ0MjEgMTEuNDk4M0wxMC40MzQxIDE0Ljk4MzlDMTAuNDM0MSAxNC45ODM5IDE0LjI3MjYgMTQuOTgzOSAxNC44NzU1IDE0Ljk4MzlDMTUuMzc0NSAxNC45ODM5IDE1LjM1MTggMTQuNTEyNyAxNS4zNTE4IDE0LjUxMjdWOC4wNjU5NUw5LjA5MjQ0IDIuODI5MUwyLjQ0NzM2IDguMDY1OTVWMTQuNjIxN1oiIGZpbGw9IiM0RjRGNEYiLz4KPHBhdGggZD0iTTAgNy41NzgzMkMwIDcuNTc4MzIgMC41NjQyNDkgOC41NTYzOSAxLjc5NDY3IDcuNTc4MzJMOS4xNDc4OSAxLjcyNzQ0TDE2LjA0MjEgNy41NDE5OEMxNy40NjY0IDguNTA4MTQgMTggNy41NDE5OCAxOCA3LjU0MTk4TDkuMTQ3ODkgMEwwIDcuNTc4MzJaIiBmaWxsPSIjNEY0RjRGIi8+CjxwYXRoIGQ9Ik0xNS44NzQ5IDEuNzEzNjJIMTQuMTAxNkwxNC4xMDg5IDMuNzM2MThMMTUuODc0OSA1LjE0NTMzVjEuNzEzNjJaIiBmaWxsPSIjNEY0RjRGIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sofa.b1c4d93.svg";

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pen.1f4eeb4.svg";

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-duan.5ede1c1.svg";

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/no-avatar.b7a6b1f.png";

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMSAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzU3NDEgOS4yODk1OUM5LjAyODc0IDcuMjc5NTcgOC4xNzE0NSA1LjI5ODc5IDYuMTQ4ODkgNC42NjM2QzYuOTM0OTMgNC4yMTg1NSA3LjQ1NjY2IDMuNDI2NjYgNy40NTY2NiAyLjUyMTk0QzcuNDU2NjYgMS4xMzAzOCA2LjIxNTU0IDAgNC42ODI1MyAwQzMuMTQ5NTEgMCAxLjkwODM5IDEuMTI4MjkgMS45MDgzOSAyLjUyMTk0QzEuOTA4MzkgMy40MjQ1NyAyLjQzMjQyIDQuMjE4NTUgMy4yMTYxNyA0LjY2MzZDMS4xOTM2IDUuMjk4NzkgMC4zMzQwMDkgNy4yNzk1NyAwLjAwNzY0MDA5IDkuMjg5NTlDLTAuMDU0NDE1OSA5LjY2MzYgMC4yNjk2NTQgMTAgMC42ODU2NTkgMTBIOC42NzQ3OUM5LjA5NTQgMTAgOS40MTk0NyA5LjY2MzYgOS4zNTc0MSA5LjI4OTU5Wk0yLjk1NDE1IDIuNTIxOTRDMi45NTQxNSAxLjY1NDgzIDMuNzMxIDAuOTQ4NiA0LjY4NDgyIDAuOTQ4NkM0LjkxMjM2IDAuOTQ4NiA1LjA5ODUzIDEuMTE3ODQgNS4wOTg1MyAxLjMyNDdDNS4wOTg1MyAxLjUzMTU1IDQuOTEyMzYgMS43MDA3OSA0LjY4NDgyIDEuNzAwNzlDNC4xODYwOCAxLjcwMDc5IDMuNzgxNTYgMi4wNjg1MyAzLjc4MTU2IDIuNTIxOTRDMy43ODE1NiAyLjcyODc5IDMuNTk1NCAyLjg5ODA0IDMuMzY3ODYgMi44OTgwNEMzLjEzODAyIDIuODk4MDQgMi45NTQxNSAyLjczMDg4IDIuOTU0MTUgMi41MjE5NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/market3.eab61be.svg";

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tim-du-an.vue?vue&type=template&id=b0b48748&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"project\" class=\"pt-30px pb-80px\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-3 col-md-3 col-sm-12 pr-10px\"><div class=\"left\"><div class=\"top\"><div class=\"title f-16\">\n                                LĨNH VỰC CÔNG VIỆC\n                            </div></div> <div class=\"line\"></div> <div class=\"list\"><div"+(_vm._ssrClass("d-flex item-title f-14 cursor-pointer",_vm.activeParent == 1 ? 'fw-600 text-main' :''))+">"+((_vm.activeParent == 1)?("<img"+(_vm._ssrAttr("src",__webpack_require__(252)))+" alt>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(298)))+" alt>"))+" <span class=\"build\">"+_vm._ssrEscape(_vm._s(_vm.objCategory[0].label))+"</span></div> <div class=\"list-item f-13\"><ul>"+(_vm._ssrList((_vm.objCategory[0].children),function(item){return ("<li"+(_vm._ssrClass("cursor-pointer",item.active ? 'fw-600 text-main' :''))+">"+_vm._ssrEscape("\n                                        "+_vm._s(item.label)+"\n                                    ")+"</li>")}))+"</ul></div></div> <div class=\"list\"><div"+(_vm._ssrClass("d-flex item-title f-14 cursor-pointer",_vm.activeParent == 2 ? 'fw-600 colorOrange' :''))+">"+((_vm.activeParent == 2)?("<img"+(_vm._ssrAttr("src",__webpack_require__(253)))+" alt>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(299)))+" alt>"))+" <span class=\"decord\">"+_vm._ssrEscape(_vm._s(_vm.objCategory[1].label))+"</span></div> <div class=\"list-item f-13\"><ul>"+(_vm._ssrList((_vm.objCategory[1].children),function(item){return ("<li"+(_vm._ssrClass("cursor-pointer decord",item.active ? 'fw-600 colorOrange' :''))+">"+_vm._ssrEscape("\n                                        "+_vm._s(item.label)+"\n                                    ")+"</li>")}))+"</ul></div></div> <div class=\"list\"><div"+(_vm._ssrClass("d-flex item-title f-14 cursor-pointer",_vm.activeParent == 3 ? 'fw-600 colorGreen' :''))+">"+((_vm.activeParent == 3)?("<img"+(_vm._ssrAttr("src",__webpack_require__(254)))+" alt>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(300)))+" alt>"))+" <span class=\"desgin\">"+_vm._ssrEscape(_vm._s(_vm.objCategory[2].label))+"</span></div> <div class=\"list-item f-13\"><ul>"+(_vm._ssrList((_vm.objCategory[2].children),function(item){return ("<li"+(_vm._ssrClass("cursor-pointer desgin",item.active ? 'fw-600 colorGreen' :''))+">"+_vm._ssrEscape("\n                                        "+_vm._s(item.label)+"\n                                    ")+"</li>")}))+"</ul></div></div></div> <div class=\"box-title\"><p class=\"title f-16\">Tin Tức &amp; Thị Trường</p> <div class=\"line\"></div></div> <div class=\"row\">"+(_vm._ssrList((2),function(item,i){return ("<div class=\"col-md-12 col-sm-6\"><div class=\"left mt-24px\"><div class=\"boxs\"><img"+(_vm._ssrAttr("src",__webpack_require__(255)))+" alt> <h3 class=\"mt-15px\">Bỏ túi ngay bí quyết trang trí phòng khách hiện đại với Phố Xinh </h3> <div class=\"evaluate mt-15px\"><div class=\"lefts\"><img"+(_vm._ssrAttr("src",__webpack_require__(256)))+" alt> <div class=\"text\">\n                                            Bởi <span>Longb04</span></div></div> <div class=\"rights\"><div class=\"one mr-15px\"><img"+(_vm._ssrAttr("src",__webpack_require__(257)))+" alt> <p class=\"ml-6px\">290</p></div> <div class=\"one\"><img"+(_vm._ssrAttr("src",__webpack_require__(258)))+" alt class=\"mb-4px\"> <p class=\"ml-6px\">20</p></div></div></div></div></div></div>")}))+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-9 col-md-9 col-sm-12 pl-10px\">","</div>",[_vm._ssrNode("<div class=\"right margin-top\">","</div>",[_vm._ssrNode("<div class=\"top top-change\">","</div>",[_vm._ssrNode("<div class=\"search-top short-input\"><input type=\"text\" placeholder=\"Tìm kiếm  dự án\""+(_vm._ssrAttr("value",(_vm.objProject.s)))+" class=\"f-12\"></div> "),_c('treeselect',{staticClass:"search-center",attrs:{"options":_vm.optionsProvince,"value":_vm.objProject.address,"placeholder":"Tỉnh thành","clearable":false},model:{value:(_vm.objProject.address),callback:function ($$v) {_vm.$set(_vm.objProject, "address", $$v)},expression:"objProject.address"}}),_vm._ssrNode(" "),_c('treeselect',{staticClass:"search-center range-time",attrs:{"options":_vm.objDateFilter,"value":_vm.objProject.rangeDate,"placeholder":"Thời gian","clearable":false},model:{value:(_vm.objProject.rangeDate),callback:function ($$v) {_vm.$set(_vm.objProject, "rangeDate", $$v)},expression:"objProject.rangeDate"}}),_vm._ssrNode(" <div class=\"button\">Tìm kiếm</div>")],2),_vm._ssrNode(" <div class=\"line\"></div> "+(_vm._ssrList((_vm.listProject),function(item,idx){return ("<div class=\"center mb-20px\"><div class=\"boxinfo \"><div class=\"row\"><div class=\"col-lg-12 col-md-12 col-sm-12\"><div class=\"introduce\"><div class=\"cover-img\""+(_vm._ssrStyle(null,{
                                                    'background-image': 'url(' + "" + (item.photos[0] ? item.photos[0] : _vm.noAvatar) + ')',
                                                }, null))+"><div class=\"one d-flex f-12 cursor-pointer\"><img"+(_vm._ssrAttr("src",__webpack_require__(365)))+" alt> <div class=\"human-name ml-5px f-12\">"+_vm._ssrEscape(_vm._s(item.createBy.name))+"</div></div></div> <div class=\"content nopadding rent\"><div class=\"title d-flex\"><div class=\"d-flex title-icon\"><img width=\"20px\" height=\"20px\""+(_vm._ssrAttr("src",_vm.getIconImg(_vm.mapImgFromCategory(item.category))))+"> <div"+(_vm._ssrClass("sub f-14 text-main cursor-pointer",_vm.getClassCategory(_vm.mapImgFromCategory(item.category))))+">"+_vm._ssrEscape("\n                                                            "+_vm._s(item.name)+"\n                                                        ")+"</div></div> <div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(218)))+" alt> <span class=\"name f-11 text-main\">"+_vm._ssrEscape(_vm._s(item.address))+"</span></div></div> <div class=\"description padding-right f-13\">"+_vm._ssrEscape(_vm._s(item.description))+"</div> <div class=\"group-bot d-flex\"><div class=\"group-2 d-flex\"><div class=\"two\">\n                                                            Ngày đăng - <span>"+_vm._ssrEscape(_vm._s(_vm.checkIsToday(item.createdDate)))+"</span></div> <div class=\"three\">\n                                                            Ngân sách - <span>"+_vm._ssrEscape(_vm._s(_vm.formatNamePrice(item.budget)))+"</span></div> <div class=\"four\">\n                                                            Hạn chót chào giá -\n                                                            <span"+(_vm._ssrClass(null,_vm.checkStatusDueDate(item.dueDate) ? 'text-red' :''))+">"+_vm._ssrEscape("\n                                                                "+_vm._s(_vm.checkDueDate(item.dueDate))+"\n                                                            ")+"</span></div></div> <div class=\"like f-13\">"+_vm._ssrEscape("\n                                                        "+_vm._s(item.auctionCount)+" ")+"<span>Chào giá </span></div></div></div></div></div></div></div> <div class=\"line\"></div></div>")}))+" "),(_vm.count>0)?[_c('Pagination',{attrs:{"count":_vm.count,"perPage":5},on:{"page":_vm.getPaging}})]:_vm._e()],2)])],2)])]),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tim-du-an.vue?vue&type=template&id=b0b48748&

// EXTERNAL MODULE: ./assets/img/no-avatar.png
var no_avatar = __webpack_require__(302);
var no_avatar_default = /*#__PURE__*/__webpack_require__.n(no_avatar);

// EXTERNAL MODULE: ./assets/svg/market3.svg
var market3 = __webpack_require__(366);
var market3_default = /*#__PURE__*/__webpack_require__.n(market3);

// EXTERNAL MODULE: ./assets/svg/logo-duan.svg
var logo_duan = __webpack_require__(301);
var logo_duan_default = /*#__PURE__*/__webpack_require__.n(logo_duan);

// EXTERNAL MODULE: ./assets/svg/icon-house-blue.svg
var icon_house_blue = __webpack_require__(252);
var icon_house_blue_default = /*#__PURE__*/__webpack_require__.n(icon_house_blue);

// EXTERNAL MODULE: ./assets/svg/icon-decord-orange.svg
var icon_decord_orange = __webpack_require__(253);
var icon_decord_orange_default = /*#__PURE__*/__webpack_require__.n(icon_decord_orange);

// EXTERNAL MODULE: ./assets/svg/icon-pen-green.svg
var icon_pen_green = __webpack_require__(254);
var icon_pen_green_default = /*#__PURE__*/__webpack_require__.n(icon_pen_green);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tim-du-an.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tim_du_anvue_type_script_lang_js_ = ({// middleware: 'auth',
data(){return{noAvatar:no_avatar_default.a,logoDuan:logo_duan_default.a,iconBlueHouse:icon_house_blue_default.a,iconDecord:icon_decord_orange_default.a,iconPenBlue:icon_pen_green_default.a,avatar:market3_default.a,activeParent:this.$nuxt.$route.query.active||0,dataFake:[1,2,3,4,5,6,7],optionsProvince:this.getProvince(),objCategory:this.getCategory(),objDateFilter:this.getDateFilter(),arrFilter:[],objProject:{address:null,s:'',limit:10,page:1},listProject:[],count:0};},mounted(){this.getPaging({limit:10,page:1});},watch:{},methods:{async searchProject(){this.getPaging({limit:10,page:1});},getItemSearch(item,idxArray){var isRemove=false;//parent
if(idxArray==4){if(this.activeParent==item.id){this.activeParent=0;isRemove=true;}else{this.activeParent=item.id;}var arrTmp=JSON.parse(JSON.stringify(this.objCategory));arrTmp.forEach(arr1=>{arr1.children.forEach(child=>{child.active=false;});});this.objCategory=arrTmp;}//children
else{this.activeParent=0;var arrTmp=JSON.parse(JSON.stringify(this.objCategory));arrTmp.forEach(arr1=>{arr1.children.forEach(child=>{child.active=false;if(item.active){isRemove=true;return;}if(child.id==item.id){child.active=true;}});});this.objCategory=arrTmp;}if(this.arrFilter.length){this.arrFilter.splice(0,1);}if(isRemove){this.arrFilter=[];this.getPaging({limit:10,page:1});return;}this.arrFilter.push(item);this.getPaging({limit:10,page:1});},async getPaging(pageObj){this.loader();try{if([1,2,3].includes(Number(this.activeParent))){this.arrFilter=this.objCategory[this.activeParent-1].children;}this.objProject.category=[];this.arrFilter.forEach(item=>{this.objProject.category.push(item.id);});let res=await this.$post('public/projects',{...this.objProject,...pageObj});this.listProject=res.data.projects;this.count=res.data.count;this.arrFilter=[];window.scrollTo(0,0);this.loader(0);}catch(err){this.loader(0);}},getIconImg(value){if(value==1){return this.iconBlueHouse;}else if(value==2){return this.iconDecord;}else{return this.iconPenBlue;}},openLienHe(){this.$refs.refLienHe.show();},openLienHeMail(){this.$refs.LienHeFormPop.show();}}});
// CONCATENATED MODULE: ./pages/tim-du-an.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tim_du_anvue_type_script_lang_js_ = (tim_du_anvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/tim-du-an.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_tim_du_anvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "591d30aa"
  
)

/* harmony default export */ var tim_du_an = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(23).default,Pagination: __webpack_require__(269).default,Footer: __webpack_require__(18).default})


/***/ })

};;
//# sourceMappingURL=tim-du-an.js.map