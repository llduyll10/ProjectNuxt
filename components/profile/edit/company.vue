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
                            required
                            :options="optionsType"
                            :value="objWorking.accountType"
                            v-model="objWorking.accountType"
                            placeholder="Loại tài khoản"
                            :clearable=false
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
                            required
                            v-on:input="limiter"
                            :options="optionsCategory"
                            :disable-branch-nodes="true"
                            :value="objWorking.category"
                            v-model="objWorking.category"
                            :multiple="true"
                            placeholder="Lĩnh vực hoạt động"
                            :clearable=false
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
                            required
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-25px">
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
                            required
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
                        <InputFile :accept="accepFile" @input="getFile" :multiple="true" :label="'Thêm tài liệu'"/>


                         <template v-if="this.objWorking.filesCert">
                            <template v-for="(item,idx) in this.objWorking.filesCert">
                                <p :key="idx+1" class="f-11 text-main ">
                                    <span v-html="returnTypeFile(spliceURLFile(item,'--'))"></span>
                                    {{spliceURLFile(item,'--')}}
                                    <span class="cursor-pointer ml-5px" @click="clearFileOld(item)">
                                        <i class="fas fa-times text-red"></i>
                                    </span>
                                </p>

                            </template>
                        </template>

                        <template v-if="arrFile.length">
                            <template v-for="(item,idx) in arrFile">
                                <p :key="idx" class="f-11 text-main ">
                                    <span v-html="returnTypeFile(item.name)"></span>
                                    {{item.name}}
                                    <span class="cursor-pointer ml-5px" @click="clearFile(item)">
                                        <i class="fas fa-times text-red"></i>
                                    </span>
                                </p>

                            </template>
                        </template>
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
import InputFile from '@/components/InputFile'
export default {
    components: {
        InputFile
    },
    data(){
        return{
            objWorking:{},
            optionsType:this.getTypeAccount(),
            optionsCategory: this.getCategory(),
            arrFile:[],
            accepFile:["png","jpg", "jpeg" ,"tiff","pdf","xls","doc","ppt","zip","rar"],
        }
    },
    mounted(){
        this.getUser()
    },
    methods:{
        limiter(e) {
            if(e.length > 5) {
                e.pop()
            }
        },
        getUser(){
            var {accountType,category,introduce,ability, filesCert} = this.$auth.user
            this.objWorking = {accountType,category,introduce,ability, filesCert}
        },
        async updateWorking(){
            this.loader()
            var filesCertOld = this.objWorking.filesCert;
            var filesCertNew = this.arrFile.length ? await this.uploadFile(this.arrFile) : [];

            var filesCert = filesCertOld.concat(filesCertNew);
            if(filesCert.length){
                this.objWorking.filesCert = filesCert;
            }

            this.arrFile = []
            try{
                let res = await this.$post('user/working',this.objWorking)
                await this.$auth.fetchUser()
                this.getUser()
                this.arrFile = [];
                this.loader(0)
            }
            catch(err){
                this.loader(0)
            }
        },
        getFile(arrFile){
            this.arrFile = this.arrFile.concat(arrFile)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        clearFileOld(file){
            this.objWorking.filesCert = this.objWorking.filesCert.filter(item => item !== file)
        }
    }
}
</script>