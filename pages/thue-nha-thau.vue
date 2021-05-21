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
                                <div class="d-flex item-title f-14 cursor-pointer"
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
                                <div class="d-flex item-title f-14 cursor-pointer"
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
                                <div class="d-flex item-title f-14 cursor-pointer"
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

                        <div class="left">
                            <div class="top">
                                <div class="title f-16">
                                    LĨNH VỰC CÔNG VIỆC
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="list">
                                <div class="checkbox">
                                    <div class="gr-check">
                                        <input type="checkbox" class="">
                                        <label>Toàn quốc</label>
                                    </div>
                                    <div class="gr-check">
                                        <input style="background-color:red!important" type="checkbox" class="">
                                        <label>Hà Nội</label>
                                    </div>
                                    <div class="gr-check">
                                        <input type="checkbox" class="">
                                        <label>Tp. Hồ Chí Minh</label>
                                    </div>
                                </div>
                                <div class="seemore f-12">
                                    Xem thêm
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-12">
                        <div class="right">
                            <!-- search -->
                            <div class="top">
                                <div class="search-top">
                                    <input  v-model="objProject.s"  type="text" class="f-12" placeholder="Tìm kiếm đơn vị thi công/thiết kế">
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
                            <div class="center" v-for="item in listUsers" :key="item._id">
                                <div class="boxinfo">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-12 col-sm-12">
                                            <div class="introduce">
                                                <div  class="cover-img"
                                                    :style="{
                                                        'background-image': 'url(' + `${item.photo ? item.photo : noAvatar}` + ')',
                                                    }"
                                                >
                                                </div>
                                                <div class="content">
                                                    <div class="title">
                                                        <div class="sub f-14 cursor-pointer"
                                                            @click="$router.push(`ho-so/${item.slug}`)"
                                                        >
                                                            {{item.company ? item.company : item.name}}
                                                        d</div>
                                                        <div class="icon">
                                                            <img src="@/assets/svg/icon-location.svg" alt="">
                                                            <span class="name f-11">{{item.province}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="description f-13">{{item.introduce}}</div>
                                                    <div class="group">
                                                        <template v-if="item.category">
                                                            <template v-for="cate in mapCategory(item.category)">
                                                                <span
                                                                    :key="cate.id"
                                                                    class="px-8px badge py-2px text-12 custom-bage mr-8px mb-8px"
                                                                    :class="getClassBageCategory(mapValueFromCategory(cate.id))"
                                                                >
                                                                    {{cate.label}}
                                                                </span>
                                                            </template>
                                                        </template>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-12 col-sm-12">
                                            <div class="rate">
                                                <div class="star">
                                                    <div class="d-flex">
                                                        <div class="limit f-10">5.0</div>
                                                        <img src="@/assets/svg/star.svg" alt="">
                                                    </div>
                                                    <div class="st f-13">(<span>4</span> đánh giá)</div>
                                                </div>
                                                <div class="contact">
                                                    <div class="phone" @click="openLienHe">
                                                        <img src="@/assets/svg/phone.svg" alt="">
                                                        <span>Liên hệ trực tiếp</span>
                                                    </div>
                                                    <div class="email" @click="openLienHeMail">
                                                        <img src="@/assets/svg/email.svg" alt="">
                                                        <span>Gửi tin nhắn</span>
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
        <PopupLienhe ref="refLienHe"/>
        <PopupLienheform ref="LienHeFormPop"/>
        <Footer />
    </div>

</template>


<script>
import ImgProfile from '@/assets/svg/longb.svg'
import logoDuan from '@/assets/svg/logo-duan.svg'
import IconBlueHouse from '@/assets/svg/icon-house-blue.svg'
import IconDecordOrange from '@/assets/svg/icon-decord-orange.svg'
import IconPenBlue from '@/assets/svg/icon-pen-green.svg'
import NoAvatar from '@/assets/img/no-avatar.png'
export default {
    data(){
        return{
            imgProfile: ImgProfile,
            logoDuan :logoDuan,
            noAvatar: NoAvatar,
            dataFake:[1,2,3,4,5,6,7],
            activeParent:0,
            objCategory: this.getCategory(),
            optionsProvince: this.getProvince(),
            arrFilter:[],
            objProject:{
                address:null,
                s:'',
                limit:10,
                page:1
            },
            listUsers:[],
            count:0
        }
    },
    mounted(){
        this.getPaging({limit:5, page:1})
    },
    methods:{
        searchProject(){
            this.getPaging({limit:10, page:1})
        },
        getItemSearch(item,idxArray){
            var isRemove = false
            //parent
            if(idxArray == 4){
                if(this.activeParent == item.id){
                    this.activeParent = 0
                    isRemove = true
                }
                else{
                    this.activeParent = item.id
                }
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
                        if(item.active){
                            isRemove = true
                            return
                        }
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
            if(isRemove){
                this.arrFilter = []
                this.getPaging({limit:10, page:1})
                return
            }

            this.arrFilter.push(item)
            this.getPaging({limit:10, page:1})
        },
        async getPaging(pageObj){
            this.loader()
            try{
                this.objProject.category = []
                this.arrFilter.forEach(item => {
                    this.objProject.category.push(item.id)
                })
                let res = await this.$post('public/users ',{...this.objProject, ...pageObj})
                this.listUsers = res.data.users
                this.count = res.data.count
                window.scrollTo(0,0)
                this.loader(0)
            }
            catch(err){
                this.loader(0)
            }
        },
        getIconImg(value){
            if(value == 1){
                return this.iconBlueHouse
            }
            else if(value == 2){
                return this.iconDecord
            }
            else{
                return this.iconPenBlue
            }
        },
        getIconImg(value){
            if(value == 1){
                return this.iconBlueHouse
            }
            else if(value == 2){
                return this.iconDecord
            }
            else{
                return this.iconPenBlue
            }
        },
        openLienHe(){
            this.$refs.refLienHe.show();
        },
        openLienHeMail(){
            this.$refs.LienHeFormPop.show();

        }
    }
}
</script>