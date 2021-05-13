<template>
  <div class="editProfileInfoWrap">
    <div class="mb-24px borderWrap">
        <div class="f-20 f-bold text-main mb-15px">
            Dự án đã thực hiện
        </div>
        <div class="mb-24px text-black f-12">
            Vui lòng cung cấp thêm thông tin các dự án cũ bạn đã từng làm trước đây. Khách hàng thường xem qua hồ sơ năng lực rồi mới quyết định thuê.
        </div>
        <div class="group-project-items">
            <template v-for="(item,idx) in listProject">
                <div :key="idx" class="col-md-3 col-md-4 col-sm-6 cover-item">
                    <div class="d-flex justify-content-end mb-5px">
                        <div class="group-function">
                            <img src="@/assets/svg/icon-edit-file.svg" />
                            <span @click="openModal(item)">Chỉnh sửa</span>
                            <div class="height"></div>
                            <span>Xoá bỏ</span>
                        </div>
                    </div>
                    <div
                        class="item"
                        :style="{
                            'background-image': 'url(' + `${item.photos[0]}` + ')',
                        }"
                    >
                        <p class="location f-11">{{item.name}}</p>
                    </div>
                </div>
            </template>
        </div>

        <div class="w-100 text-center">
            <p class="f-12 text-main">Xem thêm dự án <i class="fas fa-caret-down ml-5px"></i></p>
        </div>
    </div>
    <CreateEditProject ref="addProject" v-if="!detailProject" />
    <Modal ref="modalEditProject" id="modal-create-update-project">
      <template v-slot:content>
        <CreateEditProject ref="editProject" :project="detailProject" v-if="detailProject"/>
      </template>
    </Modal>
  </div>
</template>
<script>
import DemoHouse from '@/assets/img/demo-house.png'
import CreateEditProject from './createEditProject'
import Modal from "@/components/Modal";
export default {
    components:{
      CreateEditProject,
      Modal
    },
    data(){
        return{
            demoHouse:DemoHouse,
            listProject:null,
            detailProject:null
        }
    },
    mounted(){
      this.getListProject()
    },
    methods:{
      async getListProject(){
        let res = await this.$get('/member/portfolio')
        this.listProject = res.data
        console.log('getProject',this.listProject)
      },
      openModal(item){
        this.$refs.modalEditProject.showModal()
        this.detailProject = item
      },
      hideModal(){
        this.detailProject = null;
        this.$refs.modalEditProject.hideModal()
      }
    }
}
</script>
