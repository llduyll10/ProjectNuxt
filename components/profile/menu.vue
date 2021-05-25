<template>
    <div>
        <div class="w-100 flex-align-center p-22px">
            <div class="userAvatarMenu mr-13px">
                <img width="40px" :src="$auth.user.photo" />
            </div>

            <div class="d-flex flex-column f-13 f-bold">
                <div class="mb-7px">
                    {{$auth.user.name}}
                </div>

                <div class="flex-align-center">
                    <div class="f-bold"><span class="text-main"> {{$auth.user.coin || 0}}</span> Tokens</div>
                </div>
            </div>
        </div>

        <div class="w-100 d-flex flex-column profileMenuList">
            <b-link :to="item.url" class="profileMenuItem " :class="item.id === activeMenu ? 'activeMenu' : 'text-gray'" v-for="(item) in menus" :key="item.id">
                <span class="f-12">{{item.text}}</span>
            </b-link>
        </div>

        <div class="w-100 d-flex flex-column profileActions mt-15px">
            <div class="btnWrap">
                <button @click="$router.push('/member/quan-ly-tai-chinh?tab=1')" type="button" class="btn">
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
                text: 'Tài khoản của tôi',
                url: '/member/chinh-sua-ho-so?tab=1'
            }, {
                id: '2',
                text: 'Quản lý dự án',
                url: '/member/quan-ly-du-an?tab=1'
            }, {
                id: '3',
                text: 'Quản lý tài chính',
                url: '/member/quan-ly-tai-chinh?tab=1'
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