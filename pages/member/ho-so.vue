<template>
    <div>
        <Header />
        <section id="profileMember" class="wrapSection pt-30px pb-80px">
            <div class="wrapBanner hosoWrap"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="profileSection z3">
                           <div class="col-left">
                            <Profile />
                           </div>

                           <div class="col-right">
                               <Description />
                               <div class="line"></div>
                               <Project />
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
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Profile from "@/components/profile/profile"
import Description from "@/components/profile/description"
import Project from "@/components/profile/project"
import Rating from "@/components/profile/rating"
export default {
    // middleware: 'auth',
    components:{
        Header,
        Footer,
        Profile,
        Description,
        Project,
        Rating
    },
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