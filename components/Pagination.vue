<template>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        :hide-goto-end-buttons="true"
        align="center"
        @input="changePaging()"
        class="custom-pagination"
    >
        <template #prev-text><span class="custom-pre"> <<  </span></template>
        <template #next-text><span class="custom-pre"> >> </span></template>
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