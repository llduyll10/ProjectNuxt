(window.webpackJsonp=window.webpackJsonp||[]).push([[5,27,28,60,61,62,63],{421:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xMi43NjAxIDE0LjQzNDRDMTIuMzExOSAxMS40MTkzIDExLjE0MjkgOC40NDgxOCA4LjM4NDg0IDcuNDk1NEM5LjQ1NjcyIDYuODI3ODMgMTAuMTY4MiA1LjYzOTk5IDEwLjE2ODIgNC4yODI5MUMxMC4xNjgyIDIuMTk1NTcgOC40NzU3MyAwLjUgNi4zODUyNiAwLjVDNC4yOTQ3OSAwLjUgMi42MDIzNSAyLjE5MjQ0IDIuNjAyMzUgNC4yODI5MUMyLjYwMjM1IDUuNjM2ODYgMy4zMTY5NCA2LjgyNzgzIDQuMzg1NjggNy40OTU0QzEuNjI3NjQgOC40NDgxOCAwLjQ1NTQ2NiAxMS40MTkzIDAuMDEwNDE4MyAxNC40MzQ0Qy0wLjA3NDIwMzUgMTQuOTk1NCAwLjM2NzcxIDE1LjUgMC45MzQ5OSAxNS41SDExLjgyOTNDMTIuNDAyOCAxNS41IDEyLjg0NDcgMTQuOTk1NCAxMi43NjAxIDE0LjQzNDRaTTQuMDI4MzkgNC4yODI5MUM0LjAyODM5IDIuOTgyMjQgNS4wODc3MyAxLjkyMjkgNi4zODg0IDEuOTIyOUM2LjY5ODY4IDEuOTIyOSA2Ljk1MjU0IDIuMTc2NzcgNi45NTI1NCAyLjQ4NzA1QzYuOTUyNTQgMi43OTczMyA2LjY5ODY4IDMuMDUxMTkgNi4zODg0IDMuMDUxMTlDNS43MDgyOSAzLjA1MTE5IDUuMTU2NjggMy42MDI4IDUuMTU2NjggNC4yODI5MUM1LjE1NjY4IDQuNTkzMTkgNC45MDI4MSA0Ljg0NzA1IDQuNTkyNTMgNC44NDcwNUM0LjI3OTEyIDQuODQ3MDUgNC4wMjgzOSA0LjU5NjMyIDQuMDI4MzkgNC4yODI5MVoiIGZpbGw9IiM0RjRGNEYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},443:function(t,n,e){"use strict";e.r(n);var c={data:function(){return{bankSelected:1,options:[{value:1,text:"NGÂN HÀNG THƯƠNG MẠI TECHCOMBANK, CN QUẬN 7"}]}},methods:{show:function(){this.$refs.modalLien.showModal()},hide:function(){this.$refs.modalLien.hideModal()}}},o=e(41),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Modal",{ref:"modalLien",attrs:{id:"modal-select-bank"},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"modal-contact"},[e("div",{staticClass:"top border-0"},[e("div",{staticClass:"title f-20 text-main"},[t._v("\n                Chuyển khoản ngân hàng\n            ")]),t._v(" "),e("div",{staticClass:"sub f-13"},[t._v("\n                Vui lòng ghi rõ gói "),e("span",{staticClass:"f-bold"},[t._v("Token")]),t._v(" bạn chọn và ID tài khoản "),e("span",[t._v("0123456")]),t._v(" trong nội dung chuyển khoản\n            ")])]),t._v(" "),e("div",{staticClass:"form-group mt-16px mb-24px"},[e("b-form-select",{staticClass:"form-control col-12",attrs:{options:t.options},model:{value:t.bankSelected,callback:function(n){t.bankSelected=n},expression:"bankSelected"}})],1),t._v(" "),e("div",{staticClass:"center border-0 p-0"},[e("div",{staticClass:"name-line"},[e("div",{staticClass:"label"},[t._v("Chủ tài khoản::")]),t._v(" "),e("div",{staticClass:"name"},[t._v("BÙI KIM LONG")])]),t._v(" "),e("div",{staticClass:"phone-line"},[e("div",{staticClass:"label"},[t._v("Số tài khoản:")]),t._v(" "),e("div",{staticClass:"phone"},[t._v("12345678910")])])]),t._v(" "),e("div",{staticClass:"bottom btn-now pt-16px"},[e("div",{staticClass:"submit f-16"},[t._v("OK, TÔI ĐỒNG Ý!")])])])]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Modal:e(253).default})},444:function(t,n,e){"use strict";e.r(n);e(9),e(16);var c={data:function(){return{options:[{value:0,text:"Chọn ngân hàng của bạn"}]}},mounted:function(){var t=document.getElementsByTagName("textarea");Array.prototype.forEach.call(t,(function(t){t.placeholder=t.placeholder.replace(/\\n/g,"\n")}))},methods:{show:function(){this.$refs.modalLienForm.showModal()},hide:function(){this.$refs.modalLienForm.hideModal()}}},o=e(41),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Modal",{ref:"modalLienForm",attrs:{id:"modal-cotact-form-submit"},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"modal-contact formCore"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title f-20 mb-10px"},[t._v("Thêm tài khoản ngân hàng của bạn")]),t._v(" "),e("form",{staticClass:"group-content mt-36px"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"f-13 col-md-3 col-sm-12 "},[t._v("\n                  Tên ngân hàng"),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),e("b-form-select",{staticClass:"form-control col-md-9 col-sm-12",attrs:{value:0,options:t.options}})],1),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"f-13 col-md-3 col-sm-12 "},[t._v("\n                  Tên chủ tài khoản\n                  "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control col-md-9 col-sm-12",attrs:{type:"text",required:"",placeholder:"Nhập tên chủ tài khoản"}})]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"f-13 col-md-3 col-sm-12 "},[t._v("\n                  Số tài khoản\n                  "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control col-md-9 col-sm-12",attrs:{type:"text",required:"",placeholder:"Nhập số tài khoản"}})]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"f-13 col-md-3 col-sm-12 "},[t._v("\n                  Địa chỉ\n                  "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control col-md-9 col-sm-12",attrs:{type:"text",required:"",placeholder:"Nhập địa chỉ"}})]),t._v(" "),e("div",{staticClass:"group-btn row mt-40px"},[e("div",{staticClass:"col-md-12 p-0"},[e("button",{staticClass:"btn-now",attrs:{type:"submit"}},[t._v("\n                    THÊM TÀI KHOẢN\n                    ")])])])])])])]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Modal:e(253).default})},467:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDguNjAzNTJWMi4zOTY0OEw2LjU1MjA1IDUuNUwxMCA4LjYwMzUyWiIgZmlsbD0iIzRGNEY0RiIvPgo8cGF0aCBkPSJNNS4wMDAwMSA2Ljg5NzMxTDQuMDE1NiA2LjAxMTIzTDAuNTY3NjI3IDkuMTE0NzVIOS40MzIzOUw1Ljk4NDQxIDYuMDExMjNMNS4wMDAwMSA2Ljg5NzMxWiIgZmlsbD0iIzRGNEY0RiIvPgo8cGF0aCBkPSJNOS40MzIzOSAxLjg4NTc0SDAuNTY3NjI3TDUuMDAwMDEgNS44NzUzNEw5LjQzMjM5IDEuODg1NzRaIiBmaWxsPSIjNEY0RjRGIi8+CjxwYXRoIGQ9Ik0wIDIuMzk2NDhWOC42MDM1MkwzLjQ0Nzk1IDUuNUwwIDIuMzk2NDhaIiBmaWxsPSIjNEY0RjRGIi8+Cjwvc3ZnPgo="},468:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAfCAYAAAB3XZQBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM7SURBVHgB7ZfPaxNBFMe/u5s2P0xDY5IiWmzJoZrGEkWKKYUGCop4EI+9qUWKBz3pyYP/gIjiRRBCwYMnzUVU7C1WUpFcKkF6aCnWSkjT0DTZ/Oj+aHxJoG1+bbLbojnkAw9mZ97ufmfmzcwboEMH1TB16ixk02Qn0D6sk82SZZo5viIrtKE9rRbK1hF/Bu3JxeoKFkcI06y9mYPKz+twSK7CgDsww4tuKjHI0wx/xQ5eU3h+pKfhUzrcv2LG9QtG2MwsdikAIusS/EEeb0JZpPMFaKXeWATJJtCEXpo0P6zkaGjo8300ifFpC/T6+hP8a1PGjWebWIpKaIEvZL6DFZrCpvhSAHZF4caRNK4NZ2BeTjb0GbBzeP/QDmeftgDQJP4eejCCrobtnFmCyZMulzdz4DayDX37rRxe3uqFFjSJv41jiu3Gcxkw3H4sc795Rf+Js3qcH+iCWlSLH6I13g9O0UdnEyp/wotgdmTFdy45u6EW1eIHWtigOItYU8dIu4rvDDqUB6QeqsXz2G3qUxDVR+N2Tv2WqfovPyBChvKPpERV/HbR/m5UnrHIugi1qBafIeFBOoSUyK+YKp5lG22pbOPjNbol49NiHmrRtNs8wjayCuEjrBkhbZQXYKGbhTRoUfze8zkepm71uYMm8SuQ8IA6ICiET2r+OORsF0S3DQV948X45EMaLz7zmtIEzYnZWxr7y4jjJ+rH6jwvYXyOgX9RhCDVCvtDoXJ3dguP36WgFc25zUFcdNqOUmLWR2MRo+VcXBNr2N/X7T0sxof0cJ3UIScU8G1ZwOKaiLyoarRrchs0EN/0cqDT6Qocx+2VD7Z5PJ6KZ4Zh9sosy1bUF83n87VyGQlWC9WUEbndbkxNTUGWZSQSCZB4WK1WpFIpxGIxkHjKJPWYmZlBMBiEy+VCPB5HOBzG2NgYTCYTotEokskkHA4HqEMlP7VoEi9JEgKBAJxOZ0lIsRNFAZFIBJOTkwiFQrBYLCVxq6urEAQBuRwlaBxX6pzBYADP81hYWIDX6y0LoQEofvewtBQ2/8FqpuZIr4H/mnriw2hPlqor6m2VxWT9JtlptA8xMj+Z9kOhQ4cyfwEmemSjUnBvDwAAAABJRU5ErkJggg=="},469:function(t,n,e){t.exports=e.p+"img/visa.8462c21.png"},470:function(t,n,e){t.exports=e.p+"img/icon-zalopay.3cf7c06.svg"},471:function(t,n,e){t.exports=e.p+"img/momo.37568ab.png"},472:function(t,n,e){t.exports=e.p+"img/credit1.403ddb8.svg"},498:function(t,n,e){"use strict";e.r(n);var c={components:{},data:function(){return{tokenPacks:[{coin:10,price:15e4,save:0,should:!1},{coin:25,price:3e5,save:20,should:!1},{coin:70,price:735e3,save:30,should:!0},{coin:150,price:135e4,save:40,should:!1},{coin:400,price:3e6,save:50,should:!1}],payWays:[{icon:"card",text:"Thẻ quốc tế",subText:"Ngân hàng nước ngoài phát hành"},{icon:"vn_card",text:"Thẻ quốc tế",subText:"Ngân hàng Việt Nam phát hành"},{icon:"zalo",text:"Thanh toán qua ZaloPay",subText:""},{icon:"momo",text:"Thanh toán qua MOMO",subText:""}],objSelect:{},activeCombo:null}},mounted:function(){this.activePackage(2)},methods:{payment:function(){var t=this;this.loader(),this.$post("member/coin",this.objSelect).then((function(n){t.$auth.fetchUser(),t.loader(0),t.$notify({group:"all",text:"Thanh toán thành công",type:"dark"})})).catch((function(n){t.loader(0),console.log(n)}))},activePackage:function(t){this.activeCombo=t,this.objSelect={coin:this.tokenPacks[t].coin,price:this.tokenPacks[t].price}}}},o=e(41),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"editProfileInfoWrap buyTokenPageWrap"},[c("form",{on:{submit:function(n){return n.preventDefault(),t.payment()}}},[c("div",{staticClass:"mb-24px borderWrap"},[c("div",{staticClass:"f-20 f-bold text-main mb-15px"},[t._v("\n          Nạp thêm Token\n      ")]),t._v(" "),t._m(0),t._v(" "),c("div",{staticClass:"mb-15px"},[c("div",{staticClass:"tokenPacksWrap"},t._l(t.tokenPacks,(function(n,i){return c("div",{key:i,staticClass:"tokenItem cursor-pointer",class:[n.should?"shouldBuy":"",t.activeCombo==i?"activeCombo":""],on:{click:function(n){return t.activePackage(i)}}},[c("div",{staticClass:"tokenItemTop"},[n.should?c("div",{staticClass:"shouldInfo"},[t._v("\n                          Gói nên mua\n                      ")]):t._e(),t._v(" "),c("div",{staticClass:"tokenVal"},[c("span",{staticClass:"tokenNum"},[t._v(t._s(n.coin))]),t._v(" Token\n                      ")]),t._v(" "),c("div",{staticClass:"priceVal"},[c("span",{staticClass:"priceNum"},[t._v(t._s(t.formatVnd(n.price)))]),t._v(" VNĐ\n                      ")])]),t._v(" "),c("div",{staticClass:"tokenItemBot"},[c("div",{staticClass:"tokenPriceVal"},[t._v("\n                          "+t._s(t.formatVnd(n.price/n.coin))+" VNĐ/Token\n                      ")]),t._v(" "),c("div",{staticClass:"saveVal"},[n.save?c("span",[t._v("Tiết kiệm "+t._s(n.save)+"%")]):t._e()]),t._v(" "),c("div",{staticClass:"buyBtn"},[c("button",{staticClass:"btn btn-main",attrs:{disabled:t.activeCombo==i,type:"button"}},[t._v("\n                              "+t._s(t.activeCombo==i?"Đang chọn":"Mua ngay")+"\n                          ")])])])])})),0)])]),t._v(" "),c("div",{staticClass:"mb-24px borderWrap"},[c("div",{staticClass:"f-20 f-bold text-main mb-15px"},[t._v("\n          Thanh toán\n      ")]),t._v(" "),c("div",{staticClass:"row f-12 mb-20px"},[c("div",{staticClass:"col-12 col-lg-5"},[t._m(1),t._v(" "),c("div",{staticClass:"inforBorderWrap"},[c("div",{staticClass:"flex-align-center mb-5px text-black "},[c("img",{staticClass:" mr-5px",attrs:{src:e(421),alt:"",width:"15px",height:"15px"}}),t._v(" "),c("div",{staticClass:"mr-20px f-12"},[t._v(" "+t._s(t.$auth.user.name))])]),t._v(" "),c("div",{staticClass:"flex-align-center text-black f-12"},[c("img",{staticClass:" mr-5px",attrs:{src:e(467),alt:"",width:"15px",height:"15px"}}),t._v("\n                      "+t._s(t.$auth.user.email)+"\n                  ")])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])]),t._v(" "),c("div",{staticClass:"mb-24px"},[t._m(4),t._v(" "),c("div",{staticClass:"row mt-20px"},t._l(t.payWays,(function(n,i){return c("div",{key:i,staticClass:"col-12 col-md-3"},[c("div",{staticClass:"paymentItem"},[c("div",{staticClass:"flex-center flex-column"},[c("div",{staticClass:"payIcon"},["card"===n.icon||"vn_card"===n.icon?c("img",{attrs:{src:e(468),alt:""}}):t._e(),t._v(" "),"card"===n.icon||"vn_card"===n.icon?c("img",{attrs:{src:e(469),alt:""}}):t._e(),t._v(" "),"zalo"===n.icon?c("img",{attrs:{src:e(470),alt:""}}):t._e(),t._v(" "),"momo"===n.icon?c("img",{attrs:{src:e(471),alt:""}}):t._e()]),t._v(" "),c("div",{staticClass:"payText"},[t._v("\n                          "+t._s(n.text)+"\n                      ")]),t._v(" "),n.subText?c("div",{staticClass:"paySubText"},[t._v("\n                          "+t._s(n.subText)+"\n                      ")]):t._e()]),t._v(" "),c("div",{staticClass:"payBtn"},[c("button",{staticClass:"btn btn-main",attrs:{type:"submit"},on:{click:function(e){t.objSelect.method=n.icon}}},[c("span",[t._v("Thanh toán")])])])])])})),0),t._v(" "),t._m(5)])]),t._v(" "),c("PopupBankTransferSelect",{ref:"refBankTransferSelect"})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-24px text-black f-12"},[e("span",{staticClass:"f-bold text-main"},[t._v("Token")]),t._v(" được dùng để "),e("span",{staticClass:"f-bold text-main"},[t._v("Chào giá dự án")]),t._v(" và "),e("span",{staticClass:"f-bold text-main"},[t._v("Liên hệ trực tiếp")]),t._v(" với chủ đầu tư.  Chọn mua gói "),e("span",{staticClass:"f-bold text-main"},[t._v("Token")]),t._v(" dưới đây, mua càng nhiều thì càng tiết kiệm.\n      ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fieldLabel"},[t._v("1. Thông tin khách hàng "),e("span",{staticClass:"dot"},[t._v("*")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-15px"},[e("div",{staticClass:"gr-check flex-align-center"},[e("input",{staticClass:"mr-5px",attrs:{type:"checkbox"}}),t._v(" "),e("span",[t._v("Yêu cầu xuất hoá đơn")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-12 col-lg-7"},[e("div",{staticClass:"fieldLabel"},[t._v("2. Điều khoản thanh toán "),e("span",{staticClass:"dot"},[t._v("*")])]),t._v(" "),e("div",{staticClass:"inforBorderWrap policyInfoWrap"},[e("div",[t._v("Xin vui lòng đọc kỹ các điều khoản sau trước khi sử dụng dịch vụ thanh toán trực tuyến. Với việc truy cập vào phần này của vLance.vn, Bạn đã đồng ý với các điều ")])]),t._v(" "),e("div",[e("div",{staticClass:"gr-check flex-align-center"},[e("input",{staticClass:"mr-5px",attrs:{type:"checkbox",required:""}}),t._v(" "),e("span",[t._v("Tôi đồng ý với "),e("span",{staticClass:"text-main"},[t._v("điều khoản")]),t._v(" của Econs"),e("span",{staticClass:"text-red"},[t._v("*")])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fieldLabel d-flex"},[t._v("3. Phương thức thanh toán "),e("span",{staticClass:"dot"},[t._v("*")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:" text-center mt-15px"},[e("p",{staticClass:"mb-0 f-12 text-black"},[t._v("Khi thanh toán bạn đồng ý với "),e("span",{staticClass:"text-main"},[t._v("điều khoản của Econs")])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{PopupBankTransferSelect:e(443).default})},499:function(t,n,e){"use strict";e.r(n);e(10);var c={props:["title"],data:function(){return{listHistory:[],objSearch:{month:(new Date).getMonth()+1,year:(new Date).getFullYear()},optionsMonth:[{id:1,label:"Tháng 1"},{id:2,label:"Tháng 2"},{id:3,label:"Tháng 3"},{id:4,label:"Tháng 4"},{id:5,label:"Tháng 5"},{id:6,label:"Tháng 6"},{id:7,label:"Tháng 7"},{id:8,label:"Tháng 8"},{id:9,label:"Tháng 9"},{id:10,label:"Tháng 10"},{id:11,label:"Tháng 11"},{id:12,label:"Tháng 12"}],optionsYear:[{id:2021,label:"2021"},{id:2022,label:"2022"},{id:2023,label:"2023"},{id:2024,label:"2024"},{id:2025,label:"2025"}]}},mounted:function(){this.getHistory()},methods:{getHistory:function(){var t=this;this.loader();var n="1/".concat(this.objSearch.month,"/").concat(this.objSearch.year),e="?date=".concat(Date.parse(n));this.$get("member/coin"+e).then((function(n){t.listHistory=n.data,t.loader(0)})).catch((function(n){console.log(n),t.loader(0)}))}}},o=e(41),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"manage-project"}},[e("div",{staticClass:"wrap"},[e("h1",{staticClass:"title"},[t._v("Lịch sử giao dịch")]),t._v(" "),e("div",{staticClass:"group-function d-flex"},[e("treeselect",{staticClass:"search-date",attrs:{options:t.optionsMonth,value:t.objSearch.month,placeholder:"Tra theo tháng",clearable:!1},model:{value:t.objSearch.month,callback:function(n){t.$set(t.objSearch,"month",n)},expression:"objSearch.month"}}),t._v(" "),e("treeselect",{staticClass:"search-date",attrs:{options:t.optionsYear,value:t.objSearch.year,placeholder:"Tra theo năm",clearable:!1},model:{value:t.objSearch.year,callback:function(n){t.$set(t.objSearch,"year",n)},expression:"objSearch.year"}}),t._v(" "),e("div",{staticClass:"btn-search",on:{click:function(n){return t.getHistory()}}},[t._v("\n                Tìm kiếm\n            ")])],1)]),t._v(" "),e("div",{staticClass:"wrap pt-0 pb-15px"},[e("span",{staticClass:"text-red f-bold f-14"},[t._v("Tháng "+t._s(t.objSearch.month)+"/"+t._s(t.objSearch.year))])]),t._v(" "),e("table",{staticClass:"table table-history"},[t._m(0),t._v(" "),e("tbody",t._l(t.listHistory,(function(n,c){return e("tr",{key:c,staticClass:"f-12 text-gray"},[e("td",{staticClass:"text-main "},[t._v(t._s(n.number))]),t._v(" "),e("td",[t._v(t._s(t.$moment(n.createdDate).format("DD/MM/YYYY")))]),t._v(" "),e("td",[t._v(t._s(t.formatVnd(n.price))+" VNĐ")]),t._v(" "),e("td",{staticClass:"pl-35px"},[t._v("\n                    Nạp tiền mua Token\n                ")])])})),0)])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Mã số hoá đơn")]),t._v(" "),e("th",{attrs:{scope:"col pl-30px"}},[t._v("Ngày giao dịch")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Số tiền giao dịch")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Nội dung giao dịch")])])])}],!1,null,null,null);n.default=component.exports},500:function(t,n,e){"use strict";e.r(n);var c={props:["title"]},o=e(41),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{attrs:{id:"manage-project"}},[t._m(0),t._v(" "),c("table",{staticClass:"table table-custom"},[t._m(1),t._v(" "),c("tbody",t._l(1,(function(n){return c("tr",{key:n,staticClass:"f-12 text-gray"},[c("td",{staticClass:"text-main"},[t._v("Bùi Kim Long")]),t._v(" "),c("td",[t._v("012345678910")]),t._v(" "),c("td",[t._v("Techcombank, CN Quận 7")]),t._v(" "),c("td",{staticClass:"text-main"},[t._v("Yêu cầu rút tiền")])])})),0)]),t._v(" "),c("div",{staticClass:"wrap pt-0"},[c("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:function(n){return t.$refs.refAddAccount.show()}}},[c("img",{attrs:{src:e(472),alt:""}}),t._v("\n            Thêm tài khoản ngân hàng\n        ")])]),t._v(" "),c("PopupAddBankAccount",{ref:"refAddAccount"})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap pb-0"},[e("h1",{staticClass:"title"},[t._v("Tài khoản ngân hàng")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Tên tài khoản")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Số tài khoản")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Ngân hàng giao dịch")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Yêu cầu khác")])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{PopupAddBankAccount:e(444).default})},501:function(t,n,e){"use strict";e.r(n);var c={},o=e(41),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"buyTokenPageWrap"},[e("div",{staticClass:"f-20 f-bold text-main mb-15px"},[t._v("Yêu cầu rút tiền")]),t._v(" "),e("p",{staticClass:"f-13 text-gray"},[t._v("\n      1. Số tiền tối thiểu mỗi lần rút là 200.000 VNĐ\n    ")]),t._v(" "),e("p",{staticClass:"f-13 text-gray"},[t._v("\n      2. Chi phí rút tiền là 11.000 VNĐ cho mỗi lần rút\n    ")]),t._v(" "),e("p",{staticClass:"f-13 text-gray"},[t._v("\n      3. Yêu cầu rút tiền sẽ được xử lý trong vòng 5 ngày làm việc (không bao\n      gồm ngày lễ, Thứ 7/Chủ Nhật)\n    ")]),t._v(" "),e("p",{staticClass:"f-13 text-gray"},[t._v("\n      4. Bạn có thắc mắc gì, vui lòng liên hệ chúng tôi (+849) 0465-9518 hoặc\n      support@epoint.vn để được hỗ trợ\n    ")]),t._v(" "),e("table",{staticClass:"request-money-table text-center"},[t._m(0),t._v(" "),e("div",{staticClass:"f-12 text-gray flex-center bodyWrap"},[e("div",{staticClass:"bodyItem text-main"},[e("div",{staticClass:"headItem"},[t._v("Số dư tài khoản")]),t._v("\n              "+t._s(t.formatVnd(5e7))+" VNĐ")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"bodyItem text-main"},[e("div",{staticClass:"headItem"},[t._v("Số tiền có thể rút")]),t._v("\n              "+t._s(t.formatVnd(495e5))+" VNĐ\n          ")])])]),t._v(" "),e("button",{staticClass:"btn btn-main pr-20px pl-20px mt-16px",attrs:{type:"button"}},[t._v("\n      Yêu cầu rút\n    ")])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"headWrap flex-center"},[e("div",{staticClass:"headItem"},[t._v("Số dư tài khoản")]),t._v(" "),e("div",{staticClass:"headItem"},[t._v("Số tiền cần rút")]),t._v(" "),e("div",{staticClass:"headItem"},[t._v("Số tiền có thể rút")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bodyItem w-200px"},[e("div",{staticClass:"headItem"},[t._v("Số tiền cần rút")]),t._v(" "),e("div",{staticClass:"input-group  f-13 text-gray"},[e("input",{staticClass:"form-control",attrs:{type:"text"}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text f-13"},[t._v("VNĐ")])])])])}],!1,null,null,null);n.default=component.exports},571:function(t,n,e){"use strict";e.r(n);var c={components:{},data:function(){return{tabs:[{id:"1",text:"Nạp thêm Token"},{id:"2",text:"Lịch sử giao dịch"}],activeTab:this.$nuxt.$route.query.tab}},mounted:function(){},watch:{tabUrl:function(){this.activeTab=this.tabUrl}},computed:{tabUrl:function(){return this.$nuxt.$route.query.tab}},methods:{addQuery:function(t){this.$router.push({path:this.$route.path,query:{tab:t}})}}},o=e(41),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"editProfileInfoWrap"},[e("div",{staticClass:"w-100 flex-align-center tabsWrap"},t._l(t.tabs,(function(n){return e("div",{key:n.id,staticClass:"tabItem flex-align-center",class:{activeTab:t.activeTab===n.id},on:{click:function(e){return t.addQuery(n.id)}}},[e("div",[t._v(t._s(n.text))])])})),0),t._v(" "),"1"===t.activeTab?e("div",{staticClass:"editWrap"},[e("ProfileFinanceBuy")],1):t._e(),t._v(" "),"2"===t.activeTab?e("ProfileFinanceHistory"):t._e(),t._v(" "),"3"===t.activeTab?e("ProfileFinanceBankAccount"):t._e(),t._v(" "),"4"===t.activeTab?e("div",{staticClass:"editWrap"},[e("ProfileFinanceRequest")],1):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ProfileFinanceBuy:e(498).default,ProfileFinanceHistory:e(499).default,ProfileFinanceBankAccount:e(500).default,ProfileFinanceRequest:e(501).default})}}]);