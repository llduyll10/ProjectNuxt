<template>
    <div class="company-quote-owner" :class="[company && (company.survey.length) ? 'active' : 'border-0', bgWhite ? 'bg-white' : '' ]" >
        <div class="row cover">
            <div class="col-md-6 col-sm-12   pr-0 ">
                <div class="d-flex content-left">
                    <div>
                        <img v-if="company.auctionBy && company.auctionBy.photo" :src="company.auctionBy.photo" width="70" />
                        <div v-else class="cover-img" >
                           <span> {{company.auctionBy.company.slice(0,1).toUpperCase() || company.auctionBy.name.slice(0,1).toUpperCase()}}</span>
                        </div>
                    </div>
                    <div class="ml-1 ml-16px" style="width:100%">
                        <div class="mb-0 f-14 fw-600 main-black d-flex justify-content-between">
                            <p class="mb-0">{{company.auctionBy.company || company.auctionBy.name}}</p>
                            <div>
                                <img src="@/assets/svg/icon-location.svg" />
                                <span class="main-color text-11">{{company.auctionBy.province}}</span>
                            </div>
                        </div>
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
                                    {{formatNamePrice(company.step=== 3 ? company.deal[0].price: company.price)}}
                                </span>
                            </span>
                            <span class="px-11px"> | </span>
                            <span>Thời gian thi công -
                                <span class="fw-600 main-color text-13">
                                    {{company.step=== 3 ? company.deal[0].day : company.day}} ngày
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12 content-right">
                <!-- ACTIVE -->
                <div class="d-flex" v-if="company.deal.length">
                    <span class="description" >
                        {{ company.deal[0].message}}
                    </span>
                </div>

                <div v-if="company.deal.length &&  company.deal[0].attachments">
                    <template v-for="(item,idx) in company.deal[0].attachments">
                        <p :key="idx" class="f-11 text-main ">
                            <span v-html="returnTypeFile(item)" class="mr-5px"></span>
                            {{spliceURLFile(item,'--')}}
                        </p>
                    </template>
                </div>
                <div  class="list-payment">
                    <ul v-if="company.deal.length">
                        <li v-for="(pay,idx) in company.deal[0].payments" :key="idx">
                            <span>Thanh toán đợt {{idx+1}}</span> - <span class="text-main">{{pay.value}}</span>
                        </li>
                    </ul>
                </div>


                <div class="group-btn">

                    <div class="btn-send  mr-10px ml-0" >
                        <img  src="@/assets/svg/email.svg" alt="">
                        <span>Gửi tin nhắn</span>
                    </div>

                </div>


            </div>

        </div>
        <!-- Show Detail payment -->
        <DetailPaymentCompany :auction="company" />

    </div>
</template>
<script>
export default {
    props:['company','detailProject','rawCategory','bgWhite'],
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{

    }
}
</script>