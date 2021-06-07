<template>
    <div id="manage-project">
        <div class="wrap">
            <h1 class="title">Dự án đang nhận chào giá</h1>
             <div class="group-function d-flex">
                <input class="input-search form-control" placeholder="Tìm kiếm dự án" />
                <b-dropdown class="dropdown-all"  variant="link" toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                    <div class="title-dropdown">
                        <span>Tất cả dự án</span>
                        <i class="fas fa-caret-down ml-13px f-16"></i>
                    </div>
                    </template>
                    <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=1'" class="f-12">Hồ sơ cá nhân </b-dropdown-item>
                    <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=2'" class="f-12">Hồ sơ làm việc</b-dropdown-item>
                    <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=4'" class="f-12">Xác thực thông tin</b-dropdown-item>
                </b-dropdown>
                <div class="btn-search">
                    Tìm kiếm
                </div>
            </div>
        </div>

        <table class="table table-custom" v-if="listProject">
            <thead>
                <tr>
                    <th scope="col">Tên dự án</th>
                    <th scope="col">Số lượng chào giá</th>
                    <th scope="col">Hạn nhận chào giá</th>
                    <th scope="col">Trạng thái</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="(item,idx) in listProject" :key="idx">
                    <td class="name" :class="getClassCategory(mapImgFromCategory(item.category))">
                        {{item.name}}
                    </td>
                    <td class="customer text-center f-12">
                        <span class="text-main">{{item.auctionCount}}</span> chào giá
                    </td>
                    <td class="price text-center">{{$moment(item.dueDate).format('DD/MM/YYYY')}}</td>
                    <td class="status text-center">
                        <template v-if="checkStatusDueDate(item.dueDate)">
                            <span class="f-12">Hết hạn nhận hồ sơ</span>
                        </template>
                        <template v-else>
                            <span class="f-12">Đang nhận hồ sơ</span>
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listProject:null
        }
    },
    mounted(){
        this.getListQuote()
    },
    methods:{
        getListQuote(){
            this.$get('/member/projects')
                .then(res => {
                    console.log(res)
                    this.listProject = res.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>