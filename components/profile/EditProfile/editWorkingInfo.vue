<template>
    <div class="editProfileInfoWrap">
        <div class="f-20 f-bold text-main mb-24px">
            Hồ sơ làm việc
        </div>
        <form @submit.prevent="updateWorking">
            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Loại tài khoản<span class="dot">*</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <treeselect
                            class=""
                            :options="optionsType"
                            :value="objWorking.address"
                            v-model="objWorking.address"
                            placeholder="Loại tài khoản"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                     Lĩnh vực hoạt động
                     <br/>
                     <span class="info">(Chọn tối đa 5)</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <treeselect
                            class=""
                            :options="optionsCategory"
                            :disable-branch-nodes="true"
                            :value="objWorking.category"
                            v-model="objWorking.category"
                            :multiple="true"
                            placeholder="Lĩnh vực hoạt động"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Giới thiệu về công ty/cá nhân
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <textarea
                            class="form-control"
                            placeholder="Giới thiệu về công ty/tổ chức của bạn. Nếu là Freelancer, mô tả về quá trình làm việc của bạn"
                            rows="12"
                            v-model="objWorking.introduce"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Giới thiệu về năng lực
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <textarea
                            rows="8"
                            class="form-control"
                            placeholder="Mô tả năng lực của bạn/công ty bạn và tại sao chủ đầu tư nên chọn bạn"
                            v-model="objWorking.ability"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Chứng chỉ năng lực
                </div>
                <div class="fieldInput">
                    <div>
                        <button type="button" class="btn btn-main f-11">
                            <img class="mr-4px h-13px" src="@/assets/svg/icon-upload.svg" alt=""/>
                            Thêm tài liệu
                        </button>

                        <i class="text-main f-11">png, jpg, tiff, pdf, xls, doc, ppt, zip, rar</i>
                    </div>
                </div>
            </div>

            <div class="w-100 my-40px">
                <button type="submit" class="btn btn-main w-100 btn-lg">
                    CẬP NHẬT THÔNG TIN
                </button>
            </div>
        </form>
    </div>

</template>
<script>
export default {
    components: {
    },
    data(){
        return{
            objWorking:{},
            optionsType:this.getTypeAccount(),
            optionsCategory: this.getCategory()
        }
    },
    methods:{
        updateWorking(){
            console.log(this.objWorking)
        }
    }
}
</script>