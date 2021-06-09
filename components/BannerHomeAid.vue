<template>
    <div id="bannerInfo">
        <div class="banner">
            <div class="img-slider"
                :style="{
                'background-image': 'url(' + `${bannerImg}` + ')',
                }">
                <div class="content-banner">
                    <div class="sub-title f-20 homeaid">
                        <span>HomAid</span> mong muốn cung cấp một nền tảng kết nối hiệu quả nhất giúp cho chủ đầu tư & đơn vị thi công có thể tương tác và làm việc cùng nhau dễ dàng hơn.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BannerImg from "@/assets/svg/bannerhomaid.svg";

export default {
    data(){
        return {
            bannerImg : BannerImg
        }
    }
}
</script>