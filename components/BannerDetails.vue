<template>
    <div id="bannerDetails">
        <div class="banner">
            <div class="img-slider"
                :style="{
                'background-image': 'url(' + `${bannerImg}` + ')',
                }">
                <div class="content-banner">
                    <div class="big-title f-37 mb-24px">
                        Phải biết: Mức độ tăng giá hơn 30 dự án nhà phố, biệt thự tại Quận 9
                    </div>
                    <div class="sub d-flex">
                        <div class="author f-16 d-flex">
                            <img src="@/assets/svg/longDetails.svg" alt="">
                            <div class="text f-16 ml-8px">
                                Bởi <span>Longb04</span>
                            </div>
                        </div>
                        <div class="date">
                            20/05/2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BannerImg from "@/assets/svg/bannerDetails.svg";

export default {
    data(){
        return {
            bannerImg : BannerImg
        }
    }
}
</script>