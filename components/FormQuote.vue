<template>
    <div v-if="isShowForm">
        <form @submit.prevent="createQuote('ACTIVE')" class="group-content">
            <div class="form-group row mb-25px align-items-center">
                <label class="f-13 col-md-3 col-sm-12 fw-600">
                    Chi phí ước tính
                    <span style="color:red">*</span>
                </label>
                <div class=" col-md-9 col-sm-12">
                    <div class="input-group">
                        <currency-input
                            type="text"
                            class="form-control"
                            required
                            placeholder="200,000,000"
                            v-model="objForm.price"
                        />
                        <div class="input-group-append">
                            <span class="input-group-text f-12">VND</span>
                        </div>
                    </div>
                    <p class="mb-0 mt-5px f-12 main-black">
                        Phí hoa hồng nếu trúng thầu -
                        <span class="main-color fw-600">500</span> <span class="fw-600">Tokens</span>
                    </p>
                </div>
            </div>
            <div class="form-group row mb-25px align-items-center">
                <label class="f-13 col-md-3 col-sm-12 fw-600">
                    Kinh nghiệm, Năng lực và giải pháp đề xuất
                    <span style="color:red">*</span>
                </label>
                <div class="col-md-9 col-sm-12">
                <textarea v-model="objForm.description"
                        required id="customPlaceholder"
                        class="form-control main-black "
                        rows="5"
                        :placeholder="place"
                    >
                </textarea>
                </div>
            </div>
            <div class="form-group row mb-25px align-items-center">
                <label class="f-13 col-md-3 col-sm-12 fw-600">
                    Thời gian thi công dự trù
                    <span style="color:red">*</span>
                </label>
                <div class="col-md-3 col-sm-12 ">
                    <div class="input-group">
                        <input v-model="objForm.day" @keypress="isNumber($event)" type="text" class="form-control "/>
                        <div class="input-group-append">
                            <span class="input-group-text py-0 px-10px f-12">Ngày</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row mb-25px align-items-center">
                <label class="f-13 col-md-3 col-sm-12 fw-600">
                    Tài liệu đính kèm
                    <span style="color:red">*</span>
                </label>
                <div class="col-md-9 col-sm-12">
                    <InputFile :accept="accepFile" @input="getFile" :multiple="true" :label="'Thêm tài liệu'"/>
                    <!-- file -->
                    <div class="col-md-3" v-if="arrFile.length"></div>
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
            </div>
            <div class="form-group mb-50px group-checkbox">
                <b-form-checkbox
                    v-model="objForm.agree"
                    name="checkbox-agree"
                    required
                    >
                    Tôi đồng ý với <span class="main-color">điều khoản</span> của Econs <span style="color:red">*</span>
                </b-form-checkbox>
            </div>
            <div class="group-btn">
                <div class="d-flex mt-25px justify-content-xl-around row">
                <div class="col-md-6 col-sm-12">
                    <button
                        type="submit"
                        class=" btn btn-primary main-bg-color radius-5 w-100  text-16 fw-700"
                    >
                        GỬI CHÀO GIÁ NGAY
                    </button>
                </div>
                <div class="col-md-6 col-sm-12">
                    <button
                        @click="createQuote('DRAFT')"
                        type="button"
                        class=" btn btn-primary main-bg-color radius-5 w-100  btn-brown text-16 pr-0 fw-700"
                    >
                        LƯU BẢN NHÁP
                    </button>
                </div>
                </div>
            </div>
        </form>
    </div>
    <div v-else>

        <div class="text-center">
            <img src="@/assets/svg/CheckboxBig.svg" />
            <p v-if="$auth.loggedIn && $auth.user.canAuction" class="f-19 main-black fw-600">Bạn đã gửi chào giá cho
                <span class="text-main">{{quoteName}}</span></p>
            <p v-if="!$auth.loggedIn" class="f-19 main-black fw-600">
                Vui lòng đăng nhập để chào giá
            </p>

            <p v-if="$auth.loggedIn && !$auth.user.canAuction" class="f-19 main-black fw-600">
                Vui lòng hoàn thành hồ sơ và xác thực tài khoản
            </p>
        </div>
    </div>

</template>
<script>
export default {
    props:['id','quoteName',"detailProject"],
    data(){
        return{
            place: `1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn \n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất. \n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác`,
            objForm:{
                agree:false,
            },
            accepFile:["png", "jpg", "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
            arrFile:[],
            isShowForm:false
        }
    },
    mounted(){
        this.getQuote()
    },
    methods:{
        getQuote(){
            if(this.$auth && this.$auth.user && this.$auth.user.canAuction){
                this.$get(`member/auction/project/${this.id}`)
                .then(res =>{
                    if(res.data.status){
                        if(res.data.auction){
                            if(res.data.auction.status == 'DRAFT'){
                                this.objForm = {...res.data.auction}
                                this.isShowForm = true;
                            }else{
                                this.isShowForm = false;
                            }
                        }else{
                            this.isShowForm = true;
                        }
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            }else{
                this.isShowForm = false;
            }

        },
        async createQuote(status){
            this.loader()
            try{
                var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
                var obj = {
                            ...this.objForm,
                            day: Number(this.objForm.day),
                            attachments:arrFile,
                            status:status,
                            projectOwner:detailProject.createBy._id
                        }
                let res = await this.$post(`member/auction/project/${this.id}`,obj)
                this.resetForm()
                this.getQuote()
                this.loader(0)
                this.$emit('callGetList')
                this.$auth.fetchUser();
            }
            catch(err){
                console.log(err)
                this.loader(0)
            }
        },
        resetForm(){
            this.objForm = {}
            this.arrFile = []
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
    }

}
</script>