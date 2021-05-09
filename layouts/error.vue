<template>
    <div>
        <Header />
        <div class="container-fluid">
            <div class="text-center p-60px">
                Không tìm thấy trang, <b-link :to="'/'">Quay lại trang chủ</b-link> 
            </div>
        </div>
        <Footer />
    </div>
</template>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    components:{
        Header,
        Footer
    }
}
</script>