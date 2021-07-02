<template>
    <div id="bannerInfo">
        <div class="banner">
            <div class="img-slider"
                :style="{
                'background-image': 'url(' + `${bannerImg}` + ')',
                }">
                <div class="content-banner">
                    <div class="sub-title homeaid">
                        Bạn cần xây/sửa nhà? nhưng đang lo lắng về việc chọn lựa đơn vị thi công phù hợp? Hãy để <span>HomAid</span> giúp bạn
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BannerImg from "@/assets/svg/banner-home-aid.svg";

export default {
    data(){
        return {
            bannerImg : BannerImg
        }
    }
}
</script>