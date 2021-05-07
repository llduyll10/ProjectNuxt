<template>
    <div>
        <Header />
        <section id="profileMember" class="wrapSection pt-30px pb-80px">
            <div class="wrapBanner hosoWrap"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="profileSection z3">
                        
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