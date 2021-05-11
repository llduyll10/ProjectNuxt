
module.exports = {
    methods: {
      loading(off){
        if(off===0){
          this.$nuxt.$loading.finish();
        }else{
          this.$nuxt.$loading.start();
        }
      },
      isMobile: function() {
      },
      getCategory(){
        return [
            { value: 1, text: 'Thi công xây dựng' },
            { value: 2, text: 'Thi công/trang trí nội thất' },
            { value: 3, text: 'Thiết kế kiến trúc/nội ' }
        ]
      } 
    }
};