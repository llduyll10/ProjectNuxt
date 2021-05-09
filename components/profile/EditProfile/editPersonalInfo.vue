<template>
    <div class="editProfileInfoWrap">
        <div class="f-20 f-bold text-main mb-24px">
            Thông tin cá nhân
        </div>
        <form>
            <div class="editRow mb-15px">
                <div class="fieldLabel">
                    Hình ảnh đại diện <span class="info">(Dưới 1MB)</span>
                </div>
                <div class="fieldInput">
                    <div>
                        <img class="uploadReview" src="@/assets/img/longb.png" alt=""/>
                    </div>
                    <div>
                        <button type="button" class="btn btn-main f-11">
                            <img src="@/assets/svg/upload.svg" alt=""/>
                            Choose file
                        </button>

                        <i class="text-main f-11">png, jpg, tiff, pdf, xls, doc, ppt, zip, rar</i>
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
                            placeholder="Họ và Tên"
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
                        <select class="form-control">
                            <option selected>Tỉnh thành</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
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
                        />
                    </div>
                </div>
            </div>

            <div class="w-100 my-40px">
                <button type="button" class="btn btn-main w-100 btn-lg">
                    CẬP NHẬT THÔNG TIN
                </button>
            </div>
        </form>
    </div>

</template>
<script>
export default {
    components: {
    },
    data(){
        return{
        }
    },
}
</script>