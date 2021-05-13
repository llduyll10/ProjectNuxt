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
            <template v-for="(item,idx) in listShow">
                <div :key="idx" class="col-md-3 col-md-4 col-sm-6 cover-item">
                    <div class="d-flex justify-content-end mb-5px">
                        <div class="group-function">
                            <img src="@/assets/svg/icon-edit-file.svg" />
                            <span class="cursor-pointer" @click="openModal(item)">Chỉnh sửa</span>
                            <div class="height"></div>
                            <span class="cursor-pointer" @click="deleteProject(item)">Xoá bỏ</span>
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

        <div v-if="showSeemore" class="w-100 text-center">
            <p class="f-12 text-main cursor-pointer" @click="seemore()">Xem thêm dự án <i class="fas fa-caret-down ml-5px"></i></p>
        </div>
    </div>
    <CreateEditProject ref="addProject" v-if="!detailProject" @parentEvent="hideModal" />
    <Modal ref="modalEditProject" id="modal-create-update-project" @close="hideModal">
      <template v-slot:content>
        <CreateEditProject ref="editProject" :project="detailProject" v-if="detailProject"  @parentEvent="hideModal" />
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
            listShow:[],
            listTemp:[],
            detailProject:null,
            showSeemore:false
        }
    },
    mounted(){
      this.getListProject()

    },
    methods:{
      async getListProject(){
        let res = await this.$get('/member/portfolio')
        this.listProject = res.data
        this.listTemp = JSON.parse(JSON.stringify(this.listProject))
        this.listShow = this.listTemp.splice(0,6)
        if(this.listProject < 6){
          this.showSeemore = false
        }
        else{
          this.showSeemore = true
        }
      },
      seemore(){
        this.listShow = JSON.parse(JSON.stringify(this.listProject))
        this.showSeemore =false
      },
      async deleteProject(item){
        let confirm = window.confirm('Bạn có muốn xoá dự án?')
        if(confirm){
          let res = await this.$del(`/member/portfolio/${item._id}`)
          if(res.data.status){
            this.getListProject()
          }
        }
      },
      openModal(item){
        this.$refs.modalEditProject.showModal()
        this.detailProject = item
      },
      hideModal(){
        this.detailProject = null;
        this.getListProject()
        this.$refs.modalEditProject.hideModal()
      },

    }
}
</script>
