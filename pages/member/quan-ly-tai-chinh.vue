<template>
    <div>
        <Header />
        <section id="editProfileMember" class="wrapSection pt-30px pb-80px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="profileMenuInfoWrap mr-20px">
                                <ProfileMenu activeMenu="3" />
                            </div>
                            <div class="flex-1 profileInfoWrap">
                                <FinanceManage />
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
import Footer from "@/components/Footer";
import ProfileMenu from "@/components/profile/profileMenu";
import FinanceManage from "@/components/profile/FinanceManage/financeManage";

export default {
    middleware: 'auth',
    components:{
        Header,
        Footer,
        ProfileMenu,
        FinanceManage
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