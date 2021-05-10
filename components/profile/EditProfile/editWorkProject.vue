<template>
  <div class="editProfileInfoWrap">
    <div class="mb-24px workedProjectWrap">
        <div class="f-20 f-bold text-main mb-15px">
            Dự án đã thực hiện
        </div>
        <div class="mb-24px text-black f-12">
            Vui lòng cung cấp thêm thông tin các dự án cũ bạn đã từng làm trước đây. Khách hàng thường xem qua hồ sơ năng lực rồi mới quyết định thuê.
        </div>
        <div class="group-project-items">
            <template v-for="(item,idx) in 6">
                <div :key="idx" class="col-md-3 col-md-4 col-sm-6 cover-item">
                    <div class="d-flex justify-content-end mb-5px">
                        <div class="group-function">
                            <img src="@/assets/svg/icon-edit-file.svg" />
                            <span>Chỉnh sửa</span>
                            <div class="height"></div>
                            <span>Xoá bỏ</span>
                        </div>
                    </div>
                    <div
                        class="item"
                        :style="{
                            'background-image': 'url(' + `${demoHouse}` + ')',
                        }"
                    >
                        <p class="location f-11">Biệt thự cổ điển Quận 9</p>
                    </div>
                </div>
            </template>
        </div>

        <div class="w-100 text-center">
            <p class="f-12 text-main">Xem thêm dự án <i class="fas fa-caret-down ml-5px"></i></p>
        </div>
    </div>
    <div>
      <div class="f-20 f-bold text-main mb-24px">
        Thêm dự án
      </div>
      <form>
        <div class="editRow mb-15px">
          <div class="fieldLabel">Tên dự án<span class="dot">*</span></div>
          <div class="fieldInput">
            <div class="form-group mb-0">
              <input
                type="text"
                class="form-control"
                required
                placeholder="Tên dự án bạn đã thực hiện"
              />
            </div>
          </div>
        </div>

        <div class="editRow mb-15px">
          <div class="fieldLabel">Dịch vụ<span class="dot">*</span></div>
          <div class="fieldInput">
            <div class="form-group mb-0">
              <select class="form-control">
                <option selected>Thi công xây dựng phần thô</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div class="editRow mb-15px">
          <div class="fieldLabel">Mô tả chi tiết<span class="dot">*</span></div>
          <div class="fieldInput">
            <div class="form-group mb-0">
              <textarea
                class="form-control"
                required
                placeholder="Mô tả chi tiết dự án bạn đã thực hiện"
                rows="8"
              />
            </div>
          </div>
        </div>

        <div class="editRow mb-15px">
          <div class="fieldLabel">
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
              <button type="button" class="btn btn-main w-100 btn-lg">
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
  </div>
</template>
<script>
import DemoHouse from '@/assets/img/demo-house.png'
export default {
    data(){
        return{
            demoHouse:DemoHouse
        }
    }
}
</script>
