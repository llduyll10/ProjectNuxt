<template>
    <div id="manage-project">
        <div class="wrap">
            <h1 class="title">Dự án đang nhận chào giá</h1>
             <div class="group-function d-flex">
                <input v-model="searchText" @ class="input-search form-control" placeholder="Tìm kiếm dự án" />
                <treeselect
                        class="option-search"
                        :options="optionSearch"
                        :value="objSearch.type"
                        v-model="objSearch.type"
                        placeholder="Tra theo năm"
                        :clearable=false
                />
                <div class="btn-search">
                    Tìm kiếm
                </div>
            </div>
        </div>

        <table class="table table-custom" v-if="listShow">
            <thead>
                <tr>
                    <th scope="col">Tên dự án</th>
                    <th scope="col">Số lượng chào giá</th>
                    <th scope="col">Hạn nhận chào giá</th>
                    <th scope="col">Trạng thái</th>
                </tr>
            </thead>
            <tbody  v-if="listShow" >
                <tr v-for="(item,idx) in listShow" :key="idx">
                    <td class="name" :class="getClassCategory(mapImgFromCategory(item.category))">
                        {{item.name}}
                    </td>
                    <td class="customer text-center f-12 pl-0">
                        <span class="text-main">{{item.auctionCount}}</span> chào giá
                    </td>
                    <td class="price text-center pl-0">{{$moment(item.dueDate).format('DD/MM/YYYY')}}</td>
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
            listProject:null,
            listShow:null,
            optionSearch:[
                { id: 1, label: 'Tất cả dự án' },
                { id: 2, label: 'Đang nhận hồ sơ' },
                { id: 3, label: 'Đã hết hạn' },
            ],
            objSearch:{
                type:1,
            },
            searchText:''
        }
    },
    watch:{
        objSearch:{
            deep:true,
            handler(){
               this.filterList(JSON.parse(JSON.stringify(this.listProject)))
            }
        },
        searchText(){
            this.handleSearchText()
        }
    },
    mounted(){
        this.getListQuote()
    },
    methods:{
        getListQuote(){
            this.loader()
            this.$get('/member/projects')
                .then(res => {
                    console.log(res)
                    this.listProject = res.data
                    this.listShow = res.data
                    this.loader(0)
                })
                .catch(err => {
                    console.log(err)
                    this.loader(0)
                })
        },
        filterList(list){
            if(this.objSearch.type == 1){
                this.listShow = list
            }
            else if(this.objSearch.type == 2){
                this.listShow = list.filter(item => !this.checkStatusDueDate(item.dueDate))
            }
            else{
                this.listShow = list.filter(item => this.checkStatusDueDate(item.dueDate))
            }
        },
        handleSearchText(){
            var arrTemp = JSON.parse(JSON.stringify(this.listProject))
            if(this.searchText){
                this.listShow = arrTemp.filter(item => {
                    return this.searchText.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            }
            else{
                this.listShow = arrTemp
            }
        }
    }
}
</script>