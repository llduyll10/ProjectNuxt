<template>
    <section id="project-component">
        <div class="type-field mb-40px">
            <div class="group-title">
                <p class="title">Dự án đã thực hiện</p>
                <template v-if="$auth.loggedIn">
                    <nuxt-link  v-if="$auth.user._id == profile._id"
                                class="group-function"
                                to="/member/chinh-sua-ho-so?tab=3"
                    >
                        <img src="@/assets/svg/icon-edit-file.svg" />
                        <span>Chỉnh sửa</span>
                        <div class="height"></div>
                        <span>Xoá bỏ</span>
                    </nuxt-link>
                </template>
            </div>
        </div>
        <div class="group-item">
            <template v-for="(item,idx) in listShow">
                <div @click="openProjectDetail(item)" :key="idx" class="col-xl-3 col-lg-4 col-md-6 col-sm-12 cover-item">
                    <div
                        class="item"
                        :style="{
                            'background-image': 'url(' + `${item.photos[0]}` + ')',
                        }"
                    >
                        <p class="location f-11">{{item.name}}</p>
                    </div>
                </div>
            </template>
        </div>
        <div v-if="showSeemore" @click="seemore" class="row text-center seemore mt-5px">
            <p class="f-12">Xem thêm dự án <i class="fas fa-caret-down ml-5px"></i></p>
        </div>
        <Villa ref="Villa" :itemShow="itemShow" />
    </section>
</template>
<script>
import DemoHouse from '@/assets/img/demo-house.png'
import Villa from "@/components/popup/villa"
export default {
    props:['portfolio','profile'],
    data(){
        return{
            demoHouse:DemoHouse,
            listShow:[],
            listTemp:[],
            showSeemore:false,
            itemShow : {}
        }
    },
    watch:{
        portfolio(){
            if(this.portfolio){
                this.listTemp = JSON.parse(JSON.stringify(this.portfolio))
                this.listShow = this.listTemp.splice(0,6)
            if(this.portfolio.length < 6){
                this.showSeemore = false
            }
            else{
                this.showSeemore = true
            }
        }
        }
    },
    components:{
        Villa
    },
    mounted(){

    },
    methods:{
        openProjectDetail(project){
            this.itemShow = project;
            this.$refs.Villa.show();
        },
        seemore(){
            this.listShow = JSON.parse(JSON.stringify(this.portfolio))
            this.showSeemore = false
        }
    }
}
</script>