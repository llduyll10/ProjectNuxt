<template>
    <div >
        <Header />
        <BannerHomeAid />
        <section id="homeAid" class="pt-40px pb-50px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="top">
                                <HomeAidNav />
                            </div>
                            <nuxt-child />
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
            
        }
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    a.nuxt-link-exact-active {
        font-weight: bold;
        color: #00c58e;
    }
</style>