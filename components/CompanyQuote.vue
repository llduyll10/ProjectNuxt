<template>
    <div>
    <div class="d-flex flex-wrap company-quote">
        <div class="infor-company col-12 d-flex pb-20px  px-0 justify-content-between">
            <div class="col-9 d-flex align-items-center">
                <div>
                    <img v-if="company.auctionBy && company.auctionBy.photo" :src="company.auctionBy.photo" width="70" height="75" />

                    <div v-else class="cover-img">
                        <span>{{company.auctionBy.company.slice(0,1).toUpperCase() || company.auctionBy.name.slice(0,1).toUpperCase()}}</span>
                    </div>
                </div>
                <div class="ml-1 ml-16px">
                <p class="mb-0 f-14 fw-600 main-black">{{company.auctionBy.company}}</p>
                <div class="d-inline-flex main-black pt-10px pb-10px">
                    <div class="star-rate mr-1">
                        5.0
                    </div>
                    <template v-for="(item, idx) in 4">
                        <div :key="idx+10" class="group-star">
                            <i class="fas fa-star mr-1px f-13 main-yellow"></i>
                        </div>
                    </template>
                    <span class="evaluate f-12 mb-0  ml-4px">
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
        <div class="col-auto">
            <img src="@/assets/svg/icon-location.svg" />
            <span class="main-color text-11">{{company.auctionBy.province}}</span>
        </div>
        </div>
        <div class="col-12">
            <div class="main-black text-13 break-line">{{company.description}}</div>
        </div>
        <div v-if="$auth && $auth.user  && $auth.user._id == company.auctionBy._id && company.step == 1" class="cover-btn">
            <div @click="viewSurvey()"  class="btn-send cup mr-10px ml-0" >
                <img  src="@/assets/svg/email.svg" alt="">
                <span>Xem yêu cầu khảo sát</span>
            </div>
        </div>
        <div v-if="$auth && $auth.user  && $auth.user._id == company.auctionBy._id && company.step == 2" class="cover-btn">
            <div  class="btn-send cup mr-10px ml-0" >
                <img  src="@/assets/svg/email.svg" alt="">
                <span>Xem yêu cầu thương lượng</span>
            </div>
        </div>
    </div>
    <hr class="hr" />
     <PopupViewSurvey v-if="company"
                        ref="popupViewSurvey"
                        :objProject="company"
                        :detailProject="detailProject"
                        :rawCategory="rawCategory"
                        @getListParent="getListQuote"
        />
    </div>
</template>
<script>
export default {
    props:['company','rawCategory','detailProject'],
    mounted(){
    },
    methods:{
        viewSurvey(){
            this.$refs.popupViewSurvey.show()
            this.$refs.popupViewSurvey.getInforPerchant(this.company)
        },
        getListQuote(){
            this.$emit('getDetailAgain')
        }
    }
}
</script>