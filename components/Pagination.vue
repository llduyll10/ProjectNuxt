<template>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
        @input="changePaging()"
    >

    </b-pagination>
</template>
<script>
export default {
    props:["count","perPage",],
    data(){
        return{
            currentPage:1
        }
    },
    computed:{
        rows(){
            return this.count
        }
    },
    methods:{
        changePaging(){
            this.$emit('page',{page:this.currentPage,limit:this.perPage})
        }
    }
}
</script>