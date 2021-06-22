<template>
  <div class="editProfileInfoWrap buyTokenPageWrap">
    <form @submit.prevent="payment()">
    <div class="mb-24px borderWrap">
        <div class="f-20 f-bold text-main mb-15px">
            Nạp thêm Token
        </div>
        <div class="mb-24px text-black f-12">
            <span class="f-bold text-main">Token</span> được dùng để <span class="f-bold text-main">Chào giá dự án</span> và <span class="f-bold text-main">Liên hệ trực tiếp</span> với chủ đầu tư.  Chọn mua gói <span class="f-bold text-main">Token</span> dưới đây, mua càng nhiều thì càng tiết kiệm.
        </div>

        <div class="mb-15px">
            <div class="tokenPacksWrap">
                <div @click="activePackage(i)"
                        class="tokenItem cursor-pointer"
                        :class="[item.should ? 'shouldBuy' : '', activeCombo == i ? 'activeCombo' : ''  ]"
                        v-for="(item, i) in tokenPacks" :key="i">
                    <div class="tokenItemTop">
                        <div v-if="item.should" class="shouldInfo">
                            Gói nên mua
                        </div>
                        <div class="tokenVal">
                            <span class="tokenNum">{{item.coin}}</span> Token
                        </div>
                        <div class="priceVal">
                            <span class="priceNum">{{formatVnd(item.price)}}</span> VNĐ
                        </div>
                    </div>

                    <div class="tokenItemBot">
                        <div class="tokenPriceVal">
                            {{formatVnd(item.price / item.coin)}} VNĐ/Token
                        </div>
                        <div class="saveVal">
                            <span v-if="item.save">Tiết kiệm {{item.save}}%</span>
                        </div>
                        <div class="buyBtn">
                            <button :disabled="activeCombo == i" type="button" class="btn btn-main">
                                {{activeCombo == i ? 'Đang chọn' : 'Mua ngay'}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-24px borderWrap">
        <div class="f-20 f-bold text-main mb-15px">
            Thanh toán
        </div>
        <div class="row f-12 mb-20px">
            <div class="col-12 col-lg-5">
                <div class="fieldLabel">1. Thông tin khách hàng <span class="dot">*</span></div>
                <div class="inforBorderWrap">
                    <div class="flex-align-center mb-5px text-black ">
                        <img src="@/assets/svg/icon-user-dark.svg" class=" mr-5px" alt="" width="15px" height="15px">
                        <div class="mr-20px f-12"> {{$auth.user.name}}</div>
                    </div>
                    <div  class="flex-align-center text-black f-12">
                        <img src="@/assets/svg/icon-email-dark.svg" class=" mr-5px" alt="" width="15px" height="15px">
                        {{$auth.user.email}}
                    </div>
                </div>
                <div class="mb-15px">
                    <div class="gr-check flex-align-center">
                        <input type="checkbox" class="mr-5px">
                        <span>Yêu cầu xuất hoá đơn</span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7">
                <div class="fieldLabel">2. Điều khoản thanh toán <span class="dot">*</span></div>
                <div class="inforBorderWrap policyInfoWrap">
                    <div>Xin vui lòng đọc kỹ các điều khoản sau trước khi sử dụng dịch vụ thanh toán trực tuyến. Với việc truy cập vào phần này của vLance.vn, Bạn đã đồng ý với các điều </div>
                </div>
                <div>
                    <div class="gr-check flex-align-center">
                        <input type="checkbox" class="mr-5px" required>
                        <span>Tôi đồng ý với <span class="text-main">điều khoản</span> của Econs<span class="text-red">*</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-24px">
        <div class="fieldLabel">3. Phương thức thanh toán <span class="dot">*</span></div>
        <div class="row mt-20px">
            <div class="col-12 col-md-3" v-for="(item, i) in payWays" :key="i">
                <div class="paymentItem">
                    <div class="flex-center flex-column">
                        <div class="payIcon">
                            <img v-if="item.icon === 'card' || item.icon === 'vn_card' " src="@/assets/img/mastercard.png" alt="">
                            <img v-if="item.icon === 'card' || item.icon === 'vn_card' " src="@/assets/img/visa.png" alt="">

                            <img v-if="item.icon === 'zalo'" src="@/assets/svg/icon-zalopay.svg" alt="">

                            <img v-if="item.icon === 'momo'" src="@/assets/img/momo.png" alt="">
                        </div>
                        <div class="payText">
                            {{item.text}}
                        </div>
                        <div v-if="item.subText" class="paySubText">
                            {{item.subText}}
                        </div>
                    </div>
                    <div class="payBtn">
                        <button @click="objSelect.method = item.icon" type="submit" class="btn btn-main">
                            <span>Thanh toán</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class=" text-center mt-15px">
            <p class="mb-0 f-12 text-black">Khi thanh toán bạn đồng ý với <span class="text-main">điều khoản của Econs</span></p>
        </div>
    </div>
    </form>

    <PopupBankTransferSelect ref="refBankTransferSelect"/>
  </div>
</template>
<script>
export default {
    components:{
    },
    data(){
        return{
            tokenPacks: [{
                coin: 10,
                price: 150000,
                save:  0,
                should:false
            }, {
                coin: 25,
                price: 300000,
                save:  20,
                should:false
            }, {
                coin: 70,
                price: 735000,
                save:  30,
                should: true
            }, {
                coin: 150,
                price: 1350000,
                save:  40,
                should:false
            }, {
                coin: 400,
                price: 3000000,
                save:  50,
                should:false
            }],
            payWays: [{
                icon: 'card',
                text: 'Thẻ quốc tế',
                subText: 'Ngân hàng nước ngoài phát hành'
            }, {
                icon: 'vn_card',
                text: 'Thẻ quốc tế',
                subText: 'Ngân hàng Việt Nam phát hành'
            }, {
                icon: 'zalo',
                text: 'Thanh toán qua ZaloPay',
                subText: ''
            }, {
                icon: 'momo',
                text: 'Thanh toán qua MOMO',
                subText: ''
            }],
            objSelect:{},
            activeCombo:null
        }
    },
    mounted(){
        this.activePackage(2);
    },
    methods:{
        payment(){
           this.loader()
           this.$post(`member/coin`,this.objSelect)
                .then(res => {
                   this.$auth.fetchUser()
                   this.loader(0)
                   this.$notify({ group: 'all', text: 'Thanh toán thành công',  type: 'dark'})
                })
                .catch(err => {
                    this.loader(0)
                    console.log(err)
                })
        },
        activePackage(idx){
            // this.tokenPacks.forEach(pack => pack.should = false)
            // this.tokenPacks[idx].should = true
            this.activeCombo = idx
            this.objSelect = {
                coin: this.tokenPacks[idx].coin,
                price: this.tokenPacks[idx].price
            }
        },
    }
}
</script>
