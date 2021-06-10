<template>
    <div class="editProfileInfoWrap">
        <div class="f-20 f-bold text-main mb-15px">
            Xác thực thông tin tài khoản
        </div>
        <div class="mb-24px text-black f-12">
            Xác thực đầy đủ thông tin doanh nghiệp/cá nhân để nhận được sự tin tưởng từ khách hàng và làm việc an toàn, hiệu quả.
        </div>
        <form>
            <div class="editRow mb-15px">
                <div class="fieldLabel w-200px">
                    Xác thực số điện thoại<span class="dot">*</span>
                </div>
                <div class="fieldInput flex-align-center">
                    <div class="form-group mb-0 flex-1 mr-15px" :class="$auth.user.verified ? 'group-verfiry' : ''">
                        <input
                            type="text"
                            class="form-control"
                            :class="$auth.user.verified ? 'verify' : '' "
                            required
                            v-model="phone"
                            :disabled="$auth.user.verified"
                            placeholder="Số điện thoại"
                        />
                        <div class="group-verify">
                            <img  src="@/assets/svg/icon-check-blue.svg" alt="">
                            <span> Đã xác thực</span>
                        </div>
                    </div>

                    <div>
                        <button type="button" class="btn btn-main px-25px" :disabled="$auth.user.verified" @click="openModalPhone">
                            Xác thực
                        </button>
                    </div>
                </div>
            </div>

            <div class="editRow align-items-start mb-15px">
                <div class="fieldLabel pt-5px w-200px">
                    Xác thực CMND/Passport<span class="dot">*</span>
                    <br>
                    <span class="info">
                        Vui lòng kèm trong file cả mặt trước và mặt sau của thẻ căn cước công dân
                    </span>
                </div>
                <div v-if="$auth.user.verifiedPaperStatus == 'NoAction'" class="fieldInput flex-align-center">
                    <div class="d-flex w-100" style="justify-content:space-between" >
                        <div>
                            <InputFile :accept="acceptFile" @input="getFile" :multiple="true" :label="'Thêm tài liệu'"/>
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
                        <button @click="verifyPassport" type="button" class="btn btn-main px-25px">
                            Xác thực
                        </button>
                    </div>


                </div>
                <div v-else>
                    <small v-if="$auth.user.verifiedPaperStatus == 'Active'" class="checkVerify">
                        <img  src="@/assets/svg/icon-check-blue.svg" alt="">
                        Đã xác thực
                    </small>
                    <small v-else class="text-danger fw-600">
                        Đang xác thực
                    </small>
                    <div v-if="arrFileUser && arrFileUser.length">
                        <template v-for="(item,idx) in arrFileUser">
                            <p :key="idx" class="f-11 text-main  mb-0 mt-8px">
                                <span v-html="returnTypeFile(item)"></span>
                                {{spliceURLFile(item,'--')}}
                            </p>
                        </template>
                    </div>
                </div>
            </div>

        </form>
        <PopupPhoneform v-if="!$auth.user.verified" ref="PopupChangePhone" :phone="phone" @doneConfirmPhone="doneConfirmPhone"/>
    </div>

</template>
<script>
export default {

    data(){
        return{
            phone: this.$auth.user.phone,
            acceptFile:["png", "jpg", "jpeg" ,"tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
            arrFile:[],
            arrFileUser:this.$auth.user.verifiedPaper
        }
    },
    mounted(){
          this.$auth.fetchUser();
    },
    methods:{
        doneConfirmPhone(){
            this.$auth.fetchUser();
        },
        async verifyPassport(){
            var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : [];
            var obj = {
                verifiedPaper:arrFile
            }
            this.$post('user/verify/paper',obj)
                .then(res => {
                    if(res.data.status){
                         this.$auth.fetchUser();
                         this.arrFileUser = this.$auth.user.verifiedPaper
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        openModalPhone(){
            this.$refs.PopupChangePhone.show()
        }
    }
}
</script>