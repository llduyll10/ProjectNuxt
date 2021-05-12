<template>
    <div class="form-group">
        <input type="file" name="file" id="file" ref="file" class="inputfile" @change="onFileChange" :multiple="multiple" />
        <label for="file">
            <img class="mr-4px h-13px mb-2px" src="@/assets/svg/icon-upload.svg" alt=""/>
            {{label || "Thêm tài liệu"}}
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
    props:['accept','multiple','label'],
    created() {},
    mounted() {},
    data() {
        return{
            arrFile:[]
        }
    },
    methods:{
        onFileChange(){
            let files = this.$refs.file.files;
            files.forEach(e => {
                 this.arrFile.push(e)
            });
            this.$emit("input",this.multiple?this.arrFile:this.arrFile[0])
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        }
    }
};
</script>