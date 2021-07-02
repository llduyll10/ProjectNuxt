<template>
    <div class="center homAidQuestion">
        <div class="row">
            <div class="col-12">
                <div class="box-title d-flex">
                    <img src="@/assets/svg/homquestion.svg" alt="">
                    <div class="title f-30 ml-5px">Câu hỏi thường gặp</div>
                </div>
            </div>
            <div class="col-12">
                <div id="box-tab">
                    <b-tabs content-class="wrap-content mt-25px">
                        <b-tab title="Thông tin chung" active>
                                <template>
                                <div class="accordion" role="tablist">
                                    <div no-body class="wrap" v-for="(item , i) in list" :key="i">
                                        <div role="tab">
                                            <div v-b-toggle="item.button">
                                                <div class="titledown d-flex">
                                                    <div class="text">
                                                       <span>Q</span> <span>HomAid</span>cung cấp dịch vụ gì?
                                                    </div>
                                                    <span class="iconDown"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <b-collapse :id="item.collapseid"  accordion="my-accordion" role="tabpanel">
                                            <div class="body-content">
                                            <div>
                                                <span class="text-main">A.</span>
                                                {{ text }}
                                            </div>
                                            </div >
                                        </b-collapse>
                                    </div>
                                </div>
                            </template>
                        </b-tab>
                        <b-tab title="Chào giá"><p>I'm the second tab</p></b-tab>
                        <b-tab title="Hợp đồng"><p>I'm the tab with the very, very long title</p></b-tab>
                        <b-tab title="Thi công"><p>I'm the tab with the very, very long title</p></b-tab>
                        <b-tab title="Sau thi công"><p>I'm the tab with the very, very long title</p></b-tab>
                    </b-tabs>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            text: `
         HomAid Là nền tảng dịch vụ đấu thầu trực tuyến giúp cho khách hàng có nhu cầu về xây dựng kết nối với những đơn vị thi công/thiết kế phù hợp đã được kiểm chứng về năng lực. Ngoài ra, HomAids cung cấp những công cụ hỗ trợ khách hàng và đơn vị thi công liên quan đến vấn đề tư vấn/báo giá/tiến độ/thanh toán nhằm quản lý dự án hiệu quả nhất.
        `,
            list : [
                {button: "accordion-3" , collapseid : "accordion-3"},
                {button: "accordion-2" , collapseid : "accordion-2"},
                {button: "accordion-1" , collapseid : "accordion-1"}
            ]
        }
    },
    mounted(){

    },
    methods:{

    }

}
</script>

<style lang="scss" scoped>
    a.nuxt-link-exact-active {
        font-weight: bold;
        color: #00c58e;
    }
</style>