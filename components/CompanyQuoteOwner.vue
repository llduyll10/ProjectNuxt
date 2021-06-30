<template>
    <div class="company-quote-owner" :class="[company && (company.survey.length) ? 'active' : 'border-0', bgWhite ? 'bg-white': '' ]" >
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
                <template v-if="company && company.survey.length">

                    <template v-if="company.step == 0">
                        <div class="describe  d-flex">
                            <img src="@/assets/svg/icon-sand-lock.svg" alt="">
                            <span>Chưa xác nhận</span>
                        </div>
                        <div class="date-time ">
                            <div class="date">
                                <span>Ngày khảo sát - </span><span class="text-red">{{$moment(company.survey[0].date).format('DD/MM/YYYY')}} </span>
                            </div>
                            <div class="time">
                                <span>Giờ - </span><span class="text-red">{{company.survey[0].time}} </span>
                            </div>
                        </div>
                        <div class="group-btn">
                            <div class="btn-send cancel" @click="openPopupSurvey('CANCEL')">
                                <img src="@/assets/svg/icon-cancel.svg" alt="">
                                <span>Huỷ khảo sát</span>
                            </div>
                            <div class="btn-send cup" @click="openCustomerContact()">
                                <img src="@/assets/svg/icon-user-light.svg" alt="">
                                <span>Thông tin liên hệ</span>
                            </div>
                        </div>

                    </template>



                    <template v-else-if="company.step == 1">
                        <div class="describe d-flex">
                            <img  class="icon-check" src="@/assets/svg/icon-check-blue.svg" alt="" >
                            <span>Đã xác nhận</span>
                        </div>
                        <div class="date-time ">
                            <div class="date">
                                <span>Ngày khảo sát - </span><span class="text-red">{{$moment(company.survey[0].date).format('DD/MM/YYYY')}} </span>
                            </div>
                            <div class="time">
                                <span>Giờ - </span><span class="text-red">{{company.survey[0].time}} </span>
                            </div>
                        </div>
                        <div class="group-btn">
                            <div class="btn-send" @click="openLienHeMail()">
                                <img src="@/assets/svg/email.svg" alt="">
                                <span>Gửi tin nhắn</span>
                            </div>
                            <div class="btn-send cup" @click="openCustomerContact()">
                                <img src="@/assets/svg/icon-user-light.svg" alt="">
                                <span>Thông tin liên hệ</span>
                            </div>
                        </div>
                    </template>
                    <!-- IS NEGOTIATE -->

                    <template v-else-if="company.step===3">
                        <template v-if="company.deal.length && company.deal[0].status == 'CANCEL' ">
                            <div class="describe  d-flex">
                                <i class="fas fa-times text-red f-16 mt-5px mr-5px"></i>
                                <span class="text-red">Nhà thầu từ chối thương lượng</span>
                            </div>
                        </template>
                         <template v-else-if="company.deal.length && company.deal[0].status == 'OK' ">
                            <div class="describe d-none">
                            </div>
                        </template>
                        <template v-else >
                            <div class="describe  d-flex">
                                <img src="@/assets/svg/icon-sand-lock.svg" alt="">
                                <span>Đang thương lượng</span>
                            </div>
                        </template>

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
                            <template v-if=" company.step == 3 && company.deal.length && company.deal[0].status == 'CANCEL' ">
                                <div @click="openDeal()" class="btn-send cup mr-10px ml-0" >
                                    <img  src="@/assets/svg/email.svg" alt="">
                                    <span>Xem tin nhắn</span>
                                </div>
                            </template>
                            <template v-else-if=" company.step == 3 && company.deal.length && company.deal[0].status == 'OK' ">
                                <div @click="openLienHeMail()" class="btn-send  mr-10px ml-0" >
                                    <img  src="@/assets/svg/email.svg" alt="">
                                    <span>Gửi tin nhắn</span>
                                </div>
                            </template>
                            <template v-else >
                                <div @click="openSurveyUpdate('UPDATE')" class="btn-send cup mr-10px ml-0">
                                    <img  src="@/assets/svg/icon-user-light.svg" alt="" class="mb-2px" >
                                    <span>Cập nhật</span>
                                </div>
                            </template>

                            <template v-if="company.step == 3 && company.deal.length && company.deal[0].status == 'OK' ">
                                <div  class="btn-send cancel  mr-10px ml-0" >
                                    <img  src="@/assets/svg/icon-final-project.svg" alt="">
                                    <span>Kết thúc dự án</span>
                                </div>
                            </template>

                            <div v-else class="btn-send cancel " @click="destroyDeal(company)">
                                <img src="@/assets/svg/icon-cancel.svg" alt="">
                                <span>Huỷ thương lượng</span>
                            </div>
                        </div>

                    </template>

                    <!-- QUOTE UPDATE -->
                    <template v-else-if="company.step===2">

                        <template v-if="company.statusUpdate == 'ACTIVE'">
                            <div class="describe  d-flex">
                                <img class="icon-check" src="@/assets/svg/icon-check-blue.svg">
                                <span>Báo giá cập nhật</span>
                             </div>

                             <div class="d-flex">
                                <span class="description" >
                                    {{ company.description}}
                                </span>
                            </div>

                            <div v-if="company.attachments">
                                <template v-for="(item,idx) in company.attachments">
                                    <p :key="idx" class="f-11 text-main ">
                                        <span v-html="returnTypeFile(item)" class="mr-5px"></span>
                                        {{spliceURLFile(item,'--')}}
                                    </p>
                                </template>
                            </div>

                             <div v-if="company.payments" class="list-payment">
                                <ul>
                                    <li v-for="(pay,idx) in company.payments" :key="idx">
                                        <span>Thanh toán đợt {{idx+1}}</span> - <span class="text-main">{{pay.value}}</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="group-btn">
                               <div @click="openLienHeMail()" class="btn-send  mr-10px ml-0" >
                                    <img  src="@/assets/svg/email.svg" alt="">
                                    <span>Gửi tin nhắn</span>
                                </div>
                                <div @click="openSurveyUpdate()" class="btn-send cup mr-10px ml-0">
                                    <img  src="@/assets/svg/icon-user-light.svg" alt="">
                                    <span>Thương lượng</span>
                                </div>
                            </div>

                        </template>


                        <template v-else>
                            <div class="d-flex">
                                <span class="description" >
                                    {{ company.description}}
                                </span>
                            </div>

                            <div v-if="company.attachments">
                                <template v-for="(item,idx) in company.attachments">
                                    <p :key="idx" class="f-11 text-main ">
                                        <span v-html="returnTypeFile(item)" class="mr-5px"></span>
                                        {{spliceURLFile(item,'--')}}
                                    </p>
                                </template>
                            </div>
                        </template>

                    </template>


                </template>
                <!-- NOT ACTIVE -->
                <template v-else>
                    <div class="describe ">{{company.description}}</div>
                    <div class="group-btn">
                        <div class="btn-send" @click="openLienHeMail()">
                            <img src="@/assets/svg/email.svg" alt="">
                            <span>Gửi tin nhắn</span>
                        </div>
                        <div v-if="!company.isDestroy" class="btn-send cup" @click="openPopupSurvey()">
                            <img src="@/assets/svg/icon-survey.svg" alt="" style="margin-top:-2px">
                            <span>Hẹn khảo sát</span>
                        </div>
                    </div>
                </template>
            </div>

        </div>
        <!-- Show Detail payment -->
        <template v-if="company.step == 3 && company.deal.length && company.deal[0].status == 'OK' ">
            <DetailPayment :auction="company" :detailProject="detailProject" />
        </template>

        <PopupLienheform ref="LienHeFormPop" :isService="true" :title="detailProject.name" :rawCategory="rawCategory" />
        <PopupSurvey ref="surveyPopup" :detailProject="detailProject" :rawCategory="rawCategory"  @activeCompany="getActiveCompany" />
        <PopupSurveyUpdate ref="surveyUpdate" v-if="company" :surveryUpdate="surveryUpdate"  :objCompany="company" :detailProject="detailProject" :rawCategory="rawCategory" @activeCompany="getActiveCompany" />
        <PopupDealUpdate ref="dealUpdate" v-if="company"  :objCompany="company" :detailProject="detailProject" :rawCategory="rawCategory" @activeCompany="getActiveCompany" />
        <PopupSurveyCustomerContact ref="customerContact" v-if="company" :objConfirm="company" />
    </div>
</template>
<script>
export default {
    props:['company','detailProject','rawCategory','bgWhite'],
    data(){
        return{
            isActive:false,
            surveryUpdate:false
        }
    },
    mounted(){
    },
    methods:{
        openLienHeMail(){
            this.$refs.LienHeFormPop.show();
            this.$refs.LienHeFormPop.getInforPerchant(this.company);
        },
        openPopupSurvey(status){
            this.$refs.surveyPopup.show();
            this.$refs.surveyPopup.getInforPerchant(this.company);
            if(status == 'CANCEL'){
                this.$refs.surveyPopup.setCancelPopup(true)
            }
            else{
                this.$refs.surveyPopup.setCancelPopup(false)
            }
        },
        destroyDeal(item){
            this.loader()
            var obj = {
                project:item.deal[0].project,
                auction:item.deal[0].auction
            }
            this.$post('member/auction/deal/destroy',obj)
                .then(res =>{
                    this.getActiveCompany()
                    this.loader(0)
                })
                .catch(err => {
                    this.loader(0)
                })
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
        },
        openSurveyUpdate(status){
            if(status == 'UPDATE'){
                this.surveryUpdate = true
            }
            this.$refs.surveyUpdate.show()
        },
        openDeal(){
            this.$refs.dealUpdate.show()
        },
        openCustomerContact(){
            this.$refs.customerContact.show()
        }
    }
}
</script>