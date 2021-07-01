<template>
    <Modal ref="modalReportCustomer" id="modal-payment-report">
      <template v-slot:content>
        <div class="modal-contact formCore" >
          <div class="content">
            <p class="title f-20 fw-600" >
                YÊU CẦU KẾT THÚC DỰ ÁN VỚI <span class="text-main">{{auction.auctionBy.company}}</span>
            </p>
            <form action="" @submit.prevent="endProject()">
                <div class="group-infor no-border pr-60px">
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Tên dự án</span>
                        </div>
                        <div class="col-md-9">
                            <span class="value text-red"  :class="getClassCategory(mapImgFromCategory(project.category))">
                                {{project.name}}
                            </span>
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Đánh giá chất lượng</span> <span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <Rating :rating="numberRate"
                                    @rating="getRating"
                            />
                        </div>
                    </div>


                    <div class="row mb-25px">
                        <div class="col-md-3">
                            <span class="key">Đánh giá của bạn</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <textarea type="text" required class="form-control" rows="5" v-model="objProject.review"></textarea>
                        </div>
                    </div>
                    <div class="footer d-flex px-0" >
                        <button ref="btnSubmit" class="d-none" type="submit"></button>
                        <div @click="triggerForm('CANCEL')" class="btn-confirm   w-100" >
                            <span>KẾT THÚC DỰ ÁN</span>
                        </div>
                    </div>
                </div>
            </form>

          </div>
        </div>
      </template>
    </Modal>
</template>
<script>
export default {
    props:['project','auction'],
    data(){
        return{
            numberRate:0,
            objProject:{
            }
        }
    },
    methods:{
        endProject(){
            this.loader()
            var obj = {
                ...this.objProject,
                auction: this.auction.deal[0].auction,
                project:this.auction.deal[0].project,
                auctionBy:this.auction.auctionBy._id,
                rating:this.numberRate
            }
            this.$post('member/auction/deal/finish',obj)
                .then(res => {
                    this.$emit('getDetailAgain')
                    this.hide()
                    this.loader(0)
                })
                .catch(err => {
                    this.loader(0)
                })
        },
        getRating(rate){
            this.numberRate = Number(rate.rating + 1)
        },
        triggerForm(){
            this.$refs.btnSubmit.click()
        },
        show() {
            this.$refs.modalReportCustomer.showModal();
        },
        hide(){
            this.$refs.modalReportCustomer.hideModal()
            this.numberRate = 0
        },
    }

}
</script>