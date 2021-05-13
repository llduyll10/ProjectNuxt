<template>
    <div class="editProfileInfoWrap">
        <div class="w-100 flex-align-center tabsWrap">
            <div @click="activeTab=tab.id" v-for="(tab) in tabs" :key="tab.id" :class="{'activeTab': activeTab === tab.id}" class="tabItem flex-align-center">
                <div>{{tab.text}}</div>
            </div>
        </div>

        <div class="editWrap">
            <BuyToken  v-if="activeTab === '1'" />

        </div>
    </div>

</template>
<script>

import BuyToken from "./buyToken";
export default {
    components: {
        BuyToken
    },
    data(){
        return{
            tabs: [{
                id: '1',
                text: 'Nạp thêm Token'
            }, {
                id: '2',
                text: 'Lịch sử giao dịch'
            }, {
                id: '3',
                text: 'Tài khoản ngân hàng'
            }, {
                id: '4',
                text: 'Yêu cầu rút tiền'
            }],
            activeTab: '1',
        }
    },
    mounted(){
    },
    watch:{
        tabUrl(){
            this.activeTab = this.tabUrl
        }
    },
    computed:{
        tabUrl(){
            return this.$nuxt.$route.query.tab
        }
    },

}
</script>