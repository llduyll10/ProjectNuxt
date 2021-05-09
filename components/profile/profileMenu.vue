<template>
    <div>
        <div class="w-100 flex-align-center p-22px">
            <div class="userAvatarMenu mr-13px">
                <img src="@/assets/img/user-logo.png" />
            </div>

            <div class="d-flex flex-column f-13 f-bold">
                <div class="mb-7px">
                    Long Bui
                </div>

                <div class="flex-align-center">
                    <div class="f-bold">ID. <span class="text-red">123456</span></div>
                    <div class="split mr-10px ml-10px"></div>
                    <div class="f-bold"><span class="text-main">100</span> Tokens</div>
                </div>
            </div>
        </div>

        <div class="w-100 d-flex flex-column profileMenuList">
            <div class="profileMenuItem" :class="{'activeMenu': item.id === activeMenu}" v-for="(item) in menus" :key="item.id">
                <span class="f-12">{{item.text}}</span>
            </div>
        </div>

        <div class="w-100 d-flex flex-column profileActions mt-15px">
            <div class="btnWrap">
                <button type="button" class="btn">
                    <img class="btn-icon" src="@/assets/svg/credit.svg">
                    Nạp thêm Token
                </button>
            </div>

            <div class="btnWrap">
                <button type="button" class="btn logoutBtn">
                    <img class="btn-icon" src="@/assets/svg/logout.svg">
                    Đăng xuất
                </button>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            menus: [{
                id: '1',
                text: 'Tài khoản của tôi'
            }, {
                id: '2',
                text: 'Quản lý dự án'
            }, {
                id: '3',
                text: 'Quản lý tài chính'
            }],
        }
    },
    props: {
        activeMenu: {
            default: "1"
        }
    }
}
</script>