<template>
    <div id="manage-project">
        <div class="wrap">
            <h1 class="title">Dự án đang triển khai</h1>
             <div class="group-function d-flex">
                <input v-model="searchText" @change="handleSearchText()" class="input-search form-control" placeholder="Tìm kiếm dự án" />
                <treeselect
                        class="option-search"
                        :options="optionSearch"
                        :value="objSearch.type"
                        v-model="objSearch.type"
                        placeholder="Tra theo năm"
                        :clearable=false
                />
                <div class="btn-search" @click="handleSearch">
                    Tìm kiếm
                </div>
            </div>
        </div>

        <table class="table table-custom table-deploy">
            <thead>
                <tr>
                    <th scope="col">Tên dự án</th>
                    <th scope="col">Khách hàng</th>
                    <th scope="col">Giá trị dự án</th>
                    <th scope="col">Tiến độ</th>
                    <th scope="col">Thanh toán</th>
                </tr>
            </thead>
            <tbody  v-if=" listShow && listShow.length" >
                <tr v-for="(item,idx) in listShow" :key="idx">
                    <td class="name cursor-pointer"
                        :class="getClassCategory(mapImgFromCategory(item.project.category))"
                        @click="$router.push(`/du-an/${item.project.slug}`)"
                    >
                         {{item.project ? item.project.name : ''}}
                    </td>
                    <td class="customer  f-12">
                         <span class="text-main">
                            {{item.projectOwner.name}}
                        </span>
                    </td>
                    <td class="price ">{{formatVnd(item.deal[0].price)}} VND</td>
                    <td class="price">
                      {{formatVnd(item.deal[0].price)}} VND
                    </td>
                    <td class="price ">{{formatVnd(item.deal[0].price)}} VND</td>
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
            optionOverDue:[
                {id:1,label:'Đăng lại dự án'}
            ],
            objSearch:{
                type:1,
            },
            searchText:''
        }
    },
    mounted(){
        this.getListQuote()
    },
    methods:{
        getListQuote(){
            this.loader()
            console.log('test api')
            this.$get('member/my-auction/')
                .then(res => {
                    this.listProject = res.data
                    var arrTmp = []
                    this.listProject.forEach(item => {
                        if(item.deal.length && item.deal[0].status == 'OK'){
                            arrTmp.push(item)
                        }
                    })
                    this.listShow = arrTmp
                    console.log('listShow',this.listShow)
                    this.loader(0)
                })
                .catch(err => {
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
        },
        handleSearch(){
            var arrTemp = JSON.parse(JSON.stringify(this.listProject))
            if(this.searchText){
                var arrSearchTextTmp = arrTemp.filter(item => {
                    return this.searchText.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
                this.filterList(arrSearchTextTmp)
            }
            else{
                this.filterList(this.listProject)
            }
        }
    }
}
</script>