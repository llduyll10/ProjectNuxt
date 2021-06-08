<template>
    <div>
    <p class="title f-20 mb-10px">Thông tin dự án</p>
    <p class="f-13 description">Vui lòng điền vào thông tin dưới đây. Bạn sẽ nhận được <span>8-10</span>  chào giá tạm tính từ những công ty xây dựng/đơn vị thiết kế uy tín trong khu vực. Bạn thoà sức <span>
        yêu cầu tư vấn</span>  và <span>chọn lựa</span> đơn vị phù hợp nhất cho dự án</p>
    <form @submit.prevent="createJob()" ref="fromProject" class="group-content mt-36px">
        <div class="form-group row align-items-center">
                <label class="f-13 col-md-3 col-sm-12 ">
                Dịch vụ yêu cầu
                <span style="color:red">*</span>
            </label>

            <treeselect
                class="pl-0 pr-0 col-md-9 col-sm-12"
                :options="options"
                :disable-branch-nodes="true"
                :value="objProject.category"
                v-model="objProject.category"
                :multiple="true"
                required
                placeholder="Chọn dịch vụ"
                :clearable=false
            />

        </div>
        <div class="form-group row align-items-center">
                <label class="f-13 col-md-3 col-sm-12 ">
                Tên Dự Án
                <span style="color:red">*</span>
            </label>
            <input
                type="text"
                class="form-control col-md-9 col-sm-12"
                required
                placeholder="Nhập tên dự án của bạn"
                v-model="objProject.name"
            />
        </div>
        <div class="form-group row align-items-center">
                <label class="f-13 col-md-3 col-sm-12 ">
                Mô tả Yêu Cầu Về Công Việc

                <span style="color:red">*</span>
            </label>
            <textarea v-model="objProject.description" required id="customPlaceholder" class="form-control col-md-9 col-sm-12" rows="5"
                :placeholder="place"
            ></textarea>
        </div>
        <!-- File Img -->
        <div class="form-group row align-items-center">
                <label class="f-13  col-md-3 col-sm-12 ">
                Hình ảnh đính kèm
            </label>
            <div class="col-md-9 col-sm-12 pl-0">
                <InputFile ref="test" :accept="acceptImg" @input="getFileImg" :multiple="true" :label="'Thêm hình ảnh'" />
                <div class="row" v-if="arrBase64.length">
                    <template v-for="(item,idx) in arrBase64">
                        <div class="col-sm-4 pr-0" :key="idx">
                            <div
                                class="itemComponent"
                                :style="{
                                    'background-image': 'url(' + `${item.base64}` + ')',
                                }"
                            >
                            <i @click="clearFileImg(item)" class="fas fa-times text-red"></i>
                            </div>

                        </div>
                    </template>
                </div>
            </div>
        </div>

        <div class="form-group row align-items-center">
                <label class="f-13  col-md-3 col-sm-12 ">
                Tài liệu đính kèm
            </label>
            <div class="col-md-9 pl-0">
                <InputFile ref="akjklak" :accept="acceptFile" key="file" @input="getFile" :multiple="true" :label="'Thêm tài liệu'" />
            </div>

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

        <div class="form-group row align-items-center">
                <label class="f-13 col-md-3 col-sm-12 ">
                Địa điểm dự án
                <span style="color:red">*</span>
            </label>
                <treeselect
                class="pl-0 pr-0 col-md-9 col-sm-12"
                :options="optionsProvince"
                :value="objProject.address"
                v-model="objProject.address"
                placeholder="Tỉnh thành"
                required
                :clearable=false
            />
        </div>
        <div class="form-group row align-items-center">
                <label class="f-13 col-md-3 col-sm-12 ">
                Ngân sách dự trù
                <span style="color:red">*</span>
            </label>
            <div class="input-group col-md-9 col-sm-12 px-0">
                <currency-input
                    type="text"
                    class="form-control"
                    required
                    placeholder="200,000,000"
                    v-model="objProject.budget"
                />
                <div class="input-group-append">
                    <span class="input-group-text f-12">VND</span>
                </div>
            </div>

        </div>
        <div class="form-group row align-items-center">
                <label class="f-13 col-md-3 col-sm-12 ">
                Thời gian kết thúc nhận chào giá
                <span style="color:red">*</span>
            </label>
            <v-date-picker
                    v-model="objProject.dueDate"
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
                            <span class="input-group-text custom-time"><i class="fas fa-calendar-day"></i></span>
                        </div>
                    </div>
                </template>
            </v-date-picker>

        </div>
        <div class="form-group mb-50px group-checkbox">
            <b-form-checkbox
                v-model="objProject.agree"
                :checked="objProject.agree"
                name="checkbox-agree"
                required
                >
                Tôi đồng ý với <span>điều khoản</span> của Econs <span style="color:red">*</span>
            </b-form-checkbox>
        </div>
        <div class="group-btn row">
            <button type="submit" class="d-none" ref="btnClick"></button>
            <div class="col-md-6 col-sm-12">
                <button @click="createJobActive('ACTIVE')" type="button" class="btn-now">
                ĐĂNG NGAY
                </button>
            </div>
            <div class="col-md-6 col-sm-12 pr-0 cutom-sm">
                <button @click="createJobDraft('DRAFT')" type="button" class="btn-now save">
                    LƯU BẢN NHÁP
                </button>
            </div>
        </div>
    </form>
</div>
</template>


<script>
export default {
    data(){
        return{
            objProject:this.restForm(),
            options: this.getCategory(),
            optionsProvince: this.getProvince(),
            place: `1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn \n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất. \n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác`,
            acceptImg:["png", "jpg", "jpeg", "tiff"],
            acceptFile:["png", "jpg", "jpeg", "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
            arrFileImg:[],
            arrBase64:[],
            arrFile:[],
            currentStatus:''
        }
    },
    mounted(){
        this.getProjectDraft()
    },
    methods:{
        restForm(){
            this.arrFileImg=[],
            this.arrBase64=[],
            this.arrFile=[]
            return {
                category:[],
                dueDate: new Date().getTime(),
                agree:false,

            }
        },
        createJobActive(s){
            this.currentStatus = s;
            this.$refs.btnClick.click();
        },
        createJobDraft(s){
            this.currentStatus = s;
            this.$refs.btnClick.click();
        },
        async createJob(){
            var status = this.currentStatus;
            this.loader()
            try{
                var arrFileImg = this.arrFileImg.length ? await this.uploadFile(this.arrFileImg) : []
                var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []

                let res = await this.$post('member/projects',
                                {...this.objProject,status,photos:arrFileImg,attachment:arrFile});
                if(status==='ACTIVE'){
                    this.objProject = this.restForm();
                    this.$router.replace(`/du-an/${res.data.project.slug}`)
                }
                if(status==='DRAFT'){
                    this.objProject._id = res.data.project._id;
                }
                this.$notify({ group: 'all', text: 'Tạo dự án thành công',  type: 'dark'})
                this.loader(0)
            }
            catch(err){
                this.loader(0)
            }
        },
        getProjectDraft(){
            this.$get('member/projects/draft')
            .then(res =>{
                if(res.data.status){
                    this.objProject = res.data.project
                }
            })
            .catch(err=>{
                console.log('getProjectDraft',err)
            })

        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        async getFileImg(arrFile){
          this.arrFileImg = this.arrFileImg.concat(arrFile)
          var arrBase64 = []
          this.arrFileImg.forEach( async item => {
            var base64 = await this._toBase64(item);
            arrBase64.push({base64,name:item.name})
          })
          this.arrBase64 = arrBase64
        },
        clearFileImg(file){
          this.arrBase64 = this.arrBase64.filter(item => item.base64 !== file.base64)
          this.arrFileImg = this.arrFileImg.filter(item => item.name !== file.name)
        },
    }
}
</script>