<template>
    <div  class="form-group">
        <input type="file" name="file" id="file" ref="file" class="inputfile" @change="onFileChange" />
        <label for="file">
            <img class="mr-4px h-13px mb-2px" src="@/assets/svg/icon-upload.svg" alt=""/>Thêm tài liệu
        </label>
       <span class="text-main f-11">{{accept}}</span>
    </div>
</template>
<script>
export default {
    props:['accept',],
    created() {},
    mounted() {},
    data() {
        return{

        }
    },
    methods:{
        onFileChange(e){
            let file = this.$refs.file.files[0];
            console.log('file',file);
            this.$emit("input",file)
        }
    }
};
</script>