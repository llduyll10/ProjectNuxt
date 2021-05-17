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
                                <div class="d-flex item-title f-14">
                                    <img src="@/assets/svg/homeproject.svg" alt="">
                                    <span>{{objCategory[0].label}}</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                        <li @click="getItemSearch(item,0)"
                                            v-for="(item) in objCategory[0].children"
                                            :key="item.id"
                                            :class="item.active ? 'font-weight-bold text-main' :'' "
                                            class="cursor-pointer"
                                        >
                                            {{item.label}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="list">
                                <div class="d-flex item-title f-14">
                                    <img src="@/assets/svg/sofa.svg" alt="">
                                     <span>{{objCategory[1].label}}</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                        <li @click="getItemSearch(item,1)"
                                            v-for="(item) in objCategory[1].children"
                                            :key="item.id"
                                            :class="item.active ? 'font-weight-bold text-main' :'' "
                                            class="cursor-pointer"
                                        >
                                            {{item.label}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="list">
                                <div class="d-flex item-title f-14">
                                    <img src="@/assets/svg/pen.svg" alt="">
                                    <span>{{objCategory[2].label}}</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                         <li @click="getItemSearch(item,2)"
                                            v-for="(item) in objCategory[2].children"
                                            :key="item.id"
                                            :class="item.active ? 'font-weight-bold text-main' :'' "
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
                                        v-model="objProject.searchText" class="f-12"
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
                            <div class="center" v-for="(item, j) in 3" :key="j">
                                <div class="boxinfo">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="introduce">
                                                <div  class="cover-img"
                                                    :style="{
                                                        'background-image': 'url(' + `${imgProfile}` + ')',
                                                    }"
                                                >
                                                </div>
                                                <div class="content nopadding">
                                                    <div class="title d-flex">
                                                        <div class="d-flex title-icon">
                                                            <img src="@/assets/svg/chair-timduan.svg" alt="">
                                                            <div class="ml-10px sub f-14">Tìm nhà thầu xây dựng nhà phố 5x20m tại Biên Hoà {{item}}</div>
                                                        </div>
                                                        <div class="icon">
                                                            <img src="@/assets/svg/icon-location.svg" alt="">
                                                            <span class="name f-11">Hồ Chí Minh</span>
                                                        </div>
                                                    </div>
                                                    <div class="description padding-right f-13">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thấtEcons được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất</div>
                                                    <div class="group-bot d-flex">
                                                        <div class="group-2 d-flex">
                                                            <div class="one d-flex f-11">
                                                                <img src="@/assets/svg/human.svg" alt="">
                                                                <div class="human-name ml-5px">Bùvcxvvxcvxcvcxvcxi Kim Long</div>
                                                            </div>
                                                            <div class="two">
                                                                Ngày đăng - <span>Hôm nay</span>
                                                            </div>
                                                            <div class="three">
                                                                Dự trù - <span>1 Tỷ</span>
                                                            </div>
                                                            <div class="four">
                                                                Hạn chót chào giá -<span>10 ngày</span>
                                                            </div>
                                                        </div>
                                                        <div class="like f-13">
                                                            4 <span>Chào giá </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="line"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>

</template>


<script>
import ImgProfile from '@/assets/svg/longb.svg'
import avatar from '@/assets/svg/market3.svg'
import logoDuan from '@/assets/svg/logo-duan.svg'

export default {
    // middleware: 'auth',
    data(){
        return{
            imgProfile: ImgProfile,
            logoDuan :logoDuan,
            avatar : avatar,
            dataFake:[1,2,3,4,5,6,7],
            optionsProvince: this.getProvince(),
            objCategory: this.getCategory(),
            arrFilter : [],
            objProject:{}
        }
    },
    mounted(){
    },
    methods:{
        searchProject(){
            console.log('objProject',{...this.objProject, arrFilter:this.arrFilter})
        },
         getItemSearch(item,idxArray){
            var arr = JSON.parse(JSON.stringify(this.objCategory[idxArray].children))
            arr.forEach(obj=>{
                if(obj.id == item.id){
                    if(!obj.active){
                        obj.active = true
                    }
                    else{
                        obj.active = false
                    }
                }
            })
            this.objCategory[idxArray].children = arr
            // Filter arr
            var found = false
            this.arrFilter.forEach(itemFound => {
                if(itemFound.id == item.id){
                    found = true
                }
            })
            if(found){
                this.arrFilter = this.arrFilter.filter(item2 => item2.id != item.id)
            }
            else{
                this.arrFilter.push(item)
            }
            console.log('arrFilter',this.arrFilter)
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