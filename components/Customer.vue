<template>
    <div>
        <div class="title " >
            <h3 class="text-16 fw-600 main-black mb-0 pl-24px">
                Thông tin khách hàng
            </h3>
            <hr class="hr my-15px" />
        </div>
        <section id="infor-component" class="custom-customer" >

            <div   class="cover-img mt-20px "
                    :style="{
                        'background-image': 'url(' + `${detailAccount.photo}` + ')',
                    }"
            >
                <div class="stt custom">
                    <p class="f-12">
                        <img class="mb-2px" src="@/assets/svg/human-white.svg" />
                        {{detailAccount.name}}
                    </p>
                    <p class="f-12"><span>ID.</span> {{detailAccount.number}}</p>
                </div>
            </div>
            <div class="group-star d-flex mt-20px mb-20px">
                <div class="star-number mr-4px">
                    <p class="f-10">5.0</p>
                </div>
                <template v-for="(item,idx) in 5">
                    <div :key="idx">
                        <i class="fas fa-star mr-1px f-13"></i>
                    </div>
                </template>
                <p class="evaluate f-12 mb-0 mt-5px ml-4px">(<span>5</span>  đánh giá)</p>
            </div>
            <p class="mb-0 f-13 mb-15px">Bạn sẽ tốn <span class="text-main fw-600">3 Tokens</span> khi liên hệ trực tiếp với khách đăng tin</p>
            <div class="btn-contact d-block mb-0">
                <img src="@/assets/svg/icon-phone.svg" />
                <span>Liên hệ trực tiếp</span>
            </div>
            <div class="btn-contact email">
                <img src="@/assets/svg/icon-email.svg" />
                <span>Gửi tin nhắn</span>
            </div>
            <div class="btn-contact">
                <img src="@/assets/svg/icon-user-light.svg" />
                <span>Cập nhật hồ sơ</span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props:["id"],
    data(){
        return {
            detailAccount: {}
        }
    },
    mounted(){
        this.getDetailCustomer()
        console.log(this.id)
    },
    methods:{
        getDetailCustomer(){
            this.$get(`public/customer/${this.id}`)
                .then(res =>{
                    console.log(res)
                    this.detailAccount = res.data
                })
                .catch(err =>{
                    console.log(err)
                })
        }

    }
}
</script>