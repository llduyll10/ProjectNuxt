<template>
    <div class="editProfileInfoWrap">
        <div class="w-100 flex-align-center tabsWrap">
            <div @click="addQuery(tab.id)" v-for="(tab) in tabs" :key="tab.id" :class="{'activeTab': activeTab === tab.id}" class="tabItem flex-align-center">
                <div>{{tab.text}}</div>
            </div>
        </div>

        <div class="editWrap" v-if="activeTab === '1'">
            <ProfileFinanceBuy />
        </div>
        <ProfileFinanceHistory  v-if="activeTab === '2'" />

        <ProfileFinanceBankAccount  v-if="activeTab === '3'" />

        <div class="editWrap" v-if="activeTab === '4'">
            <ProfileFinanceRequest  />
        </div>
    </div>

</template>
<script>

export default {
    components: {
    },
    data(){
        return{
            tabs: [{
                id: '1',
                text: 'Nạp thêm Token'
            }, {
                id: '2',
                text: 'Lịch sử giao dịch'
            },
            // {
            //     id: '3',
            //     text: 'Tài khoản ngân hàng'
            // },
            // {
            //     id: '4',
            //     text: 'Yêu cầu rút tiền'
            // }
            ],
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
    methods:{
         addQuery(tab){
           this.$router.push({path: this.$route.path, query: { tab: tab }})
        }
    }

}
</script>