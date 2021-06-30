<template>
    <div v-if="initStar"  class="group-star">
        <i v-for="(item, idx) in initStar" :key="idx+10" class="fas fa-star mr-1px f-13 main-yellow"></i>
    </div>
</template>
<script>
export default {
    props:['rating'],
    data(){
        return{
            initStar:5,
        }
    }
}
</script>