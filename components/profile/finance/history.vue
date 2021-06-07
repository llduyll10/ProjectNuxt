<template>
    <div id="manage-project">
        <div class="wrap">
            <h1 class="title">Lịch sử giao dịch</h1>
             <div class="group-function d-flex">
                 <treeselect
                        class="search-date"
                        :options="optionsMonth"
                        :value="objSearch.month"
                        v-model="objSearch.month"
                        placeholder="Tra theo tháng"
                        :clearable=false
                />
                <treeselect
                        class="search-date"
                        :options="optionsYear"
                        :value="objSearch.year"
                        v-model="objSearch.year"
                        placeholder="Tra theo năm"
                        :clearable=false
                />
                <div @click="getHistory()" class="btn-search">
                    Tìm kiếm
                </div>
            </div>
        </div>

        <div class="wrap pt-0 pb-15px">
            <span class="text-red f-bold f-14">Tháng {{objSearch.month}}/{{objSearch.year}}</span>
        </div>

        <table class="table table-history">
            <thead>
                <tr>
                    <th scope="col" >Mã số hoá đơn</th>
                    <th scope="col pl-30px" >Ngày giao dịch</th>
                    <th scope="col" >Số tiền giao dịch</th>
                    <th scope="col">Nội dung giao dịch</th>
                </tr>
            </thead>
            <tbody>
                <tr class="f-12 text-gray" v-for="(item,idx) in listHistory" :key="idx">
                    <td class="text-main ">{{item.number}}</td>
                    <td>{{$moment(item.createdDate).format('DD/MM/YYYY')}}</td>
                    <td>{{formatVnd(item.price)}} VNĐ</td>
                    <td class="pl-35px">
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
            listHistory:[],
            objSearch:{
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear()
            },
            optionsMonth:[
                { id: 1, label: 'Tháng 1' },
                { id: 2, label: 'Tháng 2' },
                { id: 3, label: 'Tháng 3' },
                { id: 4, label: 'Tháng 4' },
                { id: 5, label: 'Tháng 5' },
                { id: 6, label: 'Tháng 6' },
                { id: 7, label: 'Tháng 7' },
                { id: 8, label: 'Tháng 8' },
                { id: 9, label: 'Tháng 9' },
                { id: 10, label: 'Tháng 10' },
                { id: 11, label: 'Tháng 11' },
                { id: 12, label: 'Tháng 12' },
            ],
            optionsYear:[
                { id: 2021, label: '2021' },
                { id: 2022, label: '2022' },
                { id: 2023, label: '2023' },
                { id: 2024, label: '2024' },
                { id: 2025, label: '2025' },
            ]
        }
    },
    mounted(){
        this.getHistory()
    },
    methods:{
        getHistory(){
            this.loader()
            let date = `1/${this.objSearch.month}/${this.objSearch.year}`
            let query = `?date=${Date.parse(date)}`
            this.$get(`member/coin`+query)
                .then(res => {
                    this.listHistory = res.data
                    this.loader(0)
                })
                .catch(err => {
                    console.log(err)
                    this.loader(0)
                })
        },
    }
}
</script>