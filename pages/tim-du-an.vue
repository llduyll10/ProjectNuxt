<template>
    <div>
        <Header />
        <section id="project" class="pt-30px pb-80px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="left">
                            <div class="top">
                                <div class="title f-16">
                                    LĨNH VỰC CÔNG VIỆC
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="list">
                                <div class="d-flex item-title f-14"
                                    @click="getItemSearch({id:1},4)"
                                    :class="activeParent == 1 ? 'fw-600 text-main' :'' "
                                >
                                    <img src="@/assets/svg/homeproject.svg" alt="">
                                    <span>{{objCategory[0].label}}</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                        <li @click="getItemSearch(item,0)"
                                            v-for="(item) in objCategory[0].children"
                                            :key="item.id"
                                            :class="item.active ? 'fw-600 text-main' :'' "
                                            class="cursor-pointer"
                                        >
                                            {{item.label}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="list">
                                <div class="d-flex item-title f-14"
                                    @click="getItemSearch({id:2},4)"
                                    :class="activeParent == 2 ? 'fw-600 text-main' :'' "
                                >
                                    <img src="@/assets/svg/sofa.svg" alt="">
                                     <span>{{objCategory[1].label}}</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                        <li @click="getItemSearch(item,1)"
                                            v-for="(item) in objCategory[1].children"
                                            :key="item.id"
                                            :class="item.active ? 'fw-600 text-main' :'' "
                                            class="cursor-pointer"
                                        >
                                            {{item.label}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="list">
                                <div class="d-flex item-title f-14"
                                    @click="getItemSearch({id:3},4)"
                                    :class="activeParent == 3 ? 'fw-600 text-main' :'' "
                                >
                                    <img src="@/assets/svg/pen.svg" alt="">
                                    <span>{{objCategory[2].label}}</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                         <li @click="getItemSearch(item,2)"
                                            v-for="(item) in objCategory[2].children"
                                            :key="item.id"
                                            :class="item.active ? 'fw-600 text-main' :'' "
                                            class="cursor-pointer"
                                        >
                                            {{item.label}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="box-title">
                            <p class="title f-16">TIN TỨC & THỊ TRƯỜNG</p>
                            <div class="line"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-sm-6" v-for="(item , i ) in 2" :key="i">
                                <div class="left mt-24px" >
                                <div class="boxs">
                                    <img src="@/assets/img/product-1.png" alt="">
                                    <h3 class="mt-15px">Bỏ túi ngay bí quyết trang trí phòng khách hiện đại với Phố Xinh </h3>
                                    <div class="evaluate mt-15px">
                                        <div class="lefts">
                                            <img src="@/assets/img/market1.png" alt="">
                                            <div class="text">
                                                Bởi <span>Longb04</span>
                                            </div>
                                        </div>
                                        <div class="rights">
                                            <div class="one mr-15px">
                                                <img src="@/assets/svg/see.svg" alt="">
                                                <p class="ml-6px">290</p>
                                            </div>
                                            <div class="one">
                                                <img class="mb-4px" src="@/assets/svg/like.svg" alt="">
                                                <p class="ml-6px">20</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-12">
                        <div class="right margin-top">
                            <!-- search -->
                            <div class="top top-change">
                                <div class="search-top short-input">
                                    <input type="text"
                                        v-model="objProject.s" class="f-12"
                                        placeholder="Tìm kiếm đơn vị thi công/thiết kế"
                                    >
                                </div>
                                <treeselect
                                        class="search-center"
                                        :options="optionsProvince"
                                        :value="objProject.address"
                                        v-model="objProject.address"
                                        placeholder="Tỉnh thành"
                                    />
                                <div class="button" @click="searchProject()">Tìm kiếm</div>
                            </div>
                            <div class="line"></div>
                            <!-- list off member -->
                            <div class="center mb-20px" v-for="(item, idx) in listProject" :key="idx">
                                <div class="boxinfo">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="introduce">
                                                <div  class="cover-img"
                                                    :style="{
                                                        'background-image': 'url(' + `${item.photos[0] ? item.photos[0] : noAvatar}` + ')',
                                                    }"
                                                >
                                                </div>
                                                <div class="content nopadding">
                                                    <div class="title d-flex">
                                                        <div class="d-flex title-icon">
                                                            <div
                                                                class="sub f-14 text-main cursor-pointer"
                                                                @click="$router.push(`du-an/${item.slug}`)"
                                                                >
                                                                {{item.name}}
                                                            </div>
                                                        </div>
                                                        <div class="icon">
                                                            <img src="@/assets/svg/icon-location.svg" alt="">
                                                            <span class="name f-11">{{item.address}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="description padding-right f-13">{{item.description}}</div>
                                                    <div class="group-bot d-flex">
                                                        <div class="group-2 d-flex">
                                                            <div class="one d-flex f-12 cursor-pointer"
                                                                @click="$router.push(`ho-so/${item.createBy.slug}`)"
                                                            >
                                                                <img src="@/assets/svg/human.svg" alt="">
                                                                <div class="human-name ml-5px f-12">{{item.createBy.name}}</div>
                                                            </div>
                                                            <div class="two">
                                                                Ngày đăng - <span>{{checkIsToday(item.createdDate)}}</span>
                                                            </div>
                                                            <div class="three">
                                                                Dự trù - <span>{{formatNamePrice(item.budget)}}</span>
                                                            </div>
                                                            <div class="four">
                                                                Hạn chót chào giá -
                                                                <span :class="checkStatusDueDate(item.dueDate) ? 'text-red' :'' ">
                                                                    {{checkDueDate(item.dueDate)}}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="like f-13">
                                                            {{item.auctionCount}} <span>Chào giá </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="line"></div>
                            </div>
                            <template v-if="count>0">
                                <Pagination :count="count" :perPage="5" @page="getPaging" />
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>

</template>


<script>
import NoAvatar from '@/assets/img/no-avatar.png'
import avatar from '@/assets/svg/market3.svg'
import logoDuan from '@/assets/svg/logo-duan.svg'
export default {
    // middleware: 'auth',
    data(){
        return{
            noAvatar: NoAvatar,
            logoDuan :logoDuan,
            avatar : avatar,
            activeParent:0,
            dataFake:[1,2,3,4,5,6,7],
            optionsProvince: this.getProvince(),
            objCategory: this.getCategory(),
            arrFilter : [],
            objProject:{
                address:null,
                s:'',
                limit:5,
                page:1
            },
            listProject:[],
            count:0
        }
    },
    mounted(){
        this.searchInitPage()
    },
    methods:{
        async searchProject(){
            this.loader()
            try{
                this.objProject.category = []
                this.arrFilter.forEach(item => {
                    this.objProject.category.push(item.id)
                })
                let res = await this.$post('public/projects',{...this.objProject, limit:10, page:1})
                this.listProject = res.data.projects
                this.count = res.data.count
                this.loader(0)
            }
            catch(err){
                this.loader(0)
            }
        },
        searchInitPage(){
           this.$post('public/projects',{...this.objProject,})
            .then(res =>{
                this.listProject = res.data.projects
                this.count = res.data.count
            })
            .catch(err =>{
                console.log(err)
            })
        },
        getItemSearch(item,idxArray){
            //parent
            if(idxArray == 4){
                this.activeParent = item.id
                var arrTmp = JSON.parse(JSON.stringify(this.objCategory))
                arrTmp.forEach(arr1 => {
                    arr1.children.forEach(child => {
                        child.active = false
                    })
                })
                this.objCategory = arrTmp
            }
            //children

            else{
                this.activeParent = 0
                var arrTmp = JSON.parse(JSON.stringify(this.objCategory))
                arrTmp.forEach(arr1 => {
                    arr1.children.forEach(child => {
                        child.active = false
                        if(child.id == item.id){
                            child.active = true
                        }
                    })
                })
                this.objCategory = arrTmp
            }
            if(this.arrFilter.length){
                this.arrFilter.splice(0,1)
            }
            this.arrFilter.push(item)
        },
        async getPaging(value){
            this.loader()
            try{
                this.objProject.category = []
                this.arrFilter.forEach(item => {
                    this.objProject.category.push(item.id)
                })
                let res = await this.$post('public/projects',{...this.objProject, ...value})
                this.listProject = res.data.projects
                this.count = res.data.count
                window.scrollTo(0,0)
                this.loader(0)
            }
            catch(err){
                this.loader(0)
            }

        },
        openLienHe(){
            this.$refs.refLienHe.show();
        },
        openLienHeMail(){
            this.$refs.LienHeFormPop.show();
        },
    }
}
</script>