<template>
    <div class="editProfileInfoWrap">
        <div class="w-100 flex-align-center tabsWrap">
            <div @click="activeTab=tab.id" v-for="(tab) in tabs" :key="tab.id" :class="{'activeTab': activeTab === tab.id}" class="tabItem flex-align-center">
                <div>{{tab.text}}</div>
            </div>
        </div>

        <div class="editWrap">
            <EditPersonalInfo  v-if="activeTab === '1'" />

            <EditWorkingInfo  v-if="activeTab === '2'" />

            <EditWorkProject  v-if="activeTab === '3'" />

            <ConfirmInfo  v-if="activeTab === '4'" />
        </div>
    </div>

</template>
<script>
import EditPersonalInfo from "./editPersonalInfo";
import EditWorkingInfo from "./editWorkingInfo";
import EditWorkProject from "./EditWorkProject";
import ConfirmInfo from "./confirmInfo";
export default {
    components: {
        EditPersonalInfo,
        EditWorkingInfo,
        EditWorkProject,
        ConfirmInfo
    },
    data(){
        return{
            tabs: [{
                id: '1',
                text: 'Thông tin cá nhân'
            }, {
                id: '2',
                text: 'Hồ sơ làm việc'
            }, {
                id: '3',
                text: 'Dự án đã thực hiện'
            }, {
                id: '4',
                text: 'Xác thực tài khoản'
            }],
        }
    },
    mounted(){
    },
    computed:{
        activeTab(){
            return this.$nuxt.$route.query.tab
        }
    },

}
</script>