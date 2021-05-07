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
                               b
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
import Profile from "@/components/Profile/Profile"
import Description from "@/components/Profile/Description"
import Project from "@/components/Profile/Project"
import Rating from "@/components/Profile/Rating"
export default {
    // middleware: 'auth',
    components:{
        Header,
        Footer,
        Profile
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