<template>
    <section v-if="profile" id="infor-component">
        <div   class="cover-img"
                :style="{
                    'background-image': 'url(' + `${profile.photo}` + ')',
                }"
        >
            <div class="stt">
                <p class="f-11"><img class="pb-5px" src="@/assets/svg/icon-location-white.svg" /> {{profile.province}}</p>
            </div>
        </div>
        <div class="group-star d-flex mt-20px mb-20px">
            <div class="star-number mr-4px">
                <p class="f-10">5.0</p>
            </div>
            <template v-for="(item,idx) in 5">
                <div :key="idx">
                    <i class="fas fa-star mr-1px f-13"></i>
                </div>
            </template>
            <p class="evaluate f-12 mb-0 mt-5px ml-4px">(<span>5</span>  đánh giá)</p>
        </div>
        <div class="btn-contact">
            <img src="@/assets/svg/icon-phone.svg" />
            <span>Liên hệ trực tiếp</span>
        </div>
        <div class="btn-contact email">
            <img src="@/assets/svg/icon-email.svg" />
            <span>Gửi tin nhắn</span>
        </div>
        <div class="btn-contact">
            <img src="@/assets/svg/icon-user-light.svg" />
            <span>Cập nhật hồ sơ</span>
        </div>
    </section>
</template>

<script>
import ImgProfile from '@/assets/svg/longb.svg'
export default {
    props:['profile'],
    data(){
        return {
            imgProfile: ImgProfile
        }
    }
}
</script>