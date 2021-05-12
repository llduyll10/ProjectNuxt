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
                    <div class="mb-5px">
                        <img class="uploadReview" src="@/assets/img/longb.png" alt=""/>
                    </div>
                    <div>
                        <InputFile :accept="accepFile" @input="getFile" />
                        <template v-if="arrFile.length">
                            <template v-for="(item,idx) in arrFile">
                                <p :key="idx" class="f-11 text-main ">
                                    <img src="@/assets/svg/icon-pdf-border.svg" alt="">
                                    {{item.name}}
                                    <span class="cursor-pointer" @click="clearFile(item)">
                                        <i class="fas fa-times text-red"></i>
                                    </span>
                                </p>

                            </template>
                        </template>
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
                    Tên công ty<span class="dot">*</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            type="text"
                            class="form-control"
                            required
                            placeholder="Tên công ty"
                            v-model="objInfor.company"
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
                        />
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
                            type="text"
                            class="form-control"
                            required
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
                            class=""
                            :options="optionsProvince"
                            :value="objInfor.province"
                            v-model="objInfor.province"
                            placeholder="Tỉnh thành"
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
            arrFile: [],
            objInfor:{},
            optionsProvince: this.getProvince(),
            accepFile:'png, jpg, tiff, pdf, xls, doc, ppt, zip, rar',
        }
    },
    methods:{
        updateInfor(){
            console.log(this.objInfor)
        },
        getFile(file){
            this.arrFile.push(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        }
    }
}
</script>