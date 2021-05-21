<template>
    <div>
        <Header />
        <section id="profileMember" class="wrapSection pt-30px pb-80px">
            <div class="wrapBanner hosoWrap"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="profileSection z3">
                           <div class="col-left">
                            <ProfileInfo :profile="objProfile" />
                           </div>

                           <div class="col-right">
                               <ProfileDes :profile="objProfile" :listCategory="listCateMapping" />
                               <div class="line"></div>
                               <ProfileProject :portfolio="portfolio" />
                               <div class="line"></div>
                               <ProfileRating />
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
export default {
    data(){
        return{
            slug:this.$nuxt.$route.params.slug,
            objProfile:{},
            listCateMapping:[],
            portfolio:[]
        }
    },
    mounted(){
        // this.getDataInit()
    },
    async fetch(){
        this.loader()
        try{
            let res= await this.$get(`public/user/${this.slug}`)
            this.objProfile = res.data.user
            this.listCateMapping = this.mapCategory(this.objProfile.category)
            this.portfolio = this.objProfile.portfolio
            this.loader(0)
        }
        catch(err){
            this.loader(0)
        }
    },
    methods:{
    }
}
</script>