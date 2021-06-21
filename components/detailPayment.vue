<template>
    <div class="detail-payment-component" v-if="auction">
        <div class="group-payment">
            <p class="fw-600 f-16 mb-16px">Thanh toán</p>
            <div v-for="(item,idx) in auction.deal[0].payments" :key="idx" class="d-flex">
                <span style="width:15%" class="item">Thanh toán đợt {{idx+1}}</span>
                <span style="width:25%" class="item text-center fw-600" >20% sau khi ký hợp đồng</span>
                <span style="width:20%" class="item text-center fw-600 text-main">Đề nghị thanh toán_Đợt 1</span>
                <span style="width:20%" class="item text-center fw-600 text-main">200.000.000 VNĐ </span>
                <span style="width:20%" class="item fw-600 text-main"><img  src="@/assets/svg/icon-check-blue.svg" alt=""> Đã thanh toán</span>
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
    </div>
</template>
<script>
export default {
    props:['auction']
}
</script>