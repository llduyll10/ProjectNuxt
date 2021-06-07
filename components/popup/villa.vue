<template>
    <Modal ref="modalLienForm" id="modal-show-villa">
      <template v-slot:content>
        <div class="modal-villa formCore">
          <div class="content">
            <form  class="mt-2px">

              <div class="form-group row ">
                  <div class="service col-md-12 col-sm-12 f-20 pl-0">{{itemShow.name}}</div>
                  <div class="line-bot col-12"></div>
              </div>

              <div class="form-group row ">
                  <label class="f-13 col-md-3 col-sm-12 f-bold pl-0">
                    Dịch vụ yêu cầu
                  </label>
                  <div class="service col-md-9 col-sm-12">
                    <div class="content-villa">
                        {{itemShow.category}}
                    </div>
                  </div>
                  <div class="line-bot col-12"></div>
              </div>
              <div class="form-group row ">
                    <label class="f-13 col-md-3 col-sm-12 d-flex flex-align-center f-bold pl-0">
                      Chi tiết dự án
                    </label>
                    <div class="col-md-9 col-sm-12 ">
                      <div class="content-villa">
                        {{itemShow.description}}
                    </div>
                  </div>
                  <div class="line-bot col-12 mb-20px"></div>
              </div>
              <div class="form-group row">
                  <label class="f-13  col-md-3 col-sm-12 mt-1 mb-5px f-bold pl-0">
                     Hình ảnh dự án
                  </label>
                  <div class="col-md-9 col-sm-12 mt-1 pr-0px">
                      <div class="row image">
                        <template v-for="(item , idx) in 6">
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