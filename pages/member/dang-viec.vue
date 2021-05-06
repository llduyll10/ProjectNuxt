<template>
    <div>
         <Header />

         dange viec
    </div>
    
</template>


<script>
import Header from "@/components/Header";
export default {
    middleware: 'auth',
    components:{
        Header
    }
}
</script>