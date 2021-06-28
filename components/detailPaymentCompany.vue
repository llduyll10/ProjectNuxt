<template>
    <div class="detail-payment-component" v-if="auction">
        <div class="group-payment">
            <p class="fw-600 f-16 mb-16px">Thanh toán</p>
            <div v-for="(item,idx) in auction.deal[0].payments" :key="idx" class="d-flex">
                <span style="width:15%" class="item">Thanh toán đợt {{idx+1}}</span>
                <span style="width:25%" class="item text-center fw-600" >{{item.value}}</span>
                <span v-if="arrRequiredPayment.length && activeRow == idx" style="width:20%" class="item text-center fw-600 text-main" @click="openModalRequired()">
                    Đề nghị thanh toán_Đợt {{idx+1}}
                </span>
                <span   v-else style="width:20%"
                        class="item text-center cursor-pointer fw-600 text-main"
                        @click="openModalRequired(idx)">
                    Tạo yêu cầu thanh toán
                </span>

                <span style="width:20%" class="item text-center fw-600 text-main" @click="openModalReport()">200.000.000 VNĐ </span>
                <template v-if="arrRequiredPayment.length">
                    <span v-if="arrRequiredPayment.length && activeRow == idx" style="width:20%" class="item fw-600 text-main" >
                        <img  src="@/assets/svg/icon-check-blue.svg" alt=""> Đã thanh toán
                    </span>
                    <span v-else style="width:20%" class="item fw-600 text-red">
                        <img src="@/assets/svg/icon-cancel-red.svg" alt=""> Chưa thanh toán
                    </span>
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
                <span style="width:25%" class="item text-center fw-600" >Tiến độ thi công tuần thứ {{idx+1}}</span>
                <span style="width:60%" class="item d-flex">
                    Đánh giá:
                    <div  class="group-star">
                        <i v-for="(item, idx) in 5" :key="idx+10" class="fas fa-star mr-1px f-13 main-yellow"></i>
                    </div>
                </span>

            </div>
        </div>
        <!-- Popup payment -->
        <PopupPaymentCreateRequired
            ref="createRequired"
            @requiredPayment="getObjRequiredPayment"
            :project="detailProject"
        />
        <PopupPaymentCreateReport
            ref="createReport"
            :project="detailProject"
        />
    </div>
</template>
<script>
export default {
    props:['auction','detailProject'],
    data(){
        return{
            statusPayment:1,
            activeRow:null,
            arrRequiredPayment:[]
        }
    },
    mounted(){
        console.log('auction',this.auction)
        console.log('detailProject',this.detailProject)
    },
    methods:{
        getObjRequiredPayment(obj){
            var objRequired = {
                ...obj,
                paymentId: this.activeRow,
                project:this.auction.deal[0].project,
                auction:this.auction.deal[0].auction,
            }
            console.log('objRequired',objRequired)
            this.arrRequiredPayment.push(objRequired)
        },
        openModalRequired(activeRow){
            this.$refs.createRequired.show()
            this.activeRow = activeRow
        },
        openModalReport(){
            this.$refs.createReport.show()
        },
        hideModal(){
            this.$refs.createRequired.hide()
        }
    }
}
</script>