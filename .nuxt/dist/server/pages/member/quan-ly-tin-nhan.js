exports.ids = [82,16];
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

/***/ 325:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgNSA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIyLjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzRGNEY0RiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/happy.44d073e.svg";

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xMS41MTQ2IDIwLjMyMDNWMTEuMDU5MUgxNC41NjgyTDE1LjAyNjMgNy40NDg3M0gxMS41MTQ2VjUuMTQ0MDVDMTEuNTE0NiA0LjA5OTEgMTEuNzk4NiAzLjM4Njk4IDEzLjI3MjggMy4zODY5OEwxNS4xNDk5IDMuMzg2MlYwLjE1Njk3NkMxNC44MjUzIDAuMTE0MDQ3IDEzLjcxMSAwLjAxNTYyNSAxMi40MTQgMC4wMTU2MjVDOS43MDU3NyAwLjAxNTYyNSA3Ljg1MTY2IDEuNjk3ODMgNy44NTE2NiA0Ljc4NjQ5VjcuNDQ4NzNINC43ODg4MlYxMS4wNTkxSDcuODUxNjZWMjAuMzIwM0gxMS41MTQ2WiIgZmlsbD0iIzRGNEY0RiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE5Ljk1MzIiIGhlaWdodD0iMjAuMzA0NyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wMTU2MjUpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-linked-black.fdae3fe.svg";

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODQ1NzAzIDAuMDE1NjI1VjIwLjMyMDNIMjAuNzk4OVYwLjAxNTYyNUgwLjg0NTcwM1pNMTIuNDc3NSAxMS4wMjIyQzEyLjEzNjMgMTMuMzAzMSAxMC40NjUyIDE0LjYxMDcgOC4zMDE2OCAxNC42MTA3QzUuODcwMzcgMTQuNjEwNyAzLjg5OTIxIDEyLjYwNDggMy44OTkyMSAxMC4xMzA3QzMuODk5MjEgNy42NTcxNyA1Ljg3MDM3IDUuNjUxMjkgOC4zMDE2OCA1LjY1MTI5QzkuNDc3NzggNS42NTEyOSAxMC41MDgzIDYuMDc4MzkgMTEuMjU4NCA2LjgxOTc3TDkuOTk0OTQgOC4xMDU0N0M5LjU2NzA1IDcuNjY2NzkgOC45ODE1IDcuNDMyOTcgOC4zMDE2OCA3LjQzMjk3QzYuODcwNSA3LjQzMjk3IDUuNzEwMjEgOC42NzQ4NyA1LjcxMDIxIDEwLjEzMDZDNS43MTAyMSAxMS41ODc3IDYuODcwNSAxMi43OTM2IDguMzAxNjggMTIuNzkzNkM5LjUwMTIgMTIuNzkzNiAxMC40MDk2IDEyLjIwMzUgMTAuNjcxNiAxMS4wMjIySDguMzAxNjhWOS4yMjMwN0gxMi40NjY4QzEyLjUxNjggOS41MTI5NCAxMi41NDIxIDkuODE2MzEgMTIuNTQyMSAxMC4xMzA2QzEyLjU0MjEgMTAuNDQyNCAxMi41MTk5IDEwLjczOTQgMTIuNDc3NSAxMS4wMjIyWk0xNy43NjQzIDEwLjQ2NDRIMTYuMjIxN1YxMi4wMzM1SDE1LjEyNlYxMC40NjQ0SDEzLjU4MzNWOS4zNDg2N0gxNS4xMjZWNy43Nzg4OUgxNi4yMjE3VjkuMzQ4NjdIMTcuNzY0M1YxMC40NjQ0WiIgZmlsbD0iIzRGNEY0RiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-pinterest-black.bbd5495.svg";

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyNiAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0zLjk2MzQ0IDMuMzgzNzlDMi4xNTExNiAzLjM4Mzc5IDAuNjgxNjQxIDQuODEzMzUgMC42ODE2NDEgNi41NzYzNlYxNy4xMTE4QzAuNjgxNjQxIDE4Ljg3NDggMi4xNTExNiAyMC4zMDQ0IDMuOTYzNDQgMjAuMzA0NEgyMi4zNDE1QzI0LjE1MzggMjAuMzA0NCAyNS42MjMyIDE4Ljg3NDggMjUuNjIzMiAxNy4xMTE4VjYuNTc2MzZDMjUuNjIzMiA0LjgxMzM1IDI0LjE1MzggMy4zODM3OSAyMi4zNDE1IDMuMzgzNzlIMy45NjM0NFpNMTEuMTgxMSAxNi4xMzQ3VjcuNTUzNDdMMTYuOTc5IDExLjg0NDFMMTEuMTgxMSAxNi4xMzQ3WiIgZmlsbD0iIzRGNEY0RiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjI0Ljk0MTUiIGhlaWdodD0iMjAuMzA0NyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjgxNjQxKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/quan-ly-tin-nhan.vue?vue&type=template&id=7bd34760&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"managerMessage\" class=\"wrapSection pt-30px pb-80px\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"d-flex\">","</div>",[_vm._ssrNode("<div class=\"boxMessage mr-20px\"><div class=\"wrapGeneral\"><div class=\"search-top d-flex\"><input type=\"text\" placeholder=\"Tìm kiếm\" class=\"f-12\"> <div class=\"button\">Tìm kiếm</div></div> <div class=\"general d-flex\"><div"+(_vm._ssrClass("item cursor-pointer f-13",_vm.typeRoom == 1 ? 'active' : ''))+">\n                                        Tất cả tin nhắn\n                                    </div> <div"+(_vm._ssrClass("item cursor-pointer f-13",_vm.typeRoom == 2 ? 'active' : ''))+">\n                                        Tin chưa đọc (<span>2</span>)\n                                    </div> <div"+(_vm._ssrClass("item cursor-pointer f-13",_vm.typeRoom == 3 ? 'active' : ''))+">\n                                        Hỗ trợ (<span>2</span>)\n                                    </div></div></div> "+((_vm.listMess)?("<div class=\"wrapMessage\">"+(_vm._ssrList((_vm.listMess),function(item,i){return ("<div"+(_vm._ssrClass("messageItem d-flex  cursor-pointer",(_vm.currentRoom && _vm.currentRoom._id == item._id) ? 'active' :''))+">"+((_vm.findUserChat(item.users).photo)?("<img"+(_vm._ssrAttr("src",_vm.findUserChat(item.users).photo))+" alt class=\"header__cart-img\">"):("<div class=\"not-avatar\"><span>"+_vm._ssrEscape(_vm._s(_vm.findUserChat(item.users).name.slice(0,1).toUpperCase()))+"</span></div>"))+" <div class=\"content\"><div class=\"top d-flex\"><div class=\"company f-12\">"+_vm._ssrEscape("\n                                                "+_vm._s(item.title)+"\n                                            ")+"</div> <div class=\"time f-11\">"+_vm._ssrEscape(_vm._s(_vm.$moment(item.createdDate).format('hh:mm A')))+"</div></div> <div class=\"bottom d-flex\"><div class=\"content-message f-12\">"+_vm._ssrEscape("\n                                               "+_vm._s(item.message)+"\n                                            ")+"</div></div></div></div>")}))+" <div class=\"line\"></div></div>"):"<!---->")+"</div> "),(_vm.typeRoom == 1 || _vm.typeRoom == 2)?[(_vm.currentRoom)?_vm._ssrNode("<div class=\"contentWrap\">","</div>",[_vm._ssrNode("<div class=\"contentTop d-flex\"><div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.currentRoom.title))+"</div> <div class=\"wrapDate\"><img"+(_vm._ssrAttr("src",__webpack_require__(325)))+" alt> <div class=\"date ml-20px f-12\">Đăng ngày  <span>"+_vm._ssrEscape(_vm._s(_vm.$moment(_vm.currentRoom.createdDate).format('DD/MM/YYYY')))+"</span></div></div></div> "+((_vm.listChatDetail)?("<div"+(_vm._ssrClass("message mt-25px",_vm.arrFile.length ? 'fixHeight' :''))+">"+(_vm._ssrList((_vm.listChatDetail),function(item,i){return ("<div><div class=\"dateMessage\">"+_vm._ssrEscape(_vm._s(_vm.$moment(item.createdDate).format('DD/MM/YYYY, hh:mm A')))+"</div> "+((_vm.$auth && _vm.$auth.user)?(((_vm.$auth.user._id != item.user._id)?("<div class=\"send d-flex\">"+((item.user.photo)?("<img"+(_vm._ssrAttr("src",item.user.photo))+" alt>"):("<div class=\"not-avatar mr-15px\"><span>"+_vm._ssrEscape(_vm._s(item.user.name.slice(0,1).toUpperCase()))+"</span></div>"))+" <div class=\"d-flex flex-column\"><div class=\"contentSend\">"+_vm._ssrEscape("\n                                                        "+_vm._s(item.message)+"\n                                                        ")+"<br> "+((item.attachments)?((_vm._ssrList((item.attachments),function(file,idx){return ("<div class=\"mt-5px cursor-pointer\"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(_vm.spliceURLFile(file,'--'))))+"</span> <span class=\"f-11\">"+_vm._ssrEscape(_vm._s(_vm.spliceURLFile(file,'--')))+"</span></div>")}))):"<!---->")+"</div></div></div>"):("<div class=\"receive d-flex\"><div class=\"d-flex flex-column\"><div class=\"contentReceive\">"+_vm._ssrEscape("\n                                                        "+_vm._s(item.message)+"\n                                                        ")+"<br> "+((item.attachments)?((_vm._ssrList((item.attachments),function(file,idx){return ("<div class=\"mt-5px cursor-pointer\"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(_vm.spliceURLFile(file,'--'))))+"</span> <span class=\"f-11\">"+_vm._ssrEscape(_vm._s(_vm.spliceURLFile(file,'--')))+"</span></div>")}))):"<!---->")+"</div></div> "+((item.user.photo)?("<img"+(_vm._ssrAttr("src",item.user.photo))+" alt>"):("<div class=\"not-avatar ml-15px\"><span>"+_vm._ssrEscape(_vm._s(item.user.name.slice(0,1).toUpperCase()))+"</span></div>"))+"</div>"))):"<!---->")+"</div>")}))+"</div>"):"<!---->")+" "),_vm._ssrNode("<form class=\"wrapFill d-flex\">","</form>",[_vm._ssrNode("<input type=\"text\" placeholder=\"Soạn tin nhắn...\""+(_vm._ssrAttr("value",(_vm.objMessage.message)))+"> <img"+(_vm._ssrAttr("src",__webpack_require__(367)))+" alt> "),_c('InputFile',{attrs:{"accept":_vm.accepFile,"isChat":true,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}}),_vm._ssrNode(" <button type=\"submit\" class=\"sending\">Gửi tin nhắn</button>")],2),_vm._ssrNode(" "+((_vm.arrFile.length)?("<div><div class=\"listFile\">"+(_vm._ssrList((_vm.arrFile),function(item,idx){return ("<p class=\"f-11 text-main mr-10px item-file\"><span class=\"f-11 mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                                                    "+_vm._s(item.name)+"\n                                                    ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))+"</div></div>"):"<!---->"))],2):_vm._e()]:_vm._ssrNode(((_vm.currentRoom)?("<div class=\"contentWrap\"><div class=\"contentTop d-flex\">"+((_vm.typeSupport == 1)?("<div class=\"title titleSupport\">Phạm Yên vừa gửi tin nhắn cho bạn</div>"):"<!---->")+" "+((_vm.typeSupport == 2)?("<div class=\"title titleSupport\">Phạm Yên vừa cập nhật thông tin dự án <span class=\"text-main\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>"):"<!---->")+" "+((_vm.typeSupport == 3)?("<div class=\"title titleSupport\">Phạm Yên mời bạn khảo sát dự án  <span class=\"text-main\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>"):"<!---->")+" "+((_vm.typeSupport == 4)?("<div class=\"title titleSupport\">Phạm Yên yêu cầu thương lượng dự án <span class=\"text-main\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>"):"<!---->")+" "+((_vm.typeSupport == 5)?("<div class=\"title titleSupport\">Phạm Yên chọn bạn thi công dự án  <span class=\"text-main\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>"):"<!---->")+" "+((_vm.typeSupport == 6)?("<div class=\"title titleSupport\">Phạm Yên xác nhận thanh toán cho dự án  <span class=\"text-main\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>"):"<!---->")+" "+((_vm.typeSupport == 7)?("<div class=\"title titleSupport\">Phạm Yên vừa đánh giá chất lượng thi công dự án <span class=\"text-main\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>"):"<!---->")+" "+((_vm.typeSupport == 8)?("<div class=\"title titleSupport\">Phạm Yên vừa kết thúc dự án <span class=\"text-main\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>"):"<!---->")+" <div class=\"wrapDate\"><img"+(_vm._ssrAttr("src",__webpack_require__(325)))+" alt> <div class=\"date ml-20px f-12\">Đăng ngày  <span>"+_vm._ssrEscape(_vm._s(_vm.$moment(_vm.currentRoom.createdDate).format('DD/MM/YYYY')))+"</span></div></div></div> "+((_vm.listChatDetail)?("<div class=\"message isSuuport mt-25px px-25px\">"+((_vm.typeSupport == 1)?("<span class=\"f-13 main-black\">Chào bạn,</span> <br> <span class=\"f-13 main-black\">\n                                            Khách hàng <span class=\"f-13 text-main\">Phạm Yên</span> vừa gửi tin nhắn cho bạn về dự án <span class=\"text-main\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span> Bạn sẽ tốn <span class=\"text-main\"> 5 Tokens </span> nếu mở tin nhắn. <span class=\"main-black font-weight-bold\"> Lưu ý</span>, đây là chi phí thanh toán một lần duy nhất khi lần đầu bạn làm việc với khách hàng.\n                                        </span> <div class=\"btn-project\"><span>Xem tin nhắn</span></div> <span class=\"f-13 main-black\">Chân thành cám ơn, </span> <br> <span class=\"f-13 main-black\"> Đội ngũ <span class=\"text-main\">HomAid</span>,</span>"):"<!---->")+" "+((_vm.typeSupport == 2)?("<span class=\"f-13 main-black\">Chào bạn,</span> <br> <span class=\"f-13 main-black\">\n                                            Khách hàng <span class=\"f-13 text-main\">Phạm Yên</span> vừa cập nhật thông tin dự án <span class=\"f-13 text-main font-weight-bold\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span></span> <div class=\"btn-project\"><span>Xem dự án</span></div> <span class=\"f-13 main-black\">Chân thành cám ơn, </span> <br> <span class=\"f-13 main-black\"> Đội ngũ <span class=\"text-main\">HomAid</span>,</span>"):"<!---->")+" "+((_vm.typeSupport == 3)?("<span class=\"f-13 main-black\">Chào bạn,</span> <br> <span class=\"f-13 main-black\">\n                                            Khách hàng <span class=\"f-13 text-main\">Phạm Yên</span>  mời bạn tham gia khảo sát và cập nhật báo giá dự án<span class=\"f-13 text-main font-weight-bold\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span></span> <div class=\"btn-project\"><span>Xem yêu cầu khảo sát</span></div> <span class=\"f-13 main-black\">Chân thành cám ơn, </span> <br> <span class=\"f-13 main-black\"> Đội ngũ <span class=\"text-main\">HomAid</span>,</span>"):"<!---->")+" "+((_vm.typeSupport == 4)?("<span class=\"f-13 main-black\">Chào bạn,</span> <br> <span class=\"f-13 main-black\">\n                                            Khách hàng <span class=\"f-13 text-main\">Phạm Yên</span> vừa gửi yêu cầu thượng lượng cho dự án <span class=\"f-13 text-main font-weight-bold\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span></span> <div class=\"btn-project\"><span>Xem yêu cầu thương lượng</span></div> <span class=\"f-13 main-black\">Chân thành cám ơn, </span> <br> <span class=\"f-13 main-black\"> Đội ngũ <span class=\"text-main\">HomAid</span>,</span>"):"<!---->")+" "+((_vm.typeSupport == 5)?("<span class=\"f-13 main-black\">Chào bạn,</span> <br> <span class=\"f-13 main-black\">\n                                            Khách hàng <span class=\"f-13 text-main\">Phạm Yên</span> vừa chọn bạn làm đơn vị thi công cho dự án <span class=\"f-13 text-main font-weight-bold\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span></span> <div class=\"btn-project\"><span>Xem dự án</span></div> <span class=\"f-13 main-black\">Chân thành cám ơn, </span> <br> <span class=\"f-13 main-black\"> Đội ngũ <span class=\"text-main\">HomAid</span>,</span>"):"<!---->")+" "+((_vm.typeSupport == 6)?("<span class=\"f-13 main-black\">Chào bạn,</span> <br> <span class=\"f-13 main-black\">\n                                            Khách hàng <span class=\"f-13 text-main\">Phạm Yên</span> vừa xác nhận đã thanh toán theo yêu cầu Thanh Toán Đợt 1 cho dự án  <span class=\"f-13 text-main font-weight-bold\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span></span> <span class=\"f-13 main-black\">Chân thành cám ơn, </span> <br> <span class=\"f-13 main-black\"> Đội ngũ <span class=\"text-main\">HomAid</span>,</span>"):"<!---->")+" "+((_vm.typeSupport == 7)?("<span class=\"f-13 main-black\">Chào bạn,</span> <br> <span class=\"f-13 main-black\">\n                                            Khách hàng <span class=\"f-13 text-main\">Phạm Yên</span> vừa đánh giá chất lượng thi công theo báo cáo tiến độ thi công Tuần 1 cho dự án   <span class=\"f-13 text-main font-weight-bold\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span></span> <div class=\"btn-project\"><span>Xem đánh giá</span></div> <span class=\"f-13 main-black\">Chân thành cám ơn, </span> <br> <span class=\"f-13 main-black\"> Đội ngũ <span class=\"text-main\">HomAid</span>,</span>"):"<!---->")+" "+((_vm.typeSupport == 8)?("<span class=\"f-13 main-black\">Chào bạn,</span> <br> <span class=\"f-13 main-black\">\n                                            Khách hàng <span class=\"f-13 text-main\">Phạm Yên</span> vừa kết thúc và hoàn tất đánh giá chất lượng thi công cho dự án <span class=\"f-13 text-main font-weight-bold\"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span></span> <div class=\"btn-project\"><span>Xem đánh giá</span></div> <span class=\"f-13 main-black\">Chân thành cám ơn, </span> <br> <span class=\"f-13 main-black\"> Đội ngũ <span class=\"text-main\">HomAid</span>,</span>"):"<!---->")+"</div>"):"<!---->")+" <div class=\"content-bottom\"><div class=\"cover-bttom\"><div class=\"group-icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(368)))+"> <img"+(_vm._ssrAttr("src",__webpack_require__(369)))+"> <img"+(_vm._ssrAttr("src",__webpack_require__(370)))+"> <img"+(_vm._ssrAttr("src",__webpack_require__(371)))+"> <img"+(_vm._ssrAttr("src",__webpack_require__(372)))+"></div> <p class=\"coppyright\">Copyright © 2017 Epoint. All rights reserved.</p> <div class=\"group-address\"><p class=\"font-weight-bold\">Địa chỉ văn phòng</p> <p>873 Huỳnh Tấn Phát, Q.7, TPHCM</p></div></div></div></div>"):"<!---->"))],2)])])])]),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/member/quan-ly-tin-nhan.vue?vue&type=template&id=7bd34760&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/quan-ly-tin-nhan.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var quan_ly_tin_nhanvue_type_script_lang_js_ = ({middleware:'auth',components:{},data(){return{objMessage:{category:[],attachments:[]},accepFile:["png","jpg","tiff","pdf","xls","doc","ppt","zip","rar"],currentRoom:null,listMess:null,listChatDetail:null,arrFile:[],typeRoom:1,//1,2: chat; 3:support,
typeSupport:3};},mounted(){this.getListMess();},methods:{setTypeRoom(type){this.typeRoom=type;},getListMess(){this.loader();this.$get('member/rooms').then(res=>{this.listMess=res.data;this.loader(0);}).catch(err=>{this.loader(0);});},getDetailMess(room){this.currentRoom=room;console.log('currentRoom',this.currentRoom);this.$get(`member/room/${room._id}`).then(res=>{this.listChatDetail=res.data;}).catch(err=>{console.log(err);});},async sendMessage(){try{var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objMessage,room:this.currentRoom._id,attachments:arrFile};let res=await this.$post(`member/message`,obj);this.objMessage.message=null;this.arrFile=[];this.getListMess();this.getDetailMess(this.currentRoom);}catch(err){console.log(err);}},findUserChat(arr){var res=arr.filter(item=>item._id!=this.$auth.user._id);return res[0];},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);}}});
// CONCATENATED MODULE: ./pages/member/quan-ly-tin-nhan.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_quan_ly_tin_nhanvue_type_script_lang_js_ = (quan_ly_tin_nhanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/member/quan-ly-tin-nhan.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_quan_ly_tin_nhanvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0685feaa"
  
)

/* harmony default export */ var quan_ly_tin_nhan = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(23).default,InputFile: __webpack_require__(213).default,Footer: __webpack_require__(18).default})


/***/ })

};;
//# sourceMappingURL=quan-ly-tin-nhan.js.map