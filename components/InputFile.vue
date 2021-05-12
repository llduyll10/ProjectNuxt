<template>
    <div  class="form-group">
        <input type="file" name="file" id="file" ref="file" class="inputfile" @change="onFileChange" />
        <label for="file">
            <img class="mr-4px h-13px mb-2px" src="@/assets/svg/icon-upload.svg" alt=""/>Thêm tài liệu
        </label>
       <span class="text-main f-11">{{accept}}</span>
          <template v-if="arrFile.length">
            <template v-for="(item,idx) in arrFile">
                <p :key="idx" class="f-11 text-main ">
                    <img src="@/assets/svg/icon-pdf-border.svg" alt="">
                    {{item.name}}
                    <span class="cursor-pointer ml-5px" @click="clearFile(item)">
                        <i class="fas fa-times text-red"></i>
                    </span>
                </p>

            </template>
        </template>
    </div>
</template>
<script>
export default {
    props:['accept',],
    created() {},
    mounted() {},
    data() {
        return{
            arrFile:[]
        }
    },
    methods:{
        onFileChange(){
            let file = this.$refs.file.files[0];
            this.arrFile.push(file)
            this.$emit("input",this.arrFile)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        }
    }
};
</script>