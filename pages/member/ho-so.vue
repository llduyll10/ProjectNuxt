<template>
    <div>
        <Header />
        <section id="search-job" class="wrapSection pt-30px pb-80px">
            <div class="wrapBanner hosoWrap"></div>
            <div class="wrapCenter">
              
            </div>

        </section>
        <Footer />
    </div>

</template>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Calendar from "@/components/Calendar"
export default {
    // middleware: 'auth',
    components:{
        Header,
        Footer,
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