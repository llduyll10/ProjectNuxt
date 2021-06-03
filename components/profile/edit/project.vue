<template>
     <div class="createEditComponent">

      <form @submit.prevent="createProject">
        <div class="editRow mb-15px form-group row">
          <div v-if="!isEdit" class="fieldLabel fw-600 f-13 col-md-3 col-sm-12">Tên dự án<span style="color:red">*</span></div>
          <div class="fieldInput col-md-9 col-sm-12">
            <div class="form-group mb-0">
              <input
                type="text"
                class="form-control"
                :class="isEdit ? 'title' :''"
                required
                placeholder="Tên dự án bạn đã thực hiện"
                v-model="objProject.name"
              />
            </div>
          </div>
          <div  v-if="isEdit" class="line"></div>
        </div>

        <div class="editRow mb-15px form-group row">
          <div class="fieldLabel fw-600 f-13 col-md-3 col-sm-12">Dịch vụ<span style="color:red">*</span></div>
          <div class="fieldInput col-md-9 col-sm-12">
            <div class=" mb-0">
              <treeselect
                :options="optionsCategory"
                :disable-branch-nodes="true"
                :value="objProject.category"
                v-model="objProject.category"
                :multiple="true"
                :clearable="false"
                placeholder="Chọn dịch vụ"
                required
            />
            </div>
          </div>
          <div  v-if="isEdit" class="line mt-15px"></div>
        </div>

        <div class="editRow  form-group row"
            :class="(objProject.photos && objProject.photos.length || arrBase64.length) ? 'mb-15px' :'mb-25px'"
        >
          <div class="fieldLabel fw-600 f-13 col-md-3 col-sm-12">Mô tả chi tiết<span style="color:red">*</span></div>
          <div class="fieldInput col-md-9 col-sm-12">
            <div class="form-group mb-0">
              <textarea
                class="form-control"
                required
                placeholder="Mô tả chi tiết dự án bạn đã thực hiện"
                rows="8"
                v-model="objProject.description"
              />
            </div>
          </div>
          <div  v-if="isEdit" class="line mt-15px"></div>
        </div>
        <div v-if="objProject.photos && objProject.photos.length || arrBase64.length" class="editRow mb-10px form-group row">
          <div class="fieldLabel fw-600 f-13 col-md-3 col-sm-12">Hình ảnh dự án<span style="color:red">*</span></div>
          <div class="fieldInput col-md-9 col-sm-12">
              <div class="row pl-15px">
                  <!-- OLD FILE -->
                  <template v-if="objProject.photos">
                    <template v-for="(item,idx) in objProject.photos">
                        <div class="col-sm-6 pl-0" :key="idx+1">
                            <div
                                  class="itemComponent"
                                  :style="{
                                      'background-image': 'url(' + `${item}` + ')',
                                  }"
                              >
                              <i @click="clearOldFile(item)" class="fas fa-times"></i>
                              </div>
                        </div>
                    </template>
                  </template>
                  <!-- NEW FILE -->
                  <template v-if="arrBase64.length">
                    <template v-for="(item,idx) in arrBase64">
                        <div class="col-sm-6 pl-0" :key="idx">
                            <div
                                  class="itemComponent"
                                  :style="{
                                      'background-image': 'url(' + `${item.base64}` + ')',
                                  }"
                              >
                              <i @click="clearFile(item)" class="fas fa-times"></i>
                            </div>

                        </div>
                    </template>
                  </template>

              </div>
          </div>
          <div  v-if="isEdit" class="line mt-15px mb-10px"></div>

        </div>
        <div class="editRow mb-15px form-group row">
          <div class="fieldLabel fw-600 f-13 col-md-3 col-sm-12">
            Hình ảnh đính kèm
          </div>
          <div class="fieldInput col-md-9 col-sm-12">
              <InputFile :accept="accepFile" @input="getFile" :multiple="true" :label="'Chọn hình ảnh'"/>
          </div>
        </div>

        <div class="w-100 my-40px">
          <div class="row">
            <div class="col-6 pl-0">
              <button type="submit" class="btn btn-main w-100 btn-lg">
                <span v-if="objProject._id">CẬP NHẬT DỰ ÁN</span>
                <span v-else>THÊM DỰ ÁN</span>
              </button>
            </div>
            <div class="col-6 pr-0">
              <button @click="cancelPopup()" type="button" class="btn btn-main w-100 btn-lg bg-red">
                HUỶ BỎ
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>
<script>
import DemoHouse from '@/assets/img/demo-house.png'
import InputFile from '@/components/InputFile'
export default {
    props:['project','isEdit'],
    components:{
      InputFile
    },
    data(){
        return{
            demoHouse:DemoHouse,
            objProject:{},
            optionsCategory: this.getCategory(),
            accepFile:["png", "jpeg", "jpg", "tiff"],
            tempFile:null,
            arrFile:[],
            arrBase64:[]
        }
    },
    mounted(){
        this.objProject = {...this.project}
    },
    methods:{
        async createProject(){
            this.loader()
            var fileOld = this.objProject.photos || []
            var fileNew = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
            var fileAll = fileOld.concat(fileNew)
            this.objProject.photos = fileAll
            try{
              let res = await this.$post('member/portfolio',this.objProject)
              this.arrFile = [];
              this.arrBase64 = [];
              this.objProject = {};
              this.cancelPopup()
              this.loader(0)
            }
            catch(err){
              console.log(err);
              this.loader(0)
            }
        },
        async getFile(arrFile){
          this.arrFile = this.arrFile.concat(arrFile)
          var arrBase64 = []
          this.arrFile.forEach( async item => {
            var base64 = await this._toBase64(item);
            arrBase64.push({base64,name:item.name})
          })
          this.arrBase64 = arrBase64
        },
        cancelPopup(){
          this.$emit('parentEvent')
          this.objProject = {}
        },
        clearFile(file){
          this.arrBase64 = this.arrBase64.filter(item => item.base64 !== file.base64)
          this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        clearOldFile(file){
          this.objProject.photos = this.objProject.photos.filter(item => item !== file)
        }
    }
}
</script>
