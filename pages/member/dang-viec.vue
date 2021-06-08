<template>
    <div>
        <Header />
        <section id="search-job" class="wrapSection pt-30px pb-80px">
            <div class="wrapCenterSmall formCore">
                 <div class="content">
                     <FormProject />
                 </div>    
            </div>

        </section>
        <Footer />
    </div>

</template>


<script>
export default {
    middleware: 'auth',
}
</script>