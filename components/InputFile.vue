<template>
    <div>
        <input type="file" name="file" id="file" ref="file" class="inputfile" @change="onFileChange" :multiple="multiple" />
        <label for="file">
            <img class="mr-4px h-13px mb-2px" src="@/assets/svg/icon-upload.svg" alt=""/>
            {{label || "Thêm tài liệu"}}
        </label>
       <span class="text-main f-11">
           <template v-for="(item,idx) in accept">
               {{item}} <span :key="idx" v-if="(idx+1) < accept.length">,</span>
           </template>
       </span>
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
            let accept = this.accept
            let typeFile = files[0].name.split('.').pop()
            if(accept){
                console.log('typeFile',typeFile)
                console.log('accept',accept)
                if(!accept.includes(typeFile)){
                    console.log('not')
                    return
                }
                else{
                    console.log('okok')
                    files.forEach(e => {
                        this.arrFile.push(e)
                    });
                    this.$emit("input",this.multiple?this.arrFile:this.arrFile[0])
                }
            }

        },
    }
};
</script>