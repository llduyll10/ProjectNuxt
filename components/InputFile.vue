<template>
    <div>
        <input type="file" name="file" id="file" ref="file" class="inputfile" @change="onFileChange" :multiple="multiple" />
        <label for="file">
            <img class="mr-4px h-13px mb-2px" src="@/assets/svg/icon-upload.svg" alt=""/>
            {{label}}
        </label>
       <span class="text-main f-11">
           <template v-for="(item,idx) in accept">
               {{item}} <span :key="idx" v-if="(idx+1) < accept.length">,</span>
           </template>
       </span>
        <b-alert v-if="showAlert" sm show variant="danger">Sai định dạng</b-alert>
    </div>
</template>
<script>
export default {
    props:['accept','multiple','label'],
    created() {},
    mounted() {},
    data() {
        return{
            showAlert:false
        }
    },
    methods:{
        onFileChange(){
            var arrFile = [];
            let files = this.$refs.file.files;
            let accept = this.accept
            if(files && files.length){
                var typeFile = files[0].name.split('.').pop()
            }
            if(accept){
                console.log('typeFile',typeFile)
                console.log('accept',accept)
                if(!accept.includes(typeFile)){
                    console.log('not')
                    this.showAlert = true
                    return
                }
                else{
                    console.log('okok')
                    this.showAlert = false
                    files.forEach(e => {
                        arrFile.push(e)
                    });
                    this.$emit("input",this.multiple?arrFile:arrFile[0]);
                    this.$refs.file.value = null;
                }
            }

        },
    }
};
</script>