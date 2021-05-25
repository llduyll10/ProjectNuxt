<template>
    <div id="manage-project">
        <div class="wrap">
            <h1 class="title">Lịch sử giao dịch</h1>
             <div class="group-function d-flex">
                <input class="input-search form-control" placeholder="Tìm kiếm dự án" />
                <b-dropdown class="dropdown-all"  variant="link" toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                    <div class="title-dropdown">
                        <span>Tra theo tháng</span>
                        <i class="fas fa-caret-down ml-13px f-16"></i>
                    </div>
                    </template>
                    <b-dropdown-item class="f-12">AAA</b-dropdown-item>
                    <b-dropdown-item class="f-12">AAA</b-dropdown-item>
                    <b-dropdown-item class="f-12">AAA</b-dropdown-item>

                </b-dropdown>
                <b-dropdown class="dropdown-all"  variant="link" toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                    <div class="title-dropdown">
                        <span>Tra theo năm</span>
                        <i class="fas fa-caret-down ml-13px f-16"></i>
                    </div>
                    </template>
                    <b-dropdown-item class="f-12">AAA</b-dropdown-item>
                    <b-dropdown-item class="f-12">AAA</b-dropdown-item>
                    <b-dropdown-item class="f-12">AAA</b-dropdown-item>

                </b-dropdown>
                <div class="btn-search">
                    Tìm kiếm
                </div>
            </div>
        </div>

        <div class="wrap pt-0 pb-15px">
            <span class="text-red f-bold f-14">Tháng {{new Date().getMonth() + 1}}/{{new Date().getFullYear()}}</span>
        </div>

        <table class="table table-custom">
            <thead>
                <tr>
                    <th scope="col">Mã số hoá đơn</th>
                    <th scope="col">Ngày giao dịch</th>
                    <th scope="col">Số tiền giao dịch</th>
                    <th scope="col">Nội dung giao dịch</th>
                </tr>
            </thead>
            <tbody>
                <tr class="f-12 text-gray" v-for="(item,idx) in listHistory" :key="idx">
                    <td class="text-main">{{item.number}}</td>
                    <td>{{$moment(item.createdDate).format('DD/MM/YYYY')}}</td>
                    <td>{{formatVnd(item.price)}} VNĐ</td>
                    <td>
                        Nạp tiền mua Token
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:['title'],
    data(){
        return{
            listHistory:[]
        }
    },
    mounted(){
        this.getHistory()
    },
    methods:{
        getHistory(){
            this.loader()
            this.$get('member/coin')
                .then(res => {
                    this.listHistory = res.data
                    this.loader(0)
                })
                .catch(err => {
                    console.log(err)
                    this.loader(0)
                })
        }
    }
}
</script>