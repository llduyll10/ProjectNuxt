<template>
    <Modal ref="modalLienForm" id="modal-show-villa" :title="itemShow.name">
      <template v-slot:content>
        <div class="modal-villa formCore">
          <div class="content">
            <form @submit.prevent="getForm()" class="mt-2px">
              <div class="form-group row line-bot">
                    <label class="f-13 col-md-3 col-sm-12 f-bold">
                      Dịch vụ yêu cầu
                  </label>
                  <div class="service col-md-9 col-sm-12 f-12">{{itemShow.name}}</div>
              </div>
              <div class="form-group row line-bot">
                    <label class="f-13 col-md-3 col-sm-12 d-flex flex-align-center f-bold">
                      Soạn tin nhắn
                    </label>
                    <div class="col-md-9 col-sm-12 ">
                      <div class="content-villa">
                        <p>Xin chào, mình có xem qua hồ sơ năng lực của công ty. Mình cần công ty tư vấn hỗ trợ xây dựng nhà phố 1 trệt 4 lầu tại Gò Vấp</p>
                        <ul>
                            <li>Diện tích đất: 5x20 </li>
                            <li>Ngân sách dự trù: 3 tỷ</li>
                        </ul>
                        <p>Mong nhận được phản hồi sớm từ công ty</p>
                    </div>
                  </div>
              </div>
              <div class="form-group row">
                  <label class="f-13  col-md-3 col-sm-12 mt-1 mb-5px f-bold">
                      Tài liệu đính kèm
                  </label>
                  <div class="col-md-9 col-sm-12 mt-1 pr-0px">
                      <div class="row image">
                        <template v-for="(item , idx) in itemShow.photos">
                            <div class="col-6 img" :key="idx">
                                <div class="imgVilla"
                                :style="{
                                    'background-image': 'url(' + `${item}` + ')',
                                }"
                                ></div>
                            </div>
                        </template>
                    </div>
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
    props: {
      itemShow: {
        type: Object,
      },
    },
    data(){
        return{
            
        }
    },
    mounted(){
       
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