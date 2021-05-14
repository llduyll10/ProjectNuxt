<template>
    <div class="editProfileInfoWrap">
        <div class="w-100 flex-align-center tabsWrap">
            <div @click="addQuery(tab.id)"
                v-for="(tab) in tabs" :key="tab.id"
                :class="{'activeTab': activeTab === tab.id}"
                class="tabItem flex-align-center">
                <div>{{tab.text}}</div>
            </div>
        </div>

        <div class="editWrap">
            <ProfileProgressQuotes  v-if="activeTab === '1'" />

            <ProfileProgressNegotiate  v-if="activeTab === '2'" />

            <ProfileProgressDeploy  v-if="activeTab === '3'" />

            <ProfileProgressComplete  v-if="activeTab === '4'" />
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
                text: 'Đang chào giá'
            }, {
                id: '2',
                text: 'Đang thương lượng'
            }, {
                id: '3',
                text: 'Đang triển khai'
            }, {
                id: '4',
                text: 'Đã hoàn tất'
            }],
            activeTab: this.$nuxt.$route.query.tab,
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
        },

    },
    methods:{
         addQuery(tab){
           this.$router.push({path: this.$route.path, query: { tab: tab }})
        }
    }

}
</script>