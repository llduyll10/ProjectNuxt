<template>
    <div id="rating-component" class="group-star d-flex">
        <template v-if="rating">
            <i v-for="(item, index) in rating" :key="index" @click="emitRating(index)" class="fas fa-star mr-1px f-13 main-yellow"></i>
            <i v-for="(tmp, idx) in (5-rating)" :key="idx+50" @click="emitRating(idx+rating)"  class="fas fa-star mr-1px f-13 "></i>
        </template>
        <template v-else>
            <i v-for="(item, index) in 5" :key="index" @click="emitRating(index)" class="fas fa-star mr-1px f-13 "></i>
        </template>
    </div>
</template>
<script>
export default {
    props:['rating','report','noClick'],
    name:'Rating',
    data(){
        return{
        }
    },
    methods:{
        emitRating(rating){
            if(this.noClick){
                return
            }
            var obj = {
                ...this.report,
                rating
            }
            this.$emit('rating',obj)
        }
    }
}
</script>