<template>
    <section id="infor">
        <img src="@/assets/svg/longb.svg" alt="">
        <div class="group-star d-flex">
            <template v-for="(item,idx) in 5">
                <div :key="idx">
                    <i class="fas fa-star mr-3px f-13"></i>
                </div>
            </template>
            <p>(<span>5</span>  đánh giá)</p>
        </div>
        <div class="btn-contact">
            <img src="@/assets/img/icon-phone.png" />
            <span>Liên hệ trực tiếp</span>
        </div>
        <div class="btn-contact">
            <img src="@/assets/img/icon-email.png" />
            <span>Gửi tin nhắn</span>
        </div>
        <div class="btn-contact">
            <img src="@/assets/img/icon-user.png" />
            <span>Cập nhật hồ sơ</span>
        </div>
    </section>
</template>
<script>
export default {

}
</script>