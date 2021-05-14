<template>
    <div>
        <Header />
        <section id="editProfileMember" class="wrapSection pt-30px pb-80px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="profileMenuInfoWrap mr-20px">
                                <ProfileMenu activeMenu="1" />
                            </div>
                            <div class="flex-1 profileInfoWrap">
                                <ProfileAccount />
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
    middleware: 'auth',
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