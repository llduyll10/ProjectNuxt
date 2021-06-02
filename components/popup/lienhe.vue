<template>
    <Modal ref="modalLien" id="modal-custom-form-contact">
      <template v-slot:content>
        <div v-if="userInfor" class="modal-contact">
           <div class="top">
                <div class="title f-20">
                    Liên hệ trực tiếp với <span>{{userInfor.company ? userInfor.company : userInfor.name}}</span>
                </div>
                <div class="sub f-13">
                    Bạn sẽ tốn <span>3 Tokens</span> khi liên hệ trực tiếp với <span>{{userInfor.company ? userInfor.company : userInfor.name}}</span>
                </div>
           </div>
           <div class="center">
               <div class="name-line">
                   <div class="label">Họ Tên:</div>
                   <div class="name">{{userInfor.name}}</div>
               </div>
               <div class="phone-line">
                   <div class="label">Số điện thoại:</div>
                   <div v-if="privateInfor && privateInfor._id"  class="phone">
                       {{privateInfor.phone}}
                   </div>
                   <div v-else class="phone">XXX XXX XXX</div>
               </div>
               <div class="email-line">
                   <div class="label">Địa chỉ Email:</div>
                   <div v-if="privateInfor && privateInfor._id"  class="email">
                       {{privateInfor.email}}
                   </div>
                   <div v-else class="email">XXX XXX XXX</div>
               </div>
           </div>
           <div v-if="!$auth.loggedIn" class="bottom btn-now">
            <div  @click="hide()" class="submit f-15 cursor-pointer" >VUI LÒNG ĐĂNG NHẬP</div>
           </div>
           <div v-else class="bottom btn-now">
               <div v-if="privateInfor && privateInfor._id" @click="hide()" class="submit f-16 cursor-pointer">HOÀN TẤT</div>
               <div v-else @click="getUserInfor()" class="submit f-15 cursor-pointer" >HIỂN THỊ THÔNG TIN</div>
           </div>
        </div>
      </template>
    </Modal>
</template>

<script>
export default {
    data(){
        return{
            userInfor:null,
            privateInfor:null
        }
    },
    mounted(){
    },
    methods:{
        getUserInfor(){
            this.$get(`private/user/${this.userInfor._id}`)
                .then(res =>{
                    this.privateInfor = res.data
                    this.$auth.fetchUser();
                })
                .catch(err => {
                    console.log(err)
                })
        },
        passIDInfor(item){
            this.userInfor = item
            this.privateInfor = null
        },
        show() {
            this.$refs.modalLien.showModal();
        },
        hide(){
            this.$refs.modalLien.hideModal()
        },
    },
}
</script>