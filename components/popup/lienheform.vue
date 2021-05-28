<template>
    <Modal ref="modalLienForm" id="modal-cotact-form-submit">
      <template v-slot:content>
        <div class="modal-contact formCore">
          <div class="content">
            <p class="title f-20 mb-10px">Gửi tin nhắn cho <span>Công ty cổ phần Epoint</span> </p>
            <p class="f-13 description">Vui lòng điền vào thông tin dưới đây. Bạn sẽ tốn <span>3 Tokens</span> khi gửi tin nhắn cho <span>Công ty cổ phần Epoint</span> </p>
            <form @submit.prevent="sendMessage()" class="group-content mt-36px">
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 ">
                      Dịch vụ yêu cầu
                      <span style="color:red">*</span>
                    </label>
                    <treeselect
                        class="pl-0 pr-0 col-md-9 col-sm-12"
                        :options="options"
                        :disable-branch-nodes="true"
                        :value="objResearch.category"
                        v-model="objResearch.category"
                        :multiple="true"
                        required
                        placeholder="Chọn dịch vụ"
                    />
              </div>
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 ">
                      Soạn tin nhắn
                      <span style="color:red">*</span>
                    </label>
                    <textarea required id="customPlaceholder" class="form-control col-md-9 col-sm-12" rows="5"
                        :placeholder="placeholder"
                        v-model="objResearch.message"
                    >
                    </textarea>
              </div>
              <div class="form-group row">
                  <label class="f-13  col-md-3 col-sm-12 mt-1">
                      Tài liệu đính kèm
                  </label>
                  <div class="col-md-9 col-sm-12 pl-0">
                      <InputFile :accept="accepFile" @input="getFile" :multiple="true" :label="'Thêm tài liệu'"/>
                        <!-- file -->
                        <div class="col-md-3" v-if="arrFile.length"></div>
                        <div class="col-md-9 pl-0" v-if="arrFile.length">
                            <template v-for="(item,idx) in arrFile">
                                <p :key="idx" class="f-11 text-main ">
                                    <span v-html="returnTypeFile(item.name)"></span>
                                    {{item.name}}
                                    <span class="cursor-pointer ml-5px" @click="clearFile(item)">
                                        <i class="fas fa-times text-red"></i>
                                    </span>
                                </p>
                            </template>
                        </div>
                  </div>
              </div>
                <div class="form-group mb-50px group-checkbox">
                    <b-form-checkbox
                        v-model="objResearch.agree"
                        name="checkbox-agree"
                        required
                        >
                        Tôi đồng ý với <span>điều khoản</span> của Econs <span style="color:red">*</span>
                    </b-form-checkbox>
                </div>
                <div class="group-btn row">
                    <div v-if="!$auth.loggedIn"  class="col-md-12">
                        <button @click="hide()" type="button" class="btn-now">
                            VUI LÒNG ĐĂNG NHẬP
                        </button>
                    </div>
                    <div v-else class="col-md-12">
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
            agree:false
        },
        objInfor:null,
        arrFile:[],
        accepFile:["png", "jpg", "jpeg" , "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
        options: this.getCategory(),
        date: new Date(),
        placeholder:'1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn\n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất.\n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác'
    }
    },
    mounted(){
    },
    methods:{
        async sendMessage(){
            try{
                this.loader()
                var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
                var obj = {
                            ...this.objResearch,
                            attachments:arrFile,
                            to: this.objInfor._id,
                            title: this.objInfor.company ? this.objInfor.company : this.objInfor.name
                        }
                let res = await this.$post(`/member/rooms`,obj)
                console.log('res message',res)
                this.loader(0)
                this.resetForm()
                this.hide()
            }
            catch(err){
                console.log(err)
                this.loader(0)
            }

        },
        resetForm(){
            this.objResearch = {}
            this.arrFile = []
            this.objInfor = null
        },
        getInforPerchant(infor){
            this.objInfor = infor
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        show() {
            this.$refs.modalLienForm.showModal();
        },
        hide(){
            this.$refs.modalLienForm.hideModal()
        },
    }
}
</script>