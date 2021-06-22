<template>
    <div id="manage-project">
        <div class="wrap">
            <h1 class="title">Dự án đang thương lượng</h1>
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

        <table class="table table-custom" v-if="listShow">
            <thead>
                <tr>
                    <th scope="col">Tên dự án</th>
                    <th scope="col">Nhà thầu/Thiết kế</th>
                    <th scope="col">Giá trị dự án</th>
                    <th scope="col">Trạng thái</th>
                </tr>
            </thead>
            <tbody  v-if="listShow" >
                <tr v-for="(item,idx) in listShow" :key="idx">
                    <td class="name cursor-pointer"
                        :class="getClassCategory(mapImgFromCategory(item.project.category))"
                        @click="$router.push(`/du-an/${item.project.slug}`)"
                    >
                        {{item.project.name}}
                    </td>
                    <td class="customer  f-12">
                        <span class="text-main">
                            {{item.auctionBy.name}}
                        </span>
                    </td>
                    <td class="price ">{{formatVnd(item.project.budget)}} VND</td>
                    <td class="status ">
                        <template v-if="item.step == 1 || item.step == 2 || item.step == 3">

                                <b-dropdown v-if="item.step == 3" id="dropdown-duedate" variant="link" toggle-class="text-decoration-none" class="custom-infor pb-5px" no-caret>
                                    <template #button-content>
                                        <div class="d-flex">
                                            <div class="cover-infor">
                                                <p class="f-12">
                                                <span class="f-12 text-main">Đang thương lượng </span>
                                                <i class="fas fa-caret-down ml-5px f-16 text-main"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </template>
                                    <b-dropdown-item class="f-12" v-if="item.deal.length">
                                        Huỷ thương lượng
                                    </b-dropdown-item>
                                </b-dropdown>

                                <b-dropdown v-else  id="dropdown-duedate" variant="link" toggle-class="text-decoration-none" class="custom-infor pb-5px" no-caret>
                                        <template #button-content>
                                            <div class="d-flex">
                                                <div class="cover-infor">
                                                    <p class="f-12">
                                                    <span class="f-12 text-main">Khảo sát {{item.survey[0].time}}, {{$moment(item.survey[0].date).format('DD/MM/YYYY')}} </span>
                                                    <i class="fas fa-caret-down ml-5px f-16 text-main"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </template>
                                        <b-dropdown-item class="f-12" @click="destroySurvey(item.survey[0])">
                                            Huỷ yêu cầu khảo sát
                                        </b-dropdown-item>
                                </b-dropdown>
                        </template>
                        <template v-else>
                            <div class="btn-send">
                                <img src="@/assets/svg/email.svg" alt="">
                                <span>Gửi tin nhắn</span>
                            </div>
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
            optionOverDue:[
                {id:1,label:'Đăng lại dự án'}
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
    },
    mounted(){
        this.getListQuote()
    },
    methods:{
        getListQuote(){
            this.loader()
            this.$get('/member/owner-project-auction/')
                .then(res => {
                    this.listProject = res.data
                    this.listShow = res.data
                    this.loader(0)
                })
                .catch(err => {
                    this.loader(0)
                })
        },
        destroySurvey(survey){
            this.loader()
            var obj = {...survey}
            this.$post('member/survey/cancel',obj)
                .then(res => {
                    console.log(res)
                    this.getListQuote()
                    this.loader(0)
                })
                .catch(err => {
                    this.loader(0)
                    console.log(err)
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