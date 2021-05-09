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

            <div class="editRow">
                <div class="fieldLabel">
                    Người đại diện <span class="dot">*</span>
                </div>
                <div class="fieldInput">
                    <div class="form-group mb-0">
                        <input
                            type="text"
                            class="form-control col-md-9 col-sm-12"
                            required
                            placeholder="Họ và Tên"
                        />
                    </div>
                </div>
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