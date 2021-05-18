<template>
     <form @submit.prevent="getForm()" class="group-content">
        <div class="form-group row mb-25px">
            <label class="f-13 col-md-3 col-sm-12 font-weight-bold">
                Chi phí ước tính
                <span style="color:red">*</span>
            </label>
            <div class="col-md-9 col-sm-12">
                <currency-input
                    type="text"
                    class="form-control"
                    required
                    placeholder="200,000,000"
                    v-model="objForm.price"
                />
                <p class="mb-0 mt-5px f-12 main-black">
                Phí hoa hồng nếu trúng thầu -
                <span class="main-color font-weight-bold">500</span> <span class="font-weight-bold">Tokens</span>
                </p>
            </div>
        </div>
        <div class="form-group row mb-25px">
            <label class="f-13 col-md-3 col-sm-12 font-weight-bold">
                Kinh nghiệm, Năng lực và giải pháp đề xuất
                <span style="color:red">*</span>
            </label>
            <div class="col-md-9 col-sm-12">
            <textarea v-model="objForm.description" required id="customPlaceholder" class="form-control main-black " rows="5"
                        placeholder=
                        " 1. Mô tả kinh nghiệm & năng lực của bạn \n 2. Tại sao chủ đầu tư phải chọn bạn thi công công trình này? \n 3. Đề xuất giải pháp thi công của bạn sau khi xem xét yêu cầu của chủ đầu tư"
                    ></textarea>
            </div>
        </div>
        <div class="form-group row mb-25px">
            <label class="f-13 col-md-3 col-sm-12 font-weight-bold">
                Thời gian thi công dự trù
                <span style="color:red">*</span>
            </label>
            <div class="col-md-3 col-sm-12">
                <input v-model="objForm.day" @keypress="isNumber($event)" type="text" class="form-control "/>
            </div>
        </div>
        <div class="form-group row mb-25px">
            <label class="f-13 col-md-3 col-sm-12 font-weight-bold">
                Tài liệu đính kèm
                <span style="color:red">*</span>
            </label>
            <div class="col-md-9 col-sm-12">
                <InputFile :accept="accepFile" @input="getFile" :multiple="true" :label="'Thêm tài liệu'"/>
            </div>
        </div>
        <div class="form-group mb-50px group-checkbox">
            <b-form-checkbox
                v-model="objForm.status"
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
                    type="button"
                    class=" btn btn-primary main-bg-color radius-5 w-100  btn-brown text-16 pr-0 fw-700"
                >
                    LƯU BẢN NHÁP
                </button>
            </div>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return{
            objForm:{
                status:false,
            },
            accepFile:["png", "jpg", "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"]
        }
    },
    methods:{
        getForm(){

        },
        getFile(){

        }
    }

}
</script>