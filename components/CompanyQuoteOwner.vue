<template>
    <div class="company-quote-owner" :class="company && company.survey.length ? 'active' : '' " >
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
                <!-- ACTIVE -->
                <template v-if="company && company.survey.length">
                    <div class="describe  d-flex">
                        <img src="@/assets/svg/icon-sand-lock.svg" alt="">
                        <span>Chưa xác nhận</span>
                    </div>
                    <div class="date-time ">
                        <div class="date">
                            <span>Ngày khảo sát - </span><span class="text-red">{{$moment(company.survey[0].date).format('DD/MM/YYYY')}} </span>
                        </div>
                        <div class="time">
                            <span>Giờ - </span><span class="text-red">{{checkShowTypeTime(company.survey[0].time)}} </span>
                        </div>
                    </div>
                    <div class="group-btn">
                        <div class="btn-send cancel" @click="openLienHeMail()">
                            <img src="@/assets/svg/icon-cancel.svg" alt="">
                            <span>Huỷ khảo sát</span>
                        </div>
                        <div class="btn-send cup" @click="openPopupSurvey()">
                            <img src="@/assets/svg/icon-user-light.svg" alt="">
                            <span>Thông tin liên hệ</span>
                        </div>
                    </div>
                </template>
                <!-- NOT ACTIVE -->
                <template v-else>
                    <div class="describe ">{{company.description}}</div>
                    <div class="group-btn">
                        <div class="btn-send" @click="openLienHeMail()">
                            <img src="@/assets/svg/email.svg" alt="">
                            <span>Gửi tin nhắn</span>
                        </div>
                        <div class="btn-send cup" @click="openPopupSurvey()">
                            <img src="@/assets/svg/icon-cup.svg" alt="">
                            <span>Hẹn khảo sát</span>
                        </div>
                    </div>
                </template>
            </div>

        </div>

        <PopupLienheform ref="LienHeFormPop" :isService="true" :title="detailProject.name" :rawCategory="rawCategory" />
        <PopupSurvey ref="surveyPopup" :detailProject="detailProject" :rawCategory="rawCategory"  @activeCompany="getActiveCompany" />
    </div>
</template>
<script>
export default {
    props:['company','detailProject','rawCategory'],
    data(){
        return{
            isActive:false
        }
    },
    mounted(){
    },
    methods:{
        openLienHeMail(){
            this.$refs.LienHeFormPop.show();
            this.$refs.LienHeFormPop.getInforPerchant(this.company);
        },
        openPopupSurvey(){
            this.$refs.surveyPopup.show();
            this.$refs.surveyPopup.getInforPerchant(this.company);
        },
        getActiveCompany(){
            this.$emit('getDetailAgain')
        },
        checkShowTypeTime(time){
            var hour = time.toString().split(':')
            if(Number(hour[0]) <= 12){
                return `${time} AM`
            }
            else{
                return `${time} PM`
            }
        }
    }
}
</script>