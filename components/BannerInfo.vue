<template>
    <div id="bannerInfo">
        <div class="banner">
            <div class="img-slider"
                :style="{
                'background-image': 'url(' + `${bannerImg}` + ')',
                }">
                <div class="content-banner">
                    <div class="big-title f-35 mb-24px">
                        Thông tin thị trường
                    </div>
                    <div class="sub-title f-18">
                        Cung cấp Thông tin chính xác & chuyên nghiệp nhất
                    </div>
                </div>
            </div>
            <div class="contactLine d-flex align-items-center">
                <div class="container-fluid">
                    <div class="wrapAll d-flex">
                        <div class="wrapContact d-flex">
                            <div class="contactItem d-flex">
                                <img src="@/assets/svg/bannerIcon1.svg" class="mr-15px" alt="">
                                <div class="text">1-800-1234-567</div>
                            </div>
                            <div class="contactItem d-flex">
                                <img src="@/assets/svg/bannerIcon2.svg" class="mr-15px" alt="">
                                <div class="text">Support@econs.vn</div>
                            </div>
                            <div class="contactItem d-flex">
                                <img src="@/assets/svg/bannerIcon3.svg" class="mr-15px" alt="">
                                <div class="text">fb.com/econs</div>
                            </div>
                        </div>
                        <div class="searchWrap d-flex">
                            <label>
                                <img src="@/assets/svg/search-top2.svg" class="mt-1px mr-8px" alt="">
                            </label>
                            <input type="text" class="f-12 mr-6px" placeholder="Tìm kiếm">
                            <div class="searchText">Tìm kiếm</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BannerImg from "@/assets/svg/bannerInfo.svg";

export default {
    data(){
        return {
            bannerImg : BannerImg
        }
    }
}
</script>