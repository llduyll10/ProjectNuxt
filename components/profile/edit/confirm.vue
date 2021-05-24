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
                    <div class="form-group mb-0 flex-1 mr-15px">
                        <input
                            type="text"
                            class="form-control"
                            required
                            v-model="phone"
                            :disabled="$auth.user.verified"
                            placeholder="Số điện thoại"
                        />
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
                <div class="fieldInput flex-align-center">
                    <div class="mr-auto">
                        <button type="button" class="btn btn-main f-11">
                            <img class="mr-4px h-13px" src="@/assets/svg/icon-upload.svg" alt=""/>
                            Thêm tài liệu
                        </button>

                        <i class="text-main f-11">png, jpg, tiff, pdf, xls, doc, ppt, zip, rar</i>
                    </div>

                    <div>
                        <button type="button" class="btn btn-main px-25px">
                            Xác thực
                        </button>
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
            phone: this.$auth.user.phone
        }
    },
    methods:{
        doneConfirmPhone(){
            this.$auth.fetchUser();
        },
        openModalPhone(){
            this.$refs.PopupChangePhone.show()
        }
    }
}
</script>