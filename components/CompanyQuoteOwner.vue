<template>
    <div class="company-quote-owner">
        <div class="row">
            <div class="col-md-6 col-sm-12   px-0 ">
                <div class="d-flex content-left">
                    <div>
                        <img v-if="company.auctionBy && company.auctionBy.photo" :src="company.auctionBy.photo" width="70" height="75" />
                        <div v-else class="cover-img" style="width:70px;height:75px"></div>
                    </div>
                    <div class="ml-1 ml-16px" style="width:100%">
                        <div class="mb-0 f-14 fw-600 main-black d-flex justify-content-between">
                            <p>{{company.auctionBy.company || company.auctionBy.name}}</p>
                            <div>
                                <img src="@/assets/svg/icon-location.svg" />
                                <span class="main-color text-11">{{company.auctionBy.province}}</span>
                            </div>
                        </div>
                        <div class="d-inline-flex main-black py-11px">
                            <div
                            class="badge badge-warning d-inline-flex align-items-center text-white py-3px text-10 mr-1"
                            >
                            5.0
                            </div>
                            <template v-for="(item, idx) in 4">
                            <div :key="idx+10">
                                <i
                                class="fas fa-star mr-1px f-13 main-yellow"
                                ></i>
                            </div>
                            </template>
                            <span class="evaluate f-12 mb-0 mt-5px ml-4px">
                            (<span class="main-yellow">4</span> đánh giá)
                            </span>
                        </div>
                        <div class="text-11 color-grey">
                            <span>Chi phí ước tính -
                                <span class="fw-600 main-color text-13">
                                    {{formatNamePrice(company.price)}}
                                </span>
                            </span>
                            <span class="px-11px"> | </span>
                            <span>Thời gian thi công -
                                <span class="fw-600 main-color text-13">
                                    {{company.day}} ngày
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12 content-right">
                <div class="describe ">{{company.description}}</div>
                <div class="group-btn">
                    <div class="btn-send">
                        <img src="@/assets/svg/email.svg" alt="">
                        <span>Gửi tin nhắn</span>
                    </div>
                    <div class="btn-send cup">
                        <img src="@/assets/svg/icon-cup.svg" alt="">
                        <span>Hẹn khảo sát</span>
                    </div>
                </div>
            </div>

        </div>
        <hr class="hr" />
    </div>
</template>
<script>
export default {
    props:['company'],
    mounted(){
    },
    methods:{

    }
}
</script>