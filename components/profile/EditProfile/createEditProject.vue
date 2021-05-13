<template>
     <div class="createEditComponent">
      <div v-if="objProject._id" class="f-20 f-bold text-main mb-24px">
        Chỉnh sửa dự án
      </div>
      <div v-else class="f-20 f-bold text-main mb-24px">
        Thêm dự án
      </div>
      <form @submit.prevent="createProject">
        <div class="editRow mb-15px form-group row">
          <div class="fieldLabel font-weight-bold f-13 col-md-3 col-sm-12">Tên dự án<span style="color:red">*</span></div>
          <div class="fieldInput col-md-9 col-sm-12">
            <div class="form-group mb-0">
              <input
                type="text"
                class="form-control"
                required
                placeholder="Tên dự án bạn đã thực hiện"
                v-model="objProject.name"
              />
            </div>
          </div>
        </div>

        <div class="editRow mb-15px form-group row">
          <div class="fieldLabel font-weight-bold f-13 col-md-3 col-sm-12">Dịch vụ<span style="color:red">*</span></div>
          <div class="fieldInput col-md-9 col-sm-12">
            <div class=" mb-0">
              <treeselect
                :options="optionsCategory"
                :disable-branch-nodes="true"
                :value="objProject.category"
                v-model="objProject.category"
                :multiple="true"
                placeholder="Chọn dịch vụ"
            />
            </div>
          </div>
        </div>

        <div class="editRow mb-15px form-group row">
          <div class="fieldLabel font-weight-bold f-13 col-md-3 col-sm-12">Mô tả chi tiết<span style="color:red">*</span></div>
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
        </div>
        <!-- Old file -->
        <div v-if="objProject.photos || arrFile.length" class="editRow mb-15px form-group row">
          <div class="fieldLabel font-weight-bold f-13 col-md-3 col-sm-12">Hình ảnh dự án<span style="color:red">*</span></div>
          <div class="fieldInput col-md-9 col-sm-12">
              <div class="row pl-15px">
                  <!-- OLD FILE -->
                  <template v-if="objProject.photos">
                    <template v-for="(item,idx) in objProject.photos">
                        <div class="col-sm-6 pl-0" :key="idx">
                            <div
                                  class="itemComponent"
                                  :style="{
                                      'background-image': 'url(' + `${item}` + ')',
                                  }"
                              >
                              <i @click="clearOldFile(item)" class="fas fa-times text-red"></i>
                              </div>
                        </div>
                    </template>
                  </template>
                  <!-- NEW FILE -->
                  <template v-else>
                    <template v-for="(item,idx) in arrBase64">
                        <div class="col-sm-6 pl-0" :key="idx">
                            <div
                                  class="itemComponent"
                                  :style="{
                                      'background-image': 'url(' + `${item}` + ')',
                                  }"
                              >
                              <i @click="clearFile(item)" class="fas fa-times text-red"></i>
                            </div>

                        </div>
                    </template>
                  </template>

              </div>
          </div>
        </div>
        <div class="editRow mb-15px form-group row">
          <div class="fieldLabel font-weight-bold f-13 col-md-3 col-sm-12">
            Hình ảnh đính kèm
          </div>
          <div class="fieldInput col-md-9 col-sm-12">
              <InputFile :accept="accepFile" @input="getFile" :multiple="true" :label="'Chọn hình ảnh'"/>
          </div>
        </div>

        <div class="w-100 my-40px">
          <div class="row">
            <div class="col-6">
              <button type="submit" class="btn btn-main w-100 btn-lg">
                THÊM DỰ ÁN
              </button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-main w-100 btn-lg bg-red">
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
    props:['project'],
    components:{
      InputFile
    },
    data(){
        return{
            demoHouse:DemoHouse,
            objProject:{},
            optionsCategory: this.getCategory(),
            accepFile:["png", "jpg", "tiff"],
            tempFile:null,
            arrFile:[],
            arrBase64:[]
        }
    },
    mounted(){
        this.objProject = {...this.project,...this.objProject}
        console.log('this.objProject mounted',this.objProject)
    },
    methods:{
        async createProject(){
            this.loader()
            var fileOld = this.objProject.photo || []
            var fileNew = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
            var fileAll = fileOld.concat(fileNew)
            if(fileAll.length){
              this.objProject.photos = fileAll
            }
            console.log("this.objProject",this.objProject)
            try{
              let res = await this.$post('/member/portfolio',this.objProject)
              console.log('ressss',res);
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
            var item = await this._toBase64(item);
            arrBase64.push(item)
          })
          this.arrBase64 = arrBase64
          console.log('arrBase64',this.arrBase64)
        },
        clearFile(file){
          this.arrBase64 = this.arrBase64.filter(item => item !== file)
        },
        clearOldFile(file){
          this.objProject.photo = this.objProject.photo.filter(item => item !== file)
        }
    }
}
</script>
