<template>
    <div>
    <p class="title f-20 mb-10px">{{isModal ? 'Chỉnh sửa dự án' : 'Thông tin dự án'}}</p>
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


        <div class="form-group row align-items-center mb-10px">
            <label class="f-13  col-md-3 col-sm-12 ">
                Hình ảnh đính kèm
            </label>
            <div class="col-md-9 pl-0">
                <InputFile ref="akjklak" :accept="acceptFile" key="file" @input="getFileImg" :multiple="true" :label="'Thêm hình ảnh'" />
            </div>

            <div class="col-md-3"></div>
            <div class="col-md-9 pl-0" >
                <template v-if="objProject.attachment" >
                    <template v-for="(item,idx) in objProject.photos">
                        <p :key="idx" class="f-11 text-main ">
                            <span v-html="returnTypeFile(item,'--')" class="mr-5px"></span>
                            {{spliceURLFile(item,'--')}}
                            <span class="cursor-pointer ml-5px" @click="clearFileImgOld(item)">
                                <i class="fas fa-times text-red"></i>
                            </span>
                        </p>
                    </template>
                </template>
                <template v-if="arrBase64.length" >
                    <template v-for="(item,idx) in arrBase64">
                        <p :key="idx" class="f-11 text-main ">
                            <span v-html="returnTypeFile(item.name)" class="mr-5px"></span>
                            {{item.name}}
                            <span class="cursor-pointer ml-5px" @click="clearFileImg(item)">
                                <i class="fas fa-times text-red"></i>
                            </span>
                        </p>
                    </template>
                </template>
            </div>
        </div>

        <div class="form-group row align-items-center">
                <label class="f-13  col-md-3 col-sm-12 ">
                Tài liệu đính kèm
            </label>
            <div class="col-md-9 pl-0">
                <InputFile ref="akjklak" :accept="acceptFile" key="file" @input="getFile" :multiple="true" :label="'Thêm tài liệu'" />
            </div>

            <div class="col-md-3"></div>
            <div class="col-md-9 pl-0" >
                <!-- Attachment Old -->
                <template v-if="objProject.attachment" >
                    <template v-for="(item,idx) in objProject.attachment">
                        <p :key="idx" class="f-11 text-main ">
                            <span v-html="returnTypeFile(item)" class="mr-5px"></span>
                            {{spliceURLFile(item,'--')}}
                            <span class="cursor-pointer ml-5px" @click="clearFileOld(item)">
                                <i class="fas fa-times text-red"></i>
                            </span>
                        </p>
                    </template>
                </template>
                <!-- Attachment New -->
                <template v-if="arrFile.length" >
                    <template v-for="(item,idx) in arrFile">
                        <p :key="idx" class="f-11 text-main ">
                            <span v-html="returnTypeFile(item.name)" class="mr-5px"></span>
                            {{item.name}}
                            <span class="cursor-pointer ml-5px" @click="clearFile(item)">
                                <i class="fas fa-times text-red"></i>
                            </span>
                        </p>
                    </template>
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
                    ref="calendar"
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
                        <div class="input-group-append cursor-pointer" @click="triggerCalendar()">
                            <span class="input-group-text custom-time"><i class="fas fa-calendar-day"></i></span>
                        </div>
                    </div>
                </template>
            </v-date-picker>

        </div>
        <div class="form-group mb-50px group-checkbox d-flex">
            <b-form-checkbox
                v-model="objProject.agree"
                :checked="objProject.agree"
                name="checkbox-agree"
                required
                >
            </b-form-checkbox>
            <span class="f-12 main-black mt-2px ml-5px">Tôi đồng ý với <span class="main-color">điều khoản</span> của Econs <span style="color:red">*</span></span>
        </div>
        <div class="group-btn row">
            <button type="submit" class="d-none" ref="btnClick"></button>
            <div class="col-md-6 col-sm-12">
                <button @click="createJobActive('ACTIVE')" type="button" class="btn-now">
                    {{isModal ? 'CẬP NHẬT THÔNG TIN' : 'ĐĂNG NGAY'}}
                </button>
            </div>
            <div class="col-md-6 col-sm-12 pr-0 cutom-sm">
                <button v-if="isModal" @click="callParent" type="button" class="btn-now delete">
                    HUỶ BỎ
                </button>
                <button v-else @click="createJobDraft('DRAFT')" type="button" class="btn-now save">
                    LƯU BẢN NHÁP
                </button>

            </div>
        </div>
    </form>
</div>
</template>


<script>
export default {
    props:['objInfor','isModal'],
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
        if(!this.isModal){
            this.getProjectDraft()
        }
        else{
            if(this.objInfor){
                this.objProject = this.objInfor
                console.log('this.objProject',this.objProject)
            }
        }

    },
    methods:{
        triggerCalendar(){
            this.$refs.calendar.showPopover()
        },
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
                // Img
                var fileImgOld = this.objProject.photos || []
                var fileImgNew = this.arrFileImg.length ? await this.uploadFile(this.arrFileImg) : []
                var arrFileImg = fileImgOld.concat(fileImgNew)
                // File
                var fileOld = this.objProject.attachment || []
                var fileNew = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
                var arrFile = fileOld.concat(fileNew)

                let res = await this.$post('member/projects',
                                {...this.objProject,status,photos:arrFileImg,attachment:arrFile});
                if(status==='ACTIVE' && !this.isModal){
                    this.objProject = this.restForm();
                    this.$router.replace(`/du-an/${res.data.project.slug}`)
                }
                if(status==='DRAFT'){
                    this.objProject._id = res.data.project._id;
                }
                if(this.isModal){
                    this.$emit('callGetDetail')
                    this.$emit('hideModal')
                }
                this.$notify({ group: 'all', text: this.isModal ? 'Cập nhật dự án thành công' : 'Tạo dự án thành công',  type: 'dark'})
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
        callParent(){
            this.$emit('hideModal')
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        clearFileOld(file){
            this.objProject.attachment = this.objProject.attachment.filter(item => item !== file)
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
        clearFileImgOld(file){
          this.objProject.photos = this.objProject.photos.filter(item => item !== file)
        }
    }
}
</script>