<template>
    <Modal ref="modalLienForm" id="modal-cotact-form-submit">
      <template v-slot:content>
        <div class="modal-contact formCore">
          <div class="content">
            <p class="title f-20 mb-10px">Gửi tin nhắn cho <span>Công ty cổ phần Epoint</span> </p>
            <p class="f-13 description">Vui lòng điền vào thông tin dưới đây. Bạn sẽ tốn <span>3 Tokens</span> khi gửi tin nhắn cho <span>Công ty cổ phần Epoint</span> </p>
            <form @submit.prevent="getForm()" class="group-content mt-36px">
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 ">
                      Dịch vụ yêu cầu
                      <span style="color:red">*</span>
                  </label>
                  <b-form-select class="form-control col-md-9 col-sm-12" v-model="objResearch.category" :options="options"></b-form-select>
              </div>
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 ">
                      Soạn tin nhắn
                      <span style="color:red">*</span>
                  </label>
                  <textarea required id="customPlaceholder" class="form-control col-md-9 col-sm-12" rows="5"
                      placeholder=
                      " 1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn \n \n 2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất. \n \n 3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác"
                  ></textarea>
              </div>
              <div class="form-group row">
                  <label class="f-13  col-md-3 col-sm-12 mt-1">
                      Tài liệu đính kèm
                  </label>
                  <div class="custom-btn col-md-9 col-sm-12 d-flex">
                      <div class="btn-upload">
                          <img  src="@/assets/img/icon-upload.png"/>
                          <span>Thêm tài liệu</span>
                      </div>
                      <span class="type-upload">png, jpg, tiff, pdf, xls, doc, ppt, zip, rar</span>
                  </div>
              </div>
                <div class="form-group mb-50px group-checkbox">
                    <b-form-checkbox
                        v-model="objResearch.status"
                        name="checkbox-agree"
                        required
                        >
                        Tôi đồng ý với <span>điều khoản</span> của Econs <span style="color:red">*</span>
                    </b-form-checkbox>
                </div>
                <div class="group-btn row">
                    <div class="col-md-12">
                        <button type="submit" class="btn-now">
                        GỬI TIN NHẮN
                        </button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </template>
    </Modal>
</template>

<script>
export default {
  data(){
    return{
        objResearch:{
            category:1,
            status:false
        },
        options: this.getCategory(),
        date: new Date(),
    }
    },
    mounted(){
        var textAreas = document.getElementsByTagName('textarea');
        Array.prototype.forEach.call(textAreas, function(elem) {
            elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
        });
    },
    methods:{
        show() {
            this.$refs.modalLienForm.showModal();
        },
        hide(){
            this.$refs.modalLienForm.hideModal()
        },
    }
}
</script>