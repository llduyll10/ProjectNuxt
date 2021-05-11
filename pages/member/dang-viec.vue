<template>
    <div>
        <Header />
        <section id="search-job" class="wrapSection pt-30px pb-80px">
            <div class="wrapCenterSmall formCore">
                <div class="content">
                    <p class="title f-20 mb-10px">Thông tin dự án</p>
                    <p class="f-13 description">Vui lòng điền vào thông tin dưới đây. Bạn sẽ nhận được <span>8-10</span>  chào giá tạm tính từ những công ty xây dựng/đơn vị thiết kế uy tín trong khu vực. Bạn thoà sức <span>
                        yêu cầu tư vấn</span>  và <span>chọn lựa</span> đơn vị phù hợp nhất cho dự án</p>
                    <form @submit.prevent="getForm()" class="group-content mt-36px">
                        <div class="form-group row">
                             <label class="f-13 col-md-3 col-sm-12 ">
                                Dịch vụ yêu cầu
                                <span style="color:red">*</span>
                            </label>

                            <treeselect
                                class="pl-0 pr-0 col-md-9 col-sm-12"
                                :options="options"
                                 :disable-branch-nodes="true"
                                :value="objResearch.category"
                                v-model="objResearch.category"
                                :multiple="true"
                            />

                        </div>
                        <div class="form-group row">
                             <label class="f-13 col-md-3 col-sm-12 ">
                                Tên Dự Án
                                <span style="color:red">*</span>
                            </label>
                            <input
                                type="text"
                                class="form-control col-md-9 col-sm-12"
                                required
                                placeholder="Nhập tên dự án của bạn"
                                v-model="objResearch.name"
                            />
                        </div>
                        <div class="form-group row">
                             <label class="f-13 col-md-3 col-sm-12 ">
                                Mô tả Yêu Cầu Về Công Việc
                                <span style="color:red">*</span>
                            </label>
                            <textarea v-model="objResearch.description" required id="customPlaceholder" class="form-control col-md-9 col-sm-12" rows="5"
                                :placeholder="place"
                            ></textarea>
                        </div>
                        <div class="form-group row">
                             <label class="f-13  col-md-3 col-sm-12 ">
                                Hình ảnh đính kèm
                            </label>
                            <div class="custom-btn col-md-9 col-sm-12 d-flex pl-0">
                                <div class="btn-upload">
                                    <img  src="@/assets/img/icon-upload.png"/>
                                    <span>Thêm tài liệu</span>
                                </div>
                                <span class="type-upload">png, jpg, tiff</span>
                            </div>
                        </div>
                        <div class="form-group row">
                             <label class="f-13  col-md-3 col-sm-12 ">
                                Tài liệu đính kèm
                            </label>
                            <div class="custom-btn col-md-9 col-sm-12 d-flex pl-0">
                                <div class="btn-upload">
                                    <img  src="@/assets/img/icon-upload.png"/>
                                    <span>Thêm tài liệu</span>
                                </div>
                                <span class="type-upload">png, jpg, tiff, pdf, xls, doc, ppt, zip, rar</span>
                            </div>
                        </div>
                        <div class="form-group row">
                             <label class="f-13 col-md-3 col-sm-12 ">
                                Địa điểm dự án
                                <span style="color:red">*</span>
                            </label>
                             <treeselect
                                class="pl-0 pr-0 col-md-9 col-sm-12"
                                :options="optionsProvince"
                                :value="objResearch.address"
                                v-model="objResearch.address"
                            />
                        </div>
                        <div class="form-group row">
                             <label class="f-13 col-md-3 col-sm-12 ">
                                Ngân sách dự trù
                                <span style="color:red">*</span>
                            </label>
                            <currency-input
                                type="text"
                                class="form-control col-md-9 col-sm-12"
                                required
                                placeholder="200,000,000"
                                v-model="objResearch.budget"
                            />
                        </div>
                        <div class="form-group row">
                             <label class="f-13 col-md-3 col-sm-12 ">
                                Thời gian kết thúc nhận chào giá
                                <span style="color:red">*</span>
                            </label>
                            <v-date-picker
                                    v-model="objResearch.dueDate"
                                    :masks="{input: 'DD/MM/YYYY'}"
                                    :model-config="{type: 'number',}
                            ">
                                <template v-slot="{ inputValue, inputEvents }">
                                    <div class="input-group mb-3">
                                        <input type="text"
                                                class="form-control"
                                                :value="inputValue"
                                                v-on="inputEvents"
                                                required>
                                        <div class="input-group-append">
                                            <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
                                        </div>
                                    </div>
                                </template>
                            </v-date-picker>

                        </div>
                        <div class="form-group mb-50px group-checkbox">
                            <b-form-checkbox
                                v-model="objResearch.agree"
                                name="checkbox-agree"
                                required
                                >
                                Tôi đồng ý với <span>điều khoản</span> của Econs <span style="color:red">*</span>
                            </b-form-checkbox>
                        </div>
                        <div class="group-btn row">
                            <div class="col-md-6 col-sm-12">
                                <button type="submit" class="btn-now">
                                ĐĂNG NGAY
                                </button>
                            </div>
                            <div class="col-md-6 col-sm-12 pr-0 cutom-sm">
                                <button type="button" class="btn-now save">
                                    LƯU BẢN NHÁP
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </section>
        <Footer />
    </div>

</template>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer"

export default {
    middleware: 'auth',
    components:{
        Header,
        Footer,
    },
    data(){
        return{
            objResearch:{
                category:[],
                dueDate: new Date().getTime(),
                agree:false,
            },
            options: this.getCategory(),
            optionsProvince: this.getProvince(),
            place: `1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn \n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất. \n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác`
        }
    },
    mounted(){
    },
    methods:{
        async getForm(){
            this.loading()
            try{
                console.log(this.objResearch)
                let res = await this.$post('/member/projects', this.objResearch)
                this.loading(0)
            }
            catch(err){
                this.loading(0)
            }
        },

    }
}
</script>