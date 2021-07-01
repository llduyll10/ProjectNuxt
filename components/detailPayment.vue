<template>
    <div class="detail-payment-component" v-if="auction" >
        <div class="group-payment">
            <p class="fw-600 f-16 mb-16px">Thanh toán</p>
            <div v-for="(item,idx) in auction.deal[0].payments" :key="idx" class="d-flex">
                <span style="width:15%" class="item">Thanh toán đợt {{idx+1}}</span>
                <span style="width:25%" class="item text-left fw-600" >{{item.value}}</span>

                <span v-if="arrRequiredPayment && item.paymentAuction"
                        style="width:20%;text-decoration:underline;"
                        class="item text-left text-underline fw-600 text-main cursor-pointer"
                        @click="openModalRequiredUpdate(item.paymentAuction,idx)">
                    Đề nghị thanh toán_Đợt {{idx+1}}
                </span>
                <span   v-else style="width:20%"
                        class="item text-left cursor-pointer main-black"
                        >
                    Chưa có đề nghị thanh toán
                </span>


                <span   style="width:20%" class="item text-center fw-600 text-main"
                        v-if="arrRequiredPayment && item.paymentAuction"
                >
                    {{formatVnd(item.paymentAuction.price)}} VND
                </span>

                <span   v-else style="width:20%" class="item">

                 </span>

                <template v-if="arrRequiredPayment && item.paymentAuction && item.paymentAuction.status != 'DRAFT' && item.paymentAuction.status != 'CANCEL'">
                    <span v-if="item.paymentAuction.status == 'DONE'" style="width:20%" class="item fw-600 text-main" >
                        <img  src="@/assets/svg/icon-check-blue.svg" alt=""> Đã thanh toán
                    </span>
                    <span v-else-if="item.paymentAuction.status == 'PENDING' " style="width:20%" class="item fw-500 text-main">
                        <img src="@/assets/svg/icon-sand-lock.svg" alt="" class="mb-2px"> Chờ xác nhận
                    </span>

                </template>
                <template v-else>
                    <span style="width:20%" class="item"></span>
                </template>
                <!-- <span v-else style="width:20%" class="item fw-600 text-main">
                    <b-dropdown id="dropdown-payment"  variant="link" toggle-class="text-decoration-none" class="custom-infor" no-caret>
                        <template #button-content>
                            <img src="@/assets/svg/icon-sand-lock.svg" alt=""> Yêu cầu xác nhận
                        </template>
                        <b-dropdown-item class="f-12">
                            Xác nhận thanh toán
                        </b-dropdown-item>
                        <b-dropdown-item class="f-12">
                            Chưa nhận thanh toán
                        </b-dropdown-item>
                </b-dropdown>

                </span> -->
            </div>
        </div>




        <div class="group-progress">
            <p class="fw-600 f-16 mt-25px mb-16px">Báo cáo tiến độ</p>
            <div v-for="(item,idx) in auction.deal[0].payments" :key="idx" class="d-flex">
                <span style="width:15%" class="item">{{idx+1}}. Tuần {{idx+1}}</span>

                <span
                    v-if="arrReport.length && item.reportAuction"
                    style="width:25%;text-decoration:underline"
                    class="item text-left fw-600 text-main cursor-pointer"
                    @click="openModalReport(item.reportAuction)"
                >
                    Tiến độ thi công tuần thứ {{idx+1}}
                </span>
                <span
                    v-else
                    style="width:25%"
                    class="item text-left fw-500 text-red"
                >
                   Chưa cập nhật
                </span>

                <span style="width:60%" class="item d-flex" v-if="arrReport.length && item.reportAuction">
                    Đánh giá:
                    <Rating  :rating="item.reportAuction.rating ? item.reportAuction.rating : 0"
                            @rating="getRating"
                            :report="item.reportAuction" />
                </span>

            </div>
        </div>
        <!-- Popup payment -->
        <PopupPaymentCustomerCreateRequired
            ref="customerCreateRequired"
            @requiredPayment="getObjRequiredPayment"
            :project="detailProject"
            :activeRow="activeRow"
            :auction="auction"
        />
        <PopupPaymentCustomerCreateReport
            ref="customerCreateReport"
            :project="detailProject"
            :auction="auction"
        />
    </div>
</template>
<script>
export default {
    props:['auction','detailProject'],
    data(){
        return{
            statusPayment:1,
            activeRow:0,
            arrRequiredPayment:[],
            arrReport:[],
        }
    },
    mounted(){
        this.getPaymentByAuction()
        this.getReportByAuction()
    },
    methods:{
        getObjRequiredPayment(obj){
            var objRequired = {
                ...obj,
                paymentId: objRequired ? objRequired.paymentId : this.activeRow,
                project:this.auction.deal[0].project,
                auction:this.auction.deal[0].auction,
                ownerProject:this.detailProject.createBy._id
            }
            this.loader()
            this.$post('member/payments',objRequired)
                .then(res => {
                    var objNext = {
                        project:this.auction.deal[0].project,
                        auction:this.auction.deal[0].auction,
                    }
                    return  this.$post('member/payments-by-auction',objNext)
                })
                .then(res2 => {
                    this.arrRequiredPayment = res2.data
                    this.auction.deal[0].payments.forEach(item => delete item.paymentAuction)
                    this.mapAuction()

                    this.loader(0)
                })
                .catch(err => {
                    this.loader(0)
                })
        },
        getPaymentByAuction(){
            var obj = {
                project:this.auction.deal[0].project,
                auction:this.auction.deal[0].auction,
            }
            this.$post('member/payments-by-auction',obj)
                .then(res => {
                    this.arrRequiredPayment = res.data
                    this.mapAuction()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        mapAuction(){
            var arrTmp1 = JSON.parse(JSON.stringify(this.auction.deal[0].payments)) || []
            var arrTmp2 = this.arrRequiredPayment
            arrTmp1.forEach((item1,index) => {
                arrTmp2.forEach(item2 => {
                    if(index == item2.paymentId && item2.status != 'DRAFT' && item2.status != 'CANCEL' ){
                        item1.paymentAuction = item2
                    }
                })
            })
            this.auction.deal[0].payments = arrTmp1
        },
        //Report
        getReportByAuction(){
            var obj = {
                project:this.auction.deal[0].project,
                auction:this.auction.deal[0].auction,
            }
            this.$post('member/reports-by-auction',obj)
                .then(res => {
                    console.log('getReportByAuction',res)
                    this.arrReport = res.data
                    this.mapReport()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        mapReport(){
            var arrTmp1 = JSON.parse(JSON.stringify(this.auction.deal[0].payments)) || []
            var arrTmp2 = JSON.parse(JSON.stringify(this.arrReport)) || []
            arrTmp1.forEach((item1,index) => {
                arrTmp2.forEach(item2 => {
                    if(index == item2.reportId && item2.status != 'DRAFT'){
                        item1.reportAuction = item2
                    }
                })
            })
            this.auction.deal[0].payments = arrTmp1
            console.log('mapReport',this.auction.deal[0].payments)
        },
        //Rating
        getRating(objRating){
            // this.loader()
            var obj = {
                rating:objRating.rating+1,
                _id:objRating._id,
                project:objRating.project,
                auction:objRating.auction
            }
            this.$post('member/reports-rating',obj)
                .then(res => {
                    console.log('rating api',res)
                    this.getReportByAuction()
                    this.loader(0)
                })
                .catch(err => {
                    console.log(err)
                    this.loader(0)
                })

        },
        openModalRequired(activeRow){
            this.$refs.customerCreateRequired.show()
            this.$refs.customerCreateRequired.updateObjectRequired({})
            this.activeRow = activeRow
        },
        openModalRequiredUpdate(objRequired,activeRow){
            //Update row
            this.activeRow = activeRow
            this.$refs.customerCreateRequired.updateObjectRequired(objRequired)
            this.$refs.customerCreateRequired.show()
        },
        openModalReport(report){
            this.$refs.customerCreateReport.updateReport(report)
            this.$refs.customerCreateReport.show()
        },
        hideModal(){
            this.$refs.customerCreateRequired.hide()
        }
    }
}
</script>