<template>
    <Modal ref="modalLienForm" id="modal-cotact-form-submit">
      <template v-slot:content>
        <div class="modal-contact formCore">
          <div class="content">
            <p class="title f-20 mb-10px">Thêm tài khoản ngân hàng của bạn</p>
            <form class="group-content mt-36px">
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 ">
                      Tên ngân hàng<span style="color:red">*</span>
                  </label>
                  <b-form-select class="form-control col-md-9 col-sm-12" :value="0" :options="options"></b-form-select>
              </div>
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 ">
                      Tên chủ tài khoản
                      <span style="color:red">*</span>
                  </label>
                  <input type="text" required class="form-control col-md-9 col-sm-12" 
                      placeholder="Nhập tên chủ tài khoản"
                  />
              </div>
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 ">
                      Số tài khoản
                      <span style="color:red">*</span>
                  </label>
                  <input type="text" required class="form-control col-md-9 col-sm-12" 
                      placeholder="Nhập số tài khoản"
                  />
              </div>
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 ">
                      Địa chỉ
                      <span style="color:red">*</span>
                  </label>
                  <input type="text" required class="form-control col-md-9 col-sm-12" 
                      placeholder="Nhập địa chỉ"
                  />
              </div>
                <div class="group-btn row mt-40px">
                    <div class="col-md-12 p-0">
                        <button type="submit" class="btn-now">
                        THÊM TÀI KHOẢN
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
        options: [{
            value: 0,
            text: 'Chọn ngân hàng của bạn'
        }],
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