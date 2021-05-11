<template>
     <div class="cover-edit-create">
      <div v-if="objProject._id" class="f-20 f-bold text-main mb-24px">
        Chỉnh sửa dự án
      </div>
      <div v-else class="f-20 f-bold text-main mb-24px">
        Thêm dự án
      </div>
      <form @click.prevent="createProject">
        <div class="editRow mb-15px">
          <div class="fieldLabel font-weight-bold f-13">Tên dự án<span style="color:red">*</span></div>
          <div class="fieldInput">
            <div class="form-group mb-0">
              <input
                type="text"
                class="form-control"
                required
                placeholder="Tên dự án bạn đã thực hiện"
                v-model="objProject.nameProject"
              />
            </div>
          </div>
        </div>

        <div class="editRow mb-15px">
          <div class="fieldLabel font-weight-bold f-13">Dịch vụ<span style="color:red">*</span></div>
          <div class="fieldInput">
            <div class=" mb-0">
              <treeselect
                :options="optionsCategory"
                :disable-branch-nodes="true"
                :value="objProject.category"
                v-model="objProject.category"
                :multiple="true"
                placeholder="Select"
            />
            </div>
          </div>
        </div>

        <div class="editRow mb-15px">
          <div class="fieldLabel font-weight-bold f-13">Mô tả chi tiết<span style="color:red">*</span></div>
          <div class="fieldInput">
            <div class="form-group mb-0">
              <textarea
                class="form-control"
                required
                placeholder="Mô tả chi tiết dự án bạn đã thực hiện"
                rows="8"
                v-model="objProject.detailProject"
              />
            </div>
          </div>
        </div>

        <div class="editRow mb-15px">
          <div class="fieldLabel font-weight-bold f-13">
            Hình ảnh đính kèm
          </div>
          <div class="fieldInput">
            <div>
              <button type="button" class="btn btn-main f-11">
                <img
                  class="mr-4px h-13px"
                  src="@/assets/svg/icon-upload.svg"
                  alt=""
                />
                Thêm hình ảnh
              </button>

              <i class="text-main f-11">png, jpg, tiff</i>
            </div>
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
export default {
    props:['project'],
    data(){
        return{
            objProject:{},
            optionsCategory: this.getCategory()
        }
    },
    mounted(){
        this.objProject = {...this.project,...this.objProject}
        console.log(this.objProject)
    },
    methods:{
        createProject(){
            console.log(this.objProject)
        }
    }
}
</script>