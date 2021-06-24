<template>
    <div class="editProfileInfoWrap">
        <div class="f-20 f-bold text-main mb-24px">
            Thông tin cá nhân
        </div>
        <form @submit.prevent="updateInfor()">
            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Hình ảnh đại diện <span class="info">(Dưới 1MB)</span>
                </div>
                <div class="fieldInput">
                    <div class="mb-5px" v-if="avataBase64 || objInfor.photo">
                        <img class="uploadReview" :src="avataBase64?avataBase64:objInfor.photo" alt=""/>
                    </div>
                    <div>
                        <InputFile :accept="accepFile" @input="getFile" :multiple="false" :label="'Chọn hình ảnh'"/>
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Người đại diện<span class="dot">*</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            type="text"
                            class="form-control"
                            required
                            placeholder="Họ và Tên"
                            v-model="objInfor.name"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Tên công ty
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Tên công ty"
                            v-model="objInfor.company"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Mã số thuế
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Mã số thuế"
                            @keypress="isNumber($event)"
                            maxlength="10"
                            v-model="objInfor.taxCode"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Số điện thoại<span class="dot">*</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            type="text"
                            class="form-control"
                            required
                            placeholder="Số điện thoại"
                            v-model="objInfor.phone"
                            :disabled="objInfor.verified"
                        />
                        <small class="text-main" v-if="objInfor.verified">
                            Đã xác thực
                        </small>
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Email<span class="dot">*</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            type="text"
                            class="form-control"
                            required
                            placeholder="Email"
                            v-model="objInfor.email"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Địa chỉ<span class="dot">*</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            required
                            type="text"
                            class="form-control"
                            placeholder="Địa chỉ"
                            v-model="objInfor.address"
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Tỉnh thành<span class="dot">*</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <treeselect
                            required
                            :options="optionsProvince"
                            :value="objInfor.province"
                            v-model="objInfor.province"
                            placeholder="Tỉnh thành"
                            :clearable=false
                        />
                    </div>
                </div>
            </div>

            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Website tham khảo
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Website/Link portfolio"
                            v-model="objInfor.website"
                        />
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
            objInfor: {},
            optionsProvince: this.getProvince(),
            accepFile:["png","jpeg","jpg",'gif'],
            tempFile:null,
            avataBase64:null
        }
    },
    mounted(){
        this.getUser();
    },
    methods:{
        getUser() {
            var { phone, email, name, photo, address, company, province, website,verified} = this.$auth.user;
            province = province || null;
            this.objInfor = { phone, email, name, photo, address, company, province, website, verified} ;
        },
        async updateInfor(){
            this.loader();
            var photo = this.tempFile ? await this.uploadFile(this.tempFile): '';

            if(photo){
                this.objInfor.photo = photo;
            }
            try{
                let res = await this.$post('user/information',this.objInfor)
                this.$auth.fetchUser()
                this.avataBase64 = null;
                this.loader(0)
                this.$notify({ group: 'all', text: 'Cập nhật thành công',  type: 'dark'})
            }
            catch(err){
                this.loader(0)
            }
        },
        async getFile(file){
            this.tempFile = file;
            this.avataBase64 = await this._toBase64(file);
        },
    }
}
</script>