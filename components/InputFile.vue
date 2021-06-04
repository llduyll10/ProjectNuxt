<template>
    <div>
        <input :class="isChat ? 'w-40' : ''" type="file" ref="file" class="inputfile" @change="onFileChange" :multiple="multiple" />
        <label @click="$refs.file.click()" :class="isChat ? 'bg-white' : '' ">
            <template v-if="isChat">
                <img src="@/assets/svg/file.svg" alt="">
            </template>
            <template v-else>
                <img class="mr-4px h-13px mb-2px" src="@/assets/svg/icon-upload.svg" alt=""/>
                {{label}}
            </template>
        </label>
       <span v-if="!isChat" class="text-main f-11 font-italic">
           <template v-for="(item,idx) in accept">
               {{item}} <span :key="idx" v-if="(idx+1) < accept.length">,</span>
           </template>
       </span>
        <small v-if="showAlert" class="text-danger d-block">Sai định dạng</small>
    </div>
</template>
<script>
export default {
    props:['accept','multiple','label','isChat'],
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
                if(!accept.includes(typeFile)){
                    this.showAlert = true
                    return
                }
                else{
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