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
                            <ProfileInfo />
                           </div>

                           <div class="col-right">
                               <ProfileDes />
                               <div class="line"></div>
                               <ProfileProject />
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

        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>