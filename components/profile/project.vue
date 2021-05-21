<template>
    <section id="project-component">
        <div class="type-field mb-40px">
            <div class="group-title">
                <p class="title">Dự án đã thực hiện</p>
                <div class="group-function">
                    <img src="@/assets/svg/icon-edit-file.svg" />
                    <span>Chỉnh sửa</span>
                    <div class="height"></div>
                    <span>Xoá bỏ</span>
                </div>
            </div>
        </div>
        <div class="group-item">
            <template v-for="(item,idx) in listShow">
                <div @click="openProjectDetail(item)" :key="idx" class="col-lg-3 col-md-4 col-sm-6 cover-item">
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
import Villa from "@/components/popup/Villa"
export default {
    props:['portfolio'],
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
            console.log(project)
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