<template>
    <Modal ref="inforProject" id="modal-infor-project">
        <template v-slot:content>
            <div class="formCore">
                <div class="content">
                    <FormProject :objInfor="objInfor" :isModal="true" @hideModal="hide" @callGetDetail="getDetailProject" />
                </div>
            </div>
        </template>
    </Modal>
</template>
<script>
export default {
    data(){
        return{
            objInfor:null
        }
    },
    mounted(){

    },
    methods:{
        getInfor(infor){
            this.objInfor = infor
        },
        show() {
            this.$refs.inforProject.showModal();
        },
        hide(){
            this.$refs.inforProject.hideModal()
        },
        getDetailProject(){
            this.$emit('callGetDetail')
        }
    }
}
</script>