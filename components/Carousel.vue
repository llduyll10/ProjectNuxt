<template>
  <div>
    <VueSlickCarousel
      :arrows="arrows"
      :dots="dots"
      :slidesToShow="slidesToShow"
      :slidesToScroll="slidesToScroll"
      :infinite="infinite"
      :responsive="responsive"
      :speed="500"
      :autoplay="false"
    >
      <slot name="content"></slot>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
 import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  props: [
    'dots',
    'arrows',
    'slidesToShow',
    'infinite',
    'numberShow',
    'slidesToScroll'
  ],
  data() {
    return {
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: this.numberShow || 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  }
};
</script>

